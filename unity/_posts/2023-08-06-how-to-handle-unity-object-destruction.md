---
layout: post
title: Object.Destroy()로 Unity 오브젝트 소멸시키기
image: 
  path: /assets/img/blog/how-to-handle-unity-object-destruction/how-to-handle-unity-object-destruction-cover.png
comments: true
description: >
  Unity 오브젝트 소멸 제대로 이해하기
excerpt_separator:
last_modified_at: 2023-08-13T21:00
---
더 이상 사용하지 않는 유니티 오브젝트들은 직접 UnityEngine.Object.Destroy 함수를 호출하여 소멸시켜야 한다. 실제 유니티에서는 이러한 유니티 오브젝트들에 대해서 네이티브 레벨에서 직접 생성과 소멸을 관리하기 때문이다. 따라서 이러한 네이티브 오브젝트들은 모든 참조가 사라져도 GC에 의해 자동으로 회수되거나 하지 않는다. 그러므로 만약 Destroy 호출을 누락한다면, 사용되지 않는 유니티 오브젝트 리소스가 메모리 남게 되어서 자원이 낭비되는 상황이 발생하게 된다. 

```
// Destroy 호출의 예
Destroy(gameObject); // 게임오브젝트를 제거한다.
Destroy(gameObject, 3); // 지금부터 3초 후, 게임오브젝트를 제거한다.
Destroy(this); // 게임오브젝트에서 이 스크립트 인스턴스를 제거한다.
Destroy(_material); // 머티리얼(리소스) 오브젝트를 제거한다.
```

## 실제 소멸 시기
Destroy 호출과 함께 바로 해당 오브젝트가 소멸되는 것이 아니다. 실제 소멸은 항상 현재 업데이트 루프 이후까지 지연되며, 그래도 렌더링 이전에는 항상 완료가 된다.

## 더 이상 유효하지 않은 참조
Destroy를 호출한 후, 해당 오브젝트와 관련된 참조들은 더 이상 유효하지 않게 된다. 여전히 만약 그대로 참조를 들고 있는 상태에서 null과 비교하면 true을 반환할 것이다. 또한 이미 오브젝트가 소멸한 후, 해당 오브젝트의 멤버 변수에 접근하거나 메소드를 호출한다면 MissingReferenceException이 발생하게 된다.

## 실제 메모리 해제 시점
객체의 소멸이 실제 메모리의 해제를 의미하는 것은 아니며, 일종의 삭제 예정 상태라고 볼 수 있다. 실제 메모리 해제가 되는 시점은 유니티에서 알아서 효율적으로 관리하므로, 그냥 맡겨두면 된다.

## 호출 보장이 되지 않는 MonoBehaviour.OnDestroy()
MonoBehaviour 컴포넌트 소멸 시 또는 이것이 연결된 게임오브젝트가 소멸 할 때에 OnDestroy 호출이 무조건 발생하지 않는다는 점을 주의하자. 결론을 말하자면, 게임오브젝트가 활성화되지 않아서 MonoBahaviour 컴포넌트의 초기화가 이루어진 적이 없다면, 게임오브젝트나 컴포넌트를 소멸시켜도 OnDestroy는 호출되지 않는다. 다시 쉽게 말하면, MonoBehaviour 컴포넌트의 Awake함수가 호출된 적이 있는 경우에만 OnDestroy 함수 호출이 보장된다.

그래서 다음과 같은 상황에서는 유의할 필요가 있다:

- 씬에서 기본적으로 비활성화된 게임오브젝트(또는 연결된 컴포넌트)를 Destroy할 경우, OnDestroy는 호출되지 않는다. (물론 씬 로딩 후, 단 한번도 활성화된 적이 없는 경우를 의미한다.)
- 아래와 같이, 직접 게임오브젝트를 생성하는 경우, OnDestroy는 호출되지 않는다. MyComponent가 추가되기 전에 게임 오브젝트가 비활성화 상태이므로, Awake가 호출된 적이 없는 상태에서 소멸이 이루어졌다.    
    ```csharp
    GameObject myObject = new GameObject();
    myObject.SetActive(false);
    myObject.AddComponent<MyComponent>();
    Destroy(myObject);
    ```
    아래의 경우엔 OnDestroy가 호출된다. MyComponent 컴포넌트가 추가되는 시점에서 게임오브젝트는 기본적으로 활성화 상태였다. 따라서, 컴포넌트의 초기화가 이루어졌고 Awake함수가 호출되었다.
    
    ```csharp
    GameObject myObject = new GameObject();
    myObject.AddComponent<MyComponent>();
    myObject.SetActive(false);
    Destroy(myObject);
    ```
## 레퍼런스
[Unity - Object.Destroy](https://docs.unity3d.com/ScriptReference/Object.Destroy.html)  
[Unity - MonoBehaviour.OnDestroy](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnDestroy.html)  
[Unity GameObject의 OnDestroy의 호출은 보장되지 않는다.](https://mentum.tistory.com/621) 
