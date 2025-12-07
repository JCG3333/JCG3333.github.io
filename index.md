---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
  <div class="hero-inner">
    <h1>JCG3333</h1>
    <p>서울사이버대학교 빅데이터·정보보호학과 재학생</p>
  </div>
</section>

<div class="page-root">

  <!-- 소개 -->
  <section class="section-card">
    <h2>소개</h2>
    <p>
      관심 있는 기술을 배우면 직접 만들어보고, 만들면 개선하고 싶은 타입입니다.<br>
      데이터 처리, 자동화, 간단한 웹 서비스 구성 등 여러 시도를 해보며 배우고 있습니다.
    </p>
    <p>
      완성도가 높지 않은 결과물도 많지만, 시행착오를 겪으며 하나씩 나아지는 과정이 재미있습니다.<br>
      기술을 빠르게 따라가는 것보다, 원리를 이해하고 스스로 적용해보는 것을 더 중요하게 생각합니다.<br>
      앞으로도 흥미 있는 주제를 직접 탐구하고, 작은 결과물이라도 남기면서 성장하고 싶습니다.
    </p>
  </section>

  <!-- 기술 스택 -->
  <section class="section-card">
    <h2>기술 스택</h2>
    <p class="section-subtext">현재 사용해 보거나 학습 중인 기술들입니다.</p>
    <div class="pill-row">
      <span class="pill">Python</span>
      <span class="pill">JavaScript</span>
      <span class="pill">HTML / CSS</span>
      <span class="pill">Git / GitHub</span>
      <span class="pill">Linux 기본 환경</span>
      <span class="pill">간단한 자동화 스크립트</span>
    </div>
    <p class="note">
      새로운 기술을 한 번에 깊게 파기보다는,<br>
      필요할 때 직접 만들어보고, 여러 번 손대면서 익숙해지는 방식을 선호합니다.
    </p>
  </section>

  <!-- 학습 경험 -->
  <section class="section-learning">
    <h2>학습 경험</h2>
    <p class="section-subtext">수업과 개인 실험을 통해 경험한 내용입니다.</p>

    <div class="learning-grid">
      <article class="learning-card">
        <h3>Git / GitHub</h3>
        <p>버전 관리와 원격 저장소를 이용해 작은 프로젝트의 이력을 관리해 보았습니다.</p>
      </article>

      <article class="learning-card">
        <h3>웹 프로그래밍</h3>
        <p>HTML, CSS, JavaScript로 간단한 정적 페이지와 포트폴리오 사이트를 구성했습니다.</p>
      </article>

      <article class="learning-card">
        <h3>자동화 & 운영</h3>
        <p>클라우드 환경에서 더미 자동매매 봇과 감성 분석 스크립트를 지속적으로 실행해 보았습니다.</p>
      </article>
    </div>
  </section>

  <!-- 프로젝트 -->
  <section class="section-card section-projects">
    <h2>프로젝트</h2>
    <p class="section-subtext">
      학습 과정에서 진행한 실습과 프로젝트 중, 운영 경험이 있었던 작업들을 정리하고 있습니다.
    </p>

    <div class="projects-grid">

      <!-- AWS + 감성분석 프로젝트 카드 -->
      <article class="project-card">
        <div class="project-thumb">
          <img src="/assets/img/projects/github-portfolio/1.png" alt="AWS 프로젝트 썸네일">
        </div>
        <div class="project-body">
          <h3>AWS 기반 더미 자동매매 봇 운영 환경</h3>
          <p>
            더미 자동매매 봇을 AWS EC2 환경에 배포하고, 리눅스 서비스(systemd)로 등록해
            항상 동작하는 형태의 운영 환경을 구성한 프로젝트입니다.
            별도로 감성 분석 스크립트를 주기적으로 실행하여 데이터를 쌓는 실험도 함께 진행했습니다.
          </p>
          <ul class="project-list">
            <li>EC2 + Python 환경 구성 및 배포</li>
            <li>systemd를 이용한 자동 실행·재시작 설정</li>
            <li>뉴스 기반 감성 분석 데이터 지속 수집</li>
          </ul>
          <a class="project-link" href="/projects/aws-trading-bot">프로젝트 상세 보기</a>
        </div>
      </article>

      <!-- 필요하면 나중에 다른 프로젝트 카드 추가 -->
      <!--
      <article class="project-card">
        ...
      </article>
      -->

    </div>
  </section>

  <!-- Contact -->
  <section class="section-card">
    <h2>Contact</h2>
    <p class="section-subtext">간단한 피드백이나 문의는 아래 경로로 받고 있습니다.</p>
    <ul class="contact-list">
      <li>GitHub: <a href="https://github.com/JCG3333" target="_blank">https://github.com/JCG3333</a></li>
      <li>Email: wlckdrms94@gmail.com</li>
    </ul>
  </section>

</div>
