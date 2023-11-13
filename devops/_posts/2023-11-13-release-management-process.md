---
layout: post
title: 릴리스 매니지먼트 프로세스
comments: true
description: 
excerpt_separator:
last_modified_at: 2023-11-13T00:00
---

[이전에 클라이언트 개발 라이프사이클을 정리한 내용](2023-08-15-dev-lifecycle-diagram.md)을 시작으로, 그 후 퍼블리셔와의 협업하는 부분에 대해 어느 정도 정립이 가능한 단계에 들어서면서 릴리스 매니지먼트 프로세스에 대한 명확한 그림을 그리는 것이 가능해졌다:

![Untitled](/assets/img/blog/release-management-process/release-management-process-scheme.png)  

빌드는 그게 3가지 유형으로 구분하며, 각각 Dev, QA, Release 빌드라고 지칭한다:  
- Dev 빌드를 관리하는 주체는 개발 스튜디오이며, 외부 어디에도 연관되지 않는다.
- QA 빌드는 qa 및 테스팅 주체가 누구냐에 따라서 각각 별도 구성으로 분기된다. 이 때, 분기를 판단하기 위한 기준값은 빌드의 리비전이다.
- Release 빌드는 그 관리 주체가 오직 퍼블리셔다. 퍼블리셔는 프로덕션 버전값을 제어함으로써 현재 빌드가 Staging 단계에 머물지 아니면 Production 단계로 진행할 지를 결정할 수 있다.
