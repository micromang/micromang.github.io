---
layout: post
title: 클라이언트 개발 라이프사이클 다이어그램
image: 
  path: /assets/img/blog/dev-lifecycle-diagram/cover.png
comments: true
description: 
excerpt_separator:
last_modified_at: 2023-08-15T16:00
---
진행 중인 프로젝트의 클라이언트 개발 라이프사이클을 수립하는 작업을 진행하면서 간단히 그림으로 정리해 보았다:
![Untitled](/assets/img/blog/dev-lifecycle-diagram/lifecycle-diagram.png)

<aside>
⚠️ 아직은 개발 진행 중간 단계이므로, 버전 체크와 구성 설정 등 대부분의 작업은 클라 내부에서 처리하도록 구현하였다. 그러나 론칭/ 서비스 단계로 넘어갈 시점에는 이 역할은 엔트리 서버에서 전적으로 맡아야 하는 것이 여러 모로 바람직하다. 특히 글로벌 원 빌드 구성이라면 해당 역할을 엔트리 서버에서 맡는 것은 필수이다.
</aside>
