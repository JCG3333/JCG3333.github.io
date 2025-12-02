---
title: Projects
layout: single
permalink: /projects/
---

# 🚀 Projects

## 1. 업비트 자동매매 시스템 (Upbit Auto Trader)

- **설명:** 업비트 API 기반 실시간 자동매매 봇으로, 변동성 중심 전략과 조건형 규칙을 적용해 매수·매도 결정을 자동화했습니다.  
- **역할:** 전략 설계, 데이터 수집·전처리, 자동 실행 스크립트 작성, 로그 관리 구조 설계  
- **기술 스택:** Python, Upbit API, Pandas, Google Sheets API, Discord Webhook  
- **상세 내용:**  
  - VPS 환경에서 24시간 구동  
  - 매매 로그를 디스코드와 구글 시트에 자동 기록  
  - TP/SL, 쿨다운, 시간대 제한 등 여러 전략 조합을 테스트  

---

## 2. 감성분석 모델 개선 프로젝트 (Sentiment Rebuild)

- **설명:** 초기에는 감성 분석 모델이 불안정해서 실제 자동매매에 쓰기 어려웠습니다.  
  전처리 강화와 허깅페이스 기반 모델 교체를 거치면서 점점 안정적인 결과를 만들었고,  
  현재는 뉴스 감성 지표를 자동매매 보조 피처로 사용할 수 있는 수준까지 개선했습니다.  
- **역할:** 텍스트 전처리 설계, 모델 선택 및 교체 실험, 성능 비교  
- **기술 스택:** Python, HuggingFace Transformers, mrm8488 계열 모델, Pandas  
- **상세 내용:**  
  - 한국어 뉴스/기사 기반 감성 레이블링  
  - 모델별 추론 속도·정확도 비교  
  - 결과를 경량화된 피클/CSV로 저장해 실시간 봇에서 활용 예정  

---

## 3. AWS 클라우드 자동매매 이전 (AI Auto-Trader on AWS)

- **설명:** Oracle Cloud VPS에서 돌아가던 자동매매 시스템을 AWS 환경으로 옮기면서  
  운영 안정성과 백업, 모니터링 구조를 동시에 개선하는 프로젝트입니다.  
- **역할:** 아키텍처 설계, 서비스 매핑(EC2, S3, DynamoDB, EventBridge 등), 모니터링 구조 설계  
- **기술 스택:** AWS EC2, S3, DynamoDB, EventBridge, CloudWatch, IAM  
- **상세 내용:**  
  - EC2에서 자동매매 봇 실행  
  - S3에 백업, DynamoDB에 거래 로그 저장  
  - EventBridge로 스케줄 관리, 장애 발생 시 SNS+CloudWatch로 알림 예정  

---

※ 각 프로젝트의 상세 코드는 정리 중이며, 정리되는 대로  
GitHub 저장소 링크를 이 페이지에 순차적으로 추가할 예정입니다.
