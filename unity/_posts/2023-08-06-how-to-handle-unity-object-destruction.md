---
layout: post
title: Object.Destroy()로 Unity 오브젝트 소멸시키기
image: 
  path: /assets/img/blog/unity-render-sorting-00.png
comments: true
description: >
  Unity 오브젝트 소멸 제대로 이해하기
excerpt_separator:
last_modified_at: 2023-08-06T21:00
---
더 이상 사용하지 않는 유니티 오브젝트들은 직접 UnityEngine.Object.Destroy 함수를 호출하여 소멸시켜야 한다. 유니티 오브젝트의 경우, 해당 오브젝트의 모든 참조가 없어지더라도 GC에 의해 자동으로 회수되지 않기 때문이다. 그 대신에 유니티 오브젝트에 대한 소멸과 더불어 실제 메모리 관리는 유니티 엔진에 의해 네이티브 레벨에서 직접 관리된다. 따라서 Destroy 호출을 누락하는 순간, 사용하지 않는 리소스가 메모리 남게 되어서 자원이 낭비되는 상황이 발생하게 된다. 

```
// Destroy 호출의 예
Destroy(gameObject); // 게임오브젝트를 제거한다.
Destroy(gameObject, 3); // 지금부터 3초 후, 게임오브젝트를 제거한다.
Destroy(this); // 게임오브젝트에서 이 스크립트 인스턴스를 제거한다.
Destroy(_material); // 머티리얼(리소스) 오브젝트를 제거한다.
```

## 실제 소멸 시기
Destroy 호출과 함께 바로 해당 오브젝트가 소멸되는 것이 아니다. 실제 소멸은 항상 현재 업데이트 루프 이후까지 지연되며, 그래도 렌더링 이전에는 항상 완료가 된다.

## 자동 null 참조 할당
Destroy를 호출하면, 해당 오브젝트와 관련된 참조들은 엔진이 알아서 null 할당을 해준다. 앞서 실제 소멸 시기가 Destroy 호출이 발생한 프레임 끝에서 발생하기 때문에, 다음 번 프레임에서부터 참조가 null로 할당되었음을 우리가 확인할 수 있다. 만약 소멸 대상이 게임 오브젝트였고 어떤 다른 게임 오브젝트에 연결된 컴포넌트에서 이 게임 오브젝트 참조나 그 연결된 컴포넌트 참조를 들고 있었다면 이것들은 null이 할당되어 있을 것이다. 

따라서 참조들은 더이상 유효하지 않기 때문에, ‘잘못된 접근’과 같은 이슈는 일어나지 않는다. 하지만 참조변수가 null로 변경되기 때문에, 만약 코드에서 null 체크 처리를 제대로 하지 않았다면 null 참조 예외가 발생하게 될 것이다. 

또한, 오브젝트 소멸에 의한 자동 null 참조 할당은 우리가 스크립트로 명시적으로 한 것이 아니기 때문에, 에디터 인스펙터 참조 필드 상에서는 Missing으로 표시가 된다.

## 실제 메모리 해제 시점
객체의 소멸이 실제 메모리의 해제를 의미하는 것은 아니며, 일종의 삭제 예정 상태라고 볼 수 있다. 실제 메모리 해제가 되는 시점은 유니티에서 알아서 효율적으로 관리하므로, 그냥 맡겨두면 된다.

## 호출 보장이 되지 않는 MonoBehaviour.OnDestroy()
MonoBehaviour 컴포넌트 소멸 시 또는 이것이 연결된 게임오브젝트가 소멸 할 때에 OnDestroy호출이 무조건 발생하지 않는다는 점을 주의하자. 결론을 말하자면, 게임오브젝트가 활성화되지 않아서 MonoBahaviour 컴포넌트의 초기화가 이루어진 적이 없다면, 게임오브젝트나 컴포넌트를 소멸시켜도 OnDestroy는 호출되지 않는다. 다시 쉽게 말하면, MonoBehaviour 컴포넌트의 Awake함수가 호출된 적이 있는 경우에만 OnDestroy 함수 호출이 보장된다.

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
