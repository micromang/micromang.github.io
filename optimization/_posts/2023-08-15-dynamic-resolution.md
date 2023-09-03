---
layout: post
title: Dynamic Resolution 적용하기
image: 
  path: /assets/img/blog/dynamic-resolution/cover.jpg
comments: true  
description: >
  동적 해상도로 쾌적한 FPS 유지하기
excerpt_separator:
last_modified_at: 2023-08-15T23:59
---

모바일 기기들은 성능이 제각각이므로 PC에 비해서 최적화에 더욱 신경써야 한다. 특히 저사양 기기에서도 게임 플레이가 원활히 진행되도록 하려면 동적 해상도(Dynamic Resolution)와 같은 기능은 도입하는 것이 좋다. 동적 해상도를 사용하면, 일관된 fps를 유지하도록 하여 사용자가 매끄러운 플레이 경험을 지속하게 할 수 있다. 뿐만 아니라, 해상도를 낮추어 렌더링함으로써 GPU 부하가 줄어들기 때문에 모바일 기기의 전력 소모를 줄이는 효과도 얻게 된다.
그래서 이번 프로젝트 인게임에 동적 해상도 기능을 적용해 보았다.

## 유니티의 동적 해상도

사실 동적 해상도는 서브샘플링과 슈퍼샘플링 방식을 모두 포함하지만, 유니티에서는 (fps 향상을 위한) 성능 최적화의 목적만 가지므로 서브샘플링 방식만 지원한다. 따라서 백 버퍼 해상도 이하의 해상도로 낮추어 다운스케일 렌더링하고, 이것을 원래의 백 버퍼 해상도로 업스케일링하는 과정을 거친다. (기본적으로 업스케일링에 어떤 필터방식을 사용했는지 문서에는 별다른 설명을 찾을 수 없다. 다만, HDRP에서는 업스케일링 필터를 직접 선택할 수 있다.)

## 동적 해상도 시나리오

현재 프로젝트가 빌트인 파이프라인을 사용하기 때문에, Dynamic Resolution Handler와 같은 간단한 인터페이스는 사용할 수는 없었고, 유니티에서 제공하는 샘플 스크립트를 참고하여 직접 적용하였다. 동적 해상도 시나리오에 대한 플로우차트는 아래와 같이 그려볼 수 있다:
![Untitled](/assets/img/blog/dynamic-resolution/dr-flowchart.png)

## 품질 저하 이슈

실시간으로 해상도를 낮추면서 발생하는 큰 문제점은 그래픽 품질이 떨어져 보인다는 것이다. 특히 UI 이미지가 다운스케일되면, 그래픽 품질이 더 극적으로 후져 보인다. 이것을 보완하기 위해서, UI와 월드를 구분하여 월드에만 동적 해상도를 적용하고 UI는 오리지널 해상도를 그대로 유지하도록 하였다. 이렇게 함으로써, 월드 해상도가 다소 낮아지는 상황에서도 플레이어의 그래픽 품질 저하 체감은 꽤나 무뎌진다.

## 레퍼런스
[Dynamic Resolution Rendering Article](https://www.intel.com/content/www/us/en/developer/articles/technical/dynamic-resolution-rendering-article.html)  
[Unity - Dynamic Resolution](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@16.0/manual/Dynamic-Resolution.html)   
[Unity - Dynamic Resolution Sample](https://github.com/Unity-Technologies/DynamicResolutionSample)  