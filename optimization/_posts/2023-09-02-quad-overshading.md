---
layout: post
title: 쿼드 오버셰이딩, The Silent Performance Killer
image: 
  path: /assets/img/blog/quad-overshading/cover.png
comments: true  
description: >
  쿼드 오버셰이딩 이해하기
excerpt_separator:
last_modified_at: 2023-09-02T21:00
---

지나치게 조밀한 폴리곤으로 제작된 모델을 화면에 렌더링하면 어떠한 부분의 성능 병목에 영향을 끼칠까?
![Untitled](/assets/img/blog/quad-overshading/a1.jpeg)

대부분은 버텍스 처리와 관련한 지오메트리 레벨의 성능 부하를 생각할 것이다. 이건 매우 당연하다. 그만큼 GPU에서 처리해야 할 버텍스가 많아지기 때문이다. 그런데 상황에 따라 사실 더 주목해야 할 쪽은 오히려 프래그먼트 레벨 즉 픽셀 셰이딩 성능 부하이다. 
버텍스 개수가 늘어났는데 픽셀 처리 비용이 늘어난다고? 
하이-폴리곤이나 로우-폴리곤 상관없이, 어차피 화면에 동일한 픽셀 영역에 그려진다면 셰이딩 비용이 늘어날 이유가 없는 것 아니었나? 
사실 그렇지 않다.

## 쿼드
GPU는 2x2 픽셀 단위로 삼각형을 셰이딩한다. 어떤 폴리곤이 래스터라이징을 거쳐 화면의 픽셀로 셰이딩 처리를 해야 할 때, 1 픽셀이 아닌 2x2 픽셀 그룹 단위로 처리된다는 말이다.  
![Untitled](/assets/img/blog/quad-overshading/a2.png)  
예를 들어, 삼각형 크기가 아주 작아서 화면에 렌더링되었을 때에 단지 한 픽셀을 차지한다고 해도 1픽셀이 아닌 인접한 4개의 픽셀에 대해 셰이딩 처리가 된다. 이처럼 프래그먼트 셰이딩을 처리하는 최소 단위인 2x2 픽셀 영역 블록을 쿼드(quad)라고 부른다. 다시 말하자면, 프래그먼트 셰이딩 처리는 쿼드 블록 단위로 일어난다.

## 쿼드 단위 연산이 필요한 이유
그러면 왜 쿼드 단위로 셰이딩을 처리할까? 그 이유는 적절한 밉맵 레벨 선택 및 필터링 작업을 위해서 필요하기 때문이다. 렌더링 성능 향상을 위해 우리는 밉맵(mipmap)을 사용한다. 하드웨어는 고해상도부터 저해상도 텍스처에 걸친 여러 밉맵 레벨 중에서 최적의 밉맵 텍스처를 선택해야 한다. 텍셀 영역 사이즈가 화면 픽셀 영역 사이즈와 거의 같아야 최적의 밉맵 텍스처가 되며, 이것을 결정하기 위해서는 텍셀과 픽셀 사이즈 비교 목적의 면적 값이 필요하다. 만약 단일 프래그먼트 셰이딩만 처리한다고 하면, 면적없는 포인트 샘플만 있기 때문에 면적 비교가 불가능하다. 그래서 인접한 2x2 영역의 4개 프래그먼트를 병렬로 샘플링하고 x 또는 y의 차분을 통해 dx/dy 도함수를 사용하여 샘플 영역 크기를 추정하는 것이다.

