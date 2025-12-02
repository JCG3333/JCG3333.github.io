---
title: Projects
layout: single
permalink: /projects/
---

# 🚀 Projects

<div class="project-grid">

  <div class="project-card">
    <h2>업비트 자동매매 시스템 (Upbit Auto Trader)</h2>
    <ul>
      <li><strong>설명:</strong> 업비트 API 기반 실시간 자동매매 봇으로, 변동성 중심 전략과 조건형 규칙을 적용해 매수·매도 결정을 자동화.</li>
      <li><strong>역할:</strong> 전략 설계, 데이터 수집·전처리, 자동 실행 스크립트 작성, 로그 관리 구조 설계.</li>
      <li><strong>기술 스택:</strong> Python, Upbit API, Pandas, Google Sheets API, Discord Webhook.</li>
    </ul>
  </div>

  <div class="project-card">
    <h2>감성분석 모델 개선 프로젝트 (Sentiment Rebuild)</h2>
    <ul>
      <li><strong>설명:</strong> 불안정했던 초기 감성분석 모델을 전처리 강화와 모델 교체를 통해 안정화.</li>
      <li><strong>역할:</strong> 텍스트 전처리 설계, 모델 선택 및 교체 실험, 성능 비교.</li>
      <li><strong>기술 스택:</strong> Python, HuggingFace Transformers, mrm8488 계열 모델, Pandas.</li>
    </ul>
  </div>

  <div class="project-card">
    <h2>AWS 클라우드 자동매매 이전 (AI Auto-Trader on AWS)</h2>
    <ul>
      <li><strong>설명:</strong> Oracle Cloud VPS에서 돌아가던 자동매매 시스템을 AWS로 이전해 운영 안정성과 백업 구조를 개선.</li>
      <li><strong>역할:</strong> 아키텍처 설계, 서비스 매핑(EC2, S3, DynamoDB, EventBridge 등), 모니터링 구조 설계.</li>
      <li><strong>기술 스택:</strong> AWS EC2, S3, DynamoDB, EventBridge, CloudWatch, IAM.</li>
    </ul>
  </div>

</div>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card');

    // IntersectionObserver로 스크롤 감지
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('project-card--visible');
          obs.unobserve(entry.target);  // 한 번 보인 카드는 다시 관찰 안 함
        }
      });
    }, {
      threshold: 0.2  // 카드의 20% 정도 보이면 애니메이션 시작
    });

    cards.forEach(card => observer.observe(card));
  });
</script>
