---
layout: post
title: 빌드 자동화 파이프라인 구조 다이어그램
image: 
  path: /assets/img/blog/unity-render-sorting-00.png
comments: true
description: 
excerpt_separator:
last_modified_at: 2023-06-11T23:20
---
빌드/배포 자동화를 위해 작성했던 젠킨스 파이프라인 스크립트를 간단하게 그림으로 정리해보았다. 4단계의 Phase로 구분할 수 있으며, 사실 가장 핵심은 세 번째 Phase인 스테이지 단계이다. 스테이지 단계에서 실제 빌드에 관한 모든 작업이 일어난다.

![Untitled](/assets/img/blog/build-pipeline-diagram/Untitled.png)

## Phase 1: 빌드 파라미터 설정

Jenkins 파이프라인에서 빌드를 진행하기 위해 필수 파라미터들을 지정한다. 빌드 파라미터에는 빌드 버전, 개발 스테이지, 타겟 리비전, 타겟 플랫폼, 타겟 아웃풋, 클린 빌드 여부 등 여러 가지가 있다.

## Phase 2: 에이전트 지정

![Untitled](/assets/img/blog/build-pipeline-diagram/Untitled1.png)

빌드를 진행할 에이전트를 지정한다. 현재 빌드 에이전트는 3개의 별도 머신으로 세팅해두었다. 윈도우 빌드와 android 빌드를 위한 윈도우 os 머신 2대와 ios 빌드를 위한 맥 os 머신 1대이다. 
서비스할 시점에 가까워지면, 에이전트 개수는 추가로 몇 대 더 늘릴 예정이다.

## Phase 3: 스테이지

### Stage 1 - Preparation

![Untitled](/assets/img/blog/build-pipeline-diagram/Untitled2.png)

### Stage 2 - Source

![Untitled](/assets/img/blog/build-pipeline-diagram/Untitled3.png)

### Stage 3 - Build

![Untitled](/assets/img/blog/build-pipeline-diagram/Untitled4.png)

**빌드 정보 클래스 작성** 
빌드 정보를 포함하는 정적 클래스 C# 스크립트를 작성한다. 클라이언트에서는 이 클래스를 접근하여 빌드 정보를 가져올 수 있다.

**빌드**
iOS 빌드를 제외한 모든 빌드는 unity 빌드만 수행하면 된다. iOS는 Xcode 빌드를 추가로 수행하며 아카이브와 익스포트 작업이 여기 포함된다. 빌드 아웃풋은 개별 플레이어 및 에셋번들 빌드 외에도, 테스트를 위한 오토봇 빌드와 안티치트/안티해킹용 데디서버 빌드도 할 수 있다.

### Stage 4 - Deploy

![Untitled](/assets/img/blog/build-pipeline-diagram/Untitled5.png)

현재는 내부 서버에만 배포하지만, 향후 릴리스를 위한 배포도 추가될 예정이다.

## Phase 4: 포스트 액션

빌드의 성공 또는 실패 알림 메시지를 이메일 또는 슬랙 채널에 전송한다.