## 오버셰이딩: 잠재된 프래그먼트 성능 부하
쿼드 단위의 셰이딩은 실제 화면 픽셀과 관련된 셰이딩 처리 횟수 이상의 셰이딩 연산 즉, 오버셰이딩을 일으킨다 (오버셰이딩은 일종의 오버드로(overdraw)라고 볼 수 있기 때문에 쿼드 오버드로(quad overdraw)라고 지칭하기도 한다). 일반적인 상황에선 이 오버셰이딩은 큰 문제가 되지 않는다. 그러나 프래그먼트(픽셀) 셰이더 복잡성에 따라서 만약 매우 작은 크기 삼각형이나 아주 얇은 삼각형이 많은 메시를 렌더링할 경우에는 그 연산 비용이 크게 증가할 수 있다.
### 매우 작은 삼각형
매우 작은 삼각형을 다시 생각해보자. 삼각형이 너무 작아서 화면에 1픽셀만 차지한다 해도, 어쨋든 쿼드 단위로 처리되기 때문에 4개의 프래그먼트 셰이딩이 발생합니다. 나머지 3개의 셰이딩 결과값은 화면 픽셀에는 반영되지 않고 1개만 유효합니다. 4개 중에 1개만 유효하므로 25% 효율성을 보인다.
![Untitled](/assets/img/blog/quad-overshading/a3.png)  
### 삼각형 에지
어느 정도의 면적을 갖는 일반적인 삼각형은 어떨까? 아래 그림에서 보는 것과 같이, 면적 안쪽에는 쿼드의 모든 픽셀이 화면 표시 픽셀로써 유효하기 때문에 100% 효율을 보인다. 그러나 가장자리 영역 즉, 에지 쪽으로 가면 그 효율은 낮아진다. 삼각형 에지 영역은 실제 화면 픽셀 영역을 벗어난 셰이딩 연산이 추가된다.
또한 삼각형이라고 다 같은 삼각형은 아니다. 길고 가느다란 모양의 삼각형은 삼각형 면적 대비 에지(모서리)가 차지하는 비율이 높기 때문에 효율이 더욱 떨어진다.

<img src="/assets/img/blog/quad-overshading/a4.png" alt="이미지_설명" style="max-width:40%; height:auto;">
<img src="/assets/img/blog/quad-overshading/a5.png" alt="이미지_설명" style="max-width:40%; height:auto;">

### 폴리곤 누적 효과
보통 3D 모델은 수백에서 수만개의 삼각형이 모여 하나의 모델을 구성한다. 따라서 각 삼각형 단위로 그려질 때 마다 에지 근처 오버셰이딩은 누적된다.
아래의 그림을 보면, 3D 모델을 더 작은 삼각형들로 쪼개서 구성할수록 오버셰이딩이 심해지는 것을 볼 수 있다. 오버셰이딩가 심해진다는 것은 프래그먼트 처리 작업이 많다는 뜻이고, 이것은 GPU 프래그먼트 비용 증가로 인한 성능 저하로 연결된다.
![Untitled](/assets/img/blog/quad-overshading/a6.png)  
### 복잡한 프래그먼트 셰이더 연산
오버셰이딩은 연산할 프래그먼트 개수가 더 늘어난다는 의미이므로, 만약 프래그먼트 셰이더 코드의 연산이 복잡하해서 무겁다면 성능에 더 나쁜 영향을 준다. 예를 들어, 단일 패스에서 라이팅과 셰이딩 연산을 모두 수행하게 되는 포워드 렌더링 파이프라인에서 오버셰이딩에 의한 비용 증가는 더욱 치명적일 수 있다.

## 결론: 오버셰이딩을 조심하자
쿼드 오버셰이딩은 최적화 측면에서 잘못하면 간과하기 쉬우므로 주의해야 한다. 이 오버셰이딩에 의해 발생하는 성능부하를 줄이려면, 삼각형 영역 대비 에지 영역 비율을 최소화하여야 한다. 따라서 적절한 LOD를 필수적으로 활용하도록 하고, 너무 작은 삼각형 또는 가늘고 긴 모양 삼각형 사용은 최대한 피하도록 하자.

## 레퍼런스
[A trip through the Graphics Pipeline 2011, part 8](https://fgiesen.wordpress.com/2011/07/10/a-trip-through-the-graphics-pipeline-2011-part-8/)  
[What are screen space derivatives and when would I use them?](https://gamedev.stackexchange.com/questions/130888/what-are-screen-space-derivatives-and-when-would-i-use-them)  
[Counting Quads](https://blog.selfshadow.com/2012/11/12/counting-quads/)  
[Unreal* Engine 4 Optimization Tutorial, Part 4](https://www.intel.com/content/www/us/en/developer/articles/training/unreal-engine-4-optimization-tutorial-part-4.html)  
[How Mipmapping Works](https://paroj.github.io/gltut/Texturing/Tut15%20How%20Mipmapping%20Works.html)  
[Optimizing Triangles for a Full-screen Pass](https://wallisc.github.io/rendering/2021/04/18/Fullscreen-Pass.html)  