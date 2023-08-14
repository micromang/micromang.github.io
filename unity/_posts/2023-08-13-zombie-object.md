---
layout: post
title: Destroy 메서드로 Unity 오브젝트 소멸시키기 - Part 2
image: 
  path: /assets/img/blog/zombie-object/zombie-object-cover.png
comments: true  
description: >
  좀비 오브젝트로 인한 메모리 누수를 조심하자
excerpt_separator:
last_modified_at: 2023-08-13T23:59
---

UnityEngine.Object는 개념적으로 두 부분으로 구성된다.
- 첫번째는 관리 오브젝트(managed Object)로서, C#으로 작성된 실제 우리가 접하는 영역이고 .NET 환경 내에서 동작한다. 따라서 이것은 GC에 의해 수집된다. 
- 두번째는 네이티브 오브젝트(native Object)로서, 유니티 엔진의 네이티브 레벨(C++)에 할당된다. 이것이 실제적인 핵심 리소스이며 전적으로 엔진에 의해서 관리된다.
메모리를 해제하려면 Destroy 메서드를 호출해야 한다.
이렇게 유니티 오브젝트는 두 영역으로 구분되며, 각 영역의 오브젝트는 서로 연결되어 있다.
![Untitled](/assets/img/blog/zombie-object/z-01.png)

## Destroy 호출하면 안에서 무슨 일이 일어나는가?
Destroy 메서드를 명시적으로 호출하면, 사실 네이티브 오브젝트가 메모리에서 해제된다. 관리 오브젝트는 자신과 연결된 실제 네이티브 오브젝트가 사라졌기 때문에, m_CachedPtr은 0으로 설정이 되고 이 유니티 오브젝트는 이제 유효하지 않게 된다. 그래서 이 오브젝트 참조를 통해서 여전히 멤버 변수에 접근하거나 메서드를 호출하려고 시도하면 MissingReferenceException이 발생한다. 관리 오브젝트 참조 자체가 null인 것은 아니기 때문에 NullReferenceException이 발생하지는 않지만, == 연산자로써 null과 비교하게 되면, (연산자 오버라이드에 의해) true가 반환된다.
우선 유니티의 네이티브 오브젝트는 제거되었지만, 관리 오브젝트는 여전히 남아 있다. 이것은 GC에 의해 관리되는 오브젝트이기 때문에, 이 오브젝트에 대한 모든 참조가 사라지면 GC에 의해 회수될 것이다.
![Untitled](/assets/img/blog/zombie-object/z-02.png)


## 좀비 오브젝트 
Destroy가 호출된 후 네이티브 오브젝트가 제거되고 m_CachedPtr가 0이 되어서 더 이상 유효하지 않은 오브젝트가 되었음에도 불구하고, 다른 오브젝트가 이 오브젝트에 대한 참조를 들고 있다면, 메모리에 그대로 남은 상태가 된다. 그야말로 좀비와 다름없다. 이것은 유니티에서 흔히 발생할 수 있는 관리 오브젝트 메모리 누수 현상으로서, 해당 오브젝트와 관련된 모든 참조를 제거하지 않으면, 이 관리 오브젝트는 좀비처럼 메모리 상에 떠돌게 될 것이다.
![Untitled](/assets/img/blog/zombie-object/z-03.png)
보통 이벤트 핸들러, 델리게이트, 싱글턴 패턴, 코루틴 등에서 참조가 남거나 정적 리스트나 컬렉션에 오브젝트 참조가 여전히 포함되어 있다면 이런 현상이 발생할 수 있으니 반드시 주의해야 한다.