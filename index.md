---
layout: default
title: "포트폴리오"
---

<div class="page-header">
  <h1 class="text-light">My Projects</h1>
  <p class="text-secondary">
    GitHub Pages + Bootstrap + MDB 스타일 감성 포트폴리오
  </p>
</div>

<!-- 🔎 카테고리 필터 바 -->
<div class="filter-bar">
  <button class="filter-btn active" data-filter="all">ALL</button>
  <button class="filter-btn" data-filter="web">WEB</button>
  <button class="filter-btn" data-filter="game">GAME</button>
  <button class="filter-btn" data-filter="data">DATA</button>
</div>

<div class="row g-4">
  <!-- 프로젝트 카드 1 : Web -->
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card text-light project-card h-100" data-category="web">
        <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-2">GitHub Pages 포트폴리오</h5>
        <h6 class="card-subtitle mb-3 text-muted">Jekyll + Bootstrap</h6>
        <p class="card-text flex-grow-1">
            Jekyll 기반 GitHub Pages에 Bootstrap과 커스텀 CSS/JS를 적용하여,
            교수님 과제용 포트폴리오 페이지를 구성한 프로젝트입니다.
        </p>
        <div class="mt-2 mb-3">
            <span class="badge bg-primary tech-badge">HTML</span>
            <span class="badge bg-info tech-badge">CSS</span>
            <span class="badge bg-warning text-dark tech-badge">JavaScript</span>
            <span class="badge bg-success tech-badge">Bootstrap 5</span>
        </div>
        <a href="{{ '/projects/github-portfolio' | relative_url }}" class="btn-mdb mt-auto">
            상세 보기
        </a>
        </div>
    </div>
    </div>


  <!-- 프로젝트 카드 2 : Game -->
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card text-light project-card h-100" data-category="game">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-2">게임 관련 프로젝트</h5>
        <h6 class="card-subtitle mb-3 text-muted">Albion / LAN드스케이프</h6>
        <p class="card-text flex-grow-1">
          게임 시스템 분석, 장비 티어 구조, 혹은 LAN 기반 세계관을 정리한
          개인 프로젝트를 소개하는 슬롯입니다.
        </p>
        <div class="mt-2 mb-3">
          <span class="badge bg-secondary tech-badge">Game Design</span>
          <span class="badge bg-danger tech-badge">System</span>
        </div>
        <a href="#" class="btn-mdb mt-auto">
          자세히 보기
        </a>
      </div>
    </div>
  </div>

  <!-- 프로젝트 카드 3 : Data -->
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card text-light project-card h-100" data-category="data">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-2">자동매매 / 데이터 분석</h5>
        <h6 class="card-subtitle mb-3 text-muted">Python / ML / Backtest</h6>
        <p class="card-text flex-grow-1">
          크립토 자동매매, 빅데이터 분석기사 공부, ML 기반 전략 테스트 등
          데이터 분석 관련 프로젝트를 모아두는 공간입니다.
        </p>
        <div class="mt-2 mb-3">
          <span class="badge bg-info tech-badge">Python</span>
          <span class="badge bg-success tech-badge">Machine Learning</span>
          <span class="badge bg-primary tech-badge">Backtest</span>
        </div>
        <a href="#" class="btn-mdb mt-auto">
          상세 문서
        </a>
      </div>
    </div>
  </div>
</div>
