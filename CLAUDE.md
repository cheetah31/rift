# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

개발자 이력서를 채용 공고에 맞춰 분석하는 서비스. 요구사항 만족 여부 체크, 서류 합격률 예측, 부족한 역량 보완을 위한 강의 추천 기능을 제공한다.

## Tech Stack

| Layer | Stack |
|---|---|
| Frontend | Next.js 14 (App Router), React 18, TailwindCSS |
| Backend | FastAPI, SQLAlchemy, Alembic |
| DB | PostgreSQL 16 |
| Infra | Docker Compose |

## Project Structure

```
RIFT/
├── frontend/          # Next.js App Router
│   └── app/
│       ├── components/   # Header, Footer, ResumeCard, ComparisonModal, ResumeList
│       ├── layout.tsx
│       └── page.tsx
├── backend/           # FastAPI
│   ├── main.py           # App entry, CORS, router registration
│   └── app/
│       ├── database.py   # SQLAlchemy engine & get_db dependency
│       ├── models/       # ORM models (User, ResumeAnalysis)
│       ├── schemas/      # Pydantic schemas
│       └── routers/      # auth, resume endpoints
├── db/
│   └── init.sql          # DDL (users, resume_analyses tables)
└── docker-compose.yml
```

## Development Commands

### Frontend
```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

### Backend
```bash
cd backend
python -m venv venv && source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env   # DB URL 등 환경변수 설정
uvicorn main:app --reload  # http://localhost:8000
```

### DB (Docker)
```bash
docker compose up db        # PostgreSQL만 실행
psql -U postgres -d rift -f db/init.sql   # 스키마 초기화
```

### 전체 실행
```bash
docker compose up --build
```

## Architecture Notes

- **페이지 구성**: Header(메뉴+로그인 모달) / 본문(이력서 분석 결과 카드 그리드) / Footer(저작권)
- **이력서 비교 팝업**: `ComparisonModal` — 카드 클릭 시 수정 전(좌)/후(우) 이미지 나란히 표시, ESC로 닫기
- **반응형**: TailwindCSS 브레이크포인트(`sm`, `md`, `lg`) 기준, 모바일 햄버거 메뉴 포함
- **API Base**: 프론트엔드에서 `NEXT_PUBLIC_API_URL` 환경변수로 백엔드 URL 지정 (기본 `http://localhost:8000`)
- **DB 연결**: 백엔드 `.env`의 `DATABASE_URL`로 PostgreSQL 연결
