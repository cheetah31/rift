from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.resume import ResumeAnalysis
from app.schemas.resume import ResumeAnalysisCreate, ResumeAnalysisResponse
from typing import List

router = APIRouter()


@router.get("/", response_model=List[ResumeAnalysisResponse])
def list_resumes(db: Session = Depends(get_db)):
    return db.query(ResumeAnalysis).order_by(ResumeAnalysis.created_at.desc()).all()


@router.get("/{resume_id}", response_model=ResumeAnalysisResponse)
def get_resume(resume_id: int, db: Session = Depends(get_db)):
    resume = db.query(ResumeAnalysis).filter(ResumeAnalysis.id == resume_id).first()
    if not resume:
        raise HTTPException(status_code=404, detail="분석 결과를 찾을 수 없습니다.")
    return resume


@router.post("/", response_model=ResumeAnalysisResponse, status_code=201)
def create_resume(data: ResumeAnalysisCreate, db: Session = Depends(get_db)):
    resume = ResumeAnalysis(**data.model_dump())
    db.add(resume)
    db.commit()
    db.refresh(resume)
    return resume
