---
layout: post
title: 모바일에서의 타일기반 렌더링
comments: true  
description: >
  타일 기반 렌더링에 대한 기본 상식
excerpt_separator:
last_modified_at: 2023-10-27T00:00
---

전력 소모 및 발열의 대표적 원인은 메모리 읽기/쓰기 연산 비용이다. 모바일 기기와 같이 배터리 용량 한계가 주어진 환경에선 pc에 비해 매우 작은 메모리 대역폭을 갖도록 설계될 수 밖에 없다. 이 말인즉슨, pc환경을 생각하고 마음껏 메모리 대역폭을 남용하면 배터리가 남아나지 않을거라는 것이다.

## IMR (Immediate Mode Rendering) 
전통적으로 이어져 온 렌더링 방법은 어떤 드로우 명령에 대해서 오브젝트를 화면에 곧바로 그리는 방식이다. 그래서 삼각형이 화면 어느 위치에 있던지 상관없이, 드로우 명령에 따라 바로 화면의 픽셀에 그린다. 이 때, 메모리 접근 대상은 전체 프레임 버퍼이며, 근본적으로 캐시 적중률이 낮을 수 밖에 없는 구조이다. 따라서 모바일에서과 같이 메모리 대역폭이 작고 별도 비디오 메모리조차 없는 환경에서는 비효율적이다.  
<img src="/assets/img/blog/tile-based-rendering/tbr1.png" alt="" style="max-width:80%; height:auto;">  

## TBIMR (Tile-Based Immediate Mode Rendering)
TBIMR은 렌더패스 당 지오메트리 처리와 프래그먼트 처리를 나눠서 렌더링한다. 곧바로 화면 픽셀을 그리지 않고 먼저 타일링 작업을 한다.이는 화면 프레임을 타일로 분할하여, 처리해야 할 버텍스 정보를 타일 단위로 나누는 것이다. 해당 삼각형이 어느 타일에 속해 있는지를 기록하고 각 타일들의 크기에 맞는 삼각형으로 쪼갠다. 그 후, 타일 단위로 픽셀 그리기를 수행한다. 제한된 작은 타일 영역에서만 메모리 접근이 일어나기 때문에, 앞서 IMR 방식과는 달리 캐시미스가 대폭 줄어들게 된다. 또한 프레임 버퍼 메모리 영역이 타일 단위로 축소된다는 점 때문에, 타일에 대한 별도의 온칩 메모리를 두게 되어 더욱 빠르고 효율적인 메모리 처리를 할 수 있다. 또한 병렬 처리 관점에서 보면, IMR은 폴리곤 단위 병렬 처리이지만 TBIMR은 타일 간의 독립성을 보장하기 때문에 타일 단위 병렬 처리가 가능이다. 이것은 시스템 메모리로 인한 병목 현상이 없기에 병렬 처리 효율성을 더 높일 수 있다.  
<img src="/assets/img/blog/tile-based-rendering/tbr2.png" alt="" style="max-width:80%; height:auto;">  

## TBDR (Tile-Based Deferred Rendering)
TBDR은 TBIMR로부터 효율성을 좀더 고려한 방식이라고 볼 수 있다. TBDR에서는 래스터라이즈 단계에서 픽셀 단계로 바로 넘어가지 않고 지연시킨다. 먼저 타일에 속한 프리미티브들이 래스터라이즈 단계를 전부 거친 후, 깊이 테스트를 통해 실제 화면에 보이는 픽셀에 대한 정보들을 모두 기록한다. 여기서 화면에 표시되지 않는 픽셀들이 미리 제거되는 것이다. 그 후 픽셀 단계로 넘어가서 보이는 픽셀들에 대해서만 그리기 처리를 한다. 이로써 불필요한 픽셀 연산들과 텍스처 등을 버퍼에 읽어오는 행위를 줄이게 된다. 이것을 HSR(Hidden Surface Removal)이라고 하고, 하드웨어 수준에서 오버드로우를 줄여 성능 및 전력 효율을 향상시킨다. 그래서 TBDR에서는 소프트웨어 수준에서의 렌더 객체 정렬은 불필요하다.  
<img src="/assets/img/blog/tile-based-rendering/tbr3.png" alt="" style="max-width:100%; height:auto;">   

<img src="/assets/img/blog/tile-based-rendering/tbr4.png" alt="" style="max-width:40%; height:auto;">  


## 레퍼런스
[GPU 架構 淺談 : IMR, TBR, TBDR](http://wycwang.blogspot.com/2021/09/)  
[GPU Framebuffer Memory: Understanding Tiling](https://developer.samsung.com/galaxy-gamedev/resources/articles/gpu-framebuffer.html)  
[TBR和TBDR](https://zhuanlan.zhihu.com/p/429519726)  
[IMR、TBR、TBDR - GamesClient - 博客园](https://www.cnblogs.com/DOGame/p/14479159.html)  
[如何让手游更省带宽，耗电量更少？TBR渲染架构解析! - qwezx - 博客园](https://www.cnblogs.com/dyf214/p/12155789.html)  
[모바일GPU 동향](https://ettrends.etri.re.kr/ettrends/140/0905001809/28-2_050-057.pdf)   
[Tile based GPUs – Arm Developer](https://developer.arm.com/documentation/102662/0100/Tile-based-GPUs)  
[A look at the PowerVR graphics architecture: Tile-based rendering - Imagination](https://blog.imaginationtech.com/a-look-at-the-powervr-graphics-architecture-tile-based-rendering/)  






