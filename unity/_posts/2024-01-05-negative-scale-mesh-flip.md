---
layout: post
title: 음수 스케일로 파티클 메시 플립하기
comments: true  
description: >
  유니티 엔진에서 MeshRenderer와 ParticleSystemRenderer의 음수 스케일 처리 방식은 다름을 이해한다.
excerpt_separator:
last_modified_at: 2024-01-05T14:00
---

![Untitled](/assets/img/blog/mesh-flip/mesh-flip.png)  

Unity에서 음수 스케일에 대해서 MeshRenderer의 메시를 처리하는 방식과 ParticleSystem에서 메시를 처리하는 방식이 다르다. 이론적으로 생각해보면, 음수 스케일을 설정하면 버텍스 위치가 반전될 뿐만 아니라 각 삼각형에서 버텍스 순서도 바뀌기 때문에 면 방향도 뒤집히게 된다. 파티클시스템에서의 처리 방식이 이것에 해당한다. 그런데 MeshRenderer에서는 버텍스 순서는 유지시켜주기 때문에 면 방향은 뒤집히지 않도록 내부적으로 처리가 되어 거울 반영 효과를 줄 수 있다. 

어쨋든 이러한 이유로 인해 파티클에서는 음수 스케일을 사용하면 원하는 비주얼 효과가 나오지 않게 된다. 그래서 MeshRenderer에서의 음수 스케일 처리 방식과 동일하게 파티클에서도 적용하려면 별도의 처리를 해줘야 한다. 
(Note: 물론 일반적으로 nity에서 메시에 관한 렌더링에 대해 음수 스케일을 사용하는 것은 권장되진 않는다. 노멀이나 물리 관련하여 복잡한 문제가 발생할 수 있기 때문이다. 하지만 단순한 환경조건이라는 전제 하에서는 미러링을 쉽게 적용할 수 있는 효과적인 방법이기도 하다.)

복잡한 고려사항없이 단순히 MeshRenderer와 같이 음수 스케일 플립 효과를 파티클에서도 적용하고 싶다면 다음 방법들을 고려할 수 있다:

## 메시 삼각형 순서 직접 뒤집기

메시 데이터를 가져와 음수 스케일일 경우에 한해 버퍼에서 삼각형 순서를 플립해준다. 메시 데이터를 조작하는 비용이 있기 때문에, 초기화 때 스케일 부호가 확정되는 경우에만 사용해야 할 것이다. 메시 임포터 read/write 옵션을 켜줘야 하므로 메모리 비용도 추가로 발생한다. 아주 무식한 방법으로 사용할 일이 거의 없다. 

```csharp
void FlipMeshTriangles()
  {
      int[] triangles = _psRenderer.mesh.triangles;
      for (int i = 0; i < triangles.Length; i += 3)
      {
          int temp = triangles[i + 0];
          triangles[i + 0] = triangles[i + 1];
          triangles[i + 1] = temp;
      }
      _psRenderer.mesh.triangles = triangles;
  }
```

## 적절한 Cull 타입 업데이트하기

이 방법이 사실 가장 간단하다. 현재 스케일이 음수인지 양수인지만 확인이 가능하다면, 그 결과에 상응하는 Cull 타입을 셰이더 프로퍼티를 활용하여 업데이트해준다. 예를 들어, 보통 상황에서는 Cull Back으로 설정하고 음수 스케일일 경우 Cull Front로 변경해주는 것이다. 실시간으로 스케일값의 부호가 바뀔 수 있을 때 사용하기 좋다.
참고로, Unity에서 Cull 모드는 상태 속성이기 때문에, MaterialPropertyBlock을 통해 변경할 수 없다. 즉, 머티리얼 레벨에서 처리되므로 각 머티리얼 인스턴스 별로 설정해야 한다.

```csharp
Shader "Custom/Sample"
{
  Properties 
  {
    **[Enum(UnityEngine.Rendering.CullMode)] _CullType ("Cull", Float) = 2**
  }
  
  SubShader 
  {
    Pass 
    {
      **Cull [_CullType]**
    }

  ...
```


