---
layout: project
title: "GitHub Pages 포트폴리오"
subtitle: "Jekyll + Bootstrap + Custom JS/CSS 과제용 웹사이트"
category: "web"
tags:
  - HTML
  - CSS
  - Bootstrap 5
  - JavaScript
  - GitHub Pages
repo: "https://github.com/JCG3333/"
demo: "https://jcg3333.github.io/"
---

## 개요

이 프로젝트는 GitHub Pages와 Jekyll을 기반으로 한 포트폴리오용 웹사이트입니다.
기존 테마 대신 Bootstrap 5와 MDB 분위기의 커스텀 디자인을 적용하여,
반응형 그리드, 카드 레이아웃, 카테고리 필터, 리플 이펙트 등을 구현했습니다.

## 구현 목표

- 교수님 과제에서 요구하는 **CSS / JavaScript 활용**을 명확하게 보여주기
- GitHub Pages 환경(Jekyll)에서도 유지보수가 쉬운 구조 만들기
- 이후 다른 프로젝트들도 쉽게 추가할 수 있는 **재사용 가능한 템플릿** 설계

## 주요 기능

1. **부트스트랩 기반 레이아웃**
   - `_layouts/default.html`에 Bootstrap 5 CDN 적용
   - 네비게이션 바, 반응형 그리드, 카드 컴포넌트 사용

2. **MDB 스타일 커스텀 카드 디자인**
   - `assets/css/custom.css`에서 배경 그라디언트, 둥근 카드, 그림자, 그라디언트 버튼 구현
   - 호버 시 카드가 살짝 떠오르는 애니메이션 적용

3. **카테고리 필터 기능 (JavaScript)**
   - 상단에 `ALL / WEB / GAME / DATA` 필터 버튼
   - 각 카드에 `data-category` 속성을 부여하고,
     버튼 클릭 시 해당 카테고리만 보이도록 필터링

4. **리플(Ripple) 이펙트**
   - 버튼 및 카드 클릭 시, 클릭 지점을 중심으로 퍼지는 원형 리플 효과 구현
   - MDB UI의 클릭 감성을 JavaScript로 직접 구현

## 기술 스택

- **Frontend**: HTML, CSS, Bootstrap 5
- **Styling**: Custom CSS (MDB 스타일 참고)
- **Script**: 순수 JavaScript
- **Hosting**: GitHub Pages (Jekyll)

## 회고

초기에는 커스텀 CSS 때문에 기존 테마가 모두 깨지는 문제가 있었지만,
Bootstrap을 기준으로 구조를 다시 잡아 해결했습니다.
이후로는 `custom.css`와 `main.js`만 수정하면 되도록 설계해서,
향후 유지보수와 확장이 훨씬 편해졌습니다.
