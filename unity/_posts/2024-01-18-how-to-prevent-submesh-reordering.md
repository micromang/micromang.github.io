---
layout: post
title: 서브메시 드로우 순서 리오더링 방지
comments: true  
description: >
  서브메시에 대한 최적화 메커니즘 거스르기
excerpt_separator:
last_modified_at: 2024-01-18T21:30
redirect_to: https://ahden23.github.io/unity/2024/01/18/how-to-prevent-submesh-reordering.html
---

유니티는 렌더링 성능을 최적화하기 위해 머티리얼과 렌더링 설정을 기반으로 오브젝트들을 자동으로 정렬한다. 이 과정에서 (렌더링 상태 변경을 최소화하기 위해) 동일한 머티리얼을 사용하는 것들끼리 묶어서 함께 렌더링할 수 있다. 이러한 엔진에서의 최적화는 개발자가 의도한 렌더링 순서에 영향을 줄 수 있다.

특히 반투명이나 오버레이와 같이 순서 의존적인 렌더링 특성을 가진 서브메시들은 개발자가 의도에 맞는 렌더링 순서를 유지하는 것이 중요하다. 이런 상황에서 엔진 내부에서의 자동 최적화 메커니즘은 오히려 개발자를 난감하게 만들 수 있다.

## 의도적으로 서브메시들의 렌더링 순서 유지하기
그러면 엔진의 최적화 동작을 거슬러 내가 의도한 서브메시 렌더링 순서를 유지하려면 어떻게 해야 할까? 사실 이것은 스파인과 같이 렌더링 순서 의존성이 중요한 라이브러리에서 이미 힌트가 들어 있다. 다음 코드는 스파인 라이브러리 함수의 일부이다:

```csharp
  for (int i = 0; i < meshRenderer.sharedMaterials.Length; ++i) {
    if (!meshRenderer.sharedMaterials[i])
      continue;

    if (!hasPerRendererBlock) meshRenderer.GetPropertyBlock(reusedPropertyBlock, i);
    // Note: this parameter shall not exist at any shader, then Unity will create separate
    // material instances (not in terms of memory cost or leakage).
    reusedPropertyBlock.SetFloat(SUBMESH_DUMMY_PARAM_ID, i);
    meshRenderer.SetPropertyBlock(reusedPropertyBlock, i);

    meshRenderer.sharedMaterials[i].enableInstancing = false;
  }
```
코드에서 각 서브메시의 머티리얼에 대해 존재하지 않는 셰이더 프로퍼티에 대한 MaterialPropertyBlock 을 설정함으로써, 각 서브메시를 별도의 렌더링 오브젝트로 간주하도록 유도한다. 이렇게 함으로써, 렌더링 엔진이 서브메시들을 자동으로 묶지 않고 개별적으로 처리하도록 만든다. 결과적으로, 개발자가 의도한 렌더링 순서가 유지될 수 있게 된다.

## 마치며
엔진 내부에서 일어나는 서브메시 렌더링 최적화 메커니즘 중에 하나를 살펴봤고, 이것을 의도적으로 막기 위한 방법에 대해서도 알아봤다. 엔진 최적화 동작이 개발자가 가정하고 있는 부분을 깨뜨릴 수 있다는 점을 항상 유의하도록 하자.

