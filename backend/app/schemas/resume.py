from pydantic import BaseModel, EmailStr
from datetime import datetime


class UserCreate(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    email: str
    created_at: datetime

    model_config = {"from_attributes": True}


class ResumeAnalysisCreate(BaseModel):
    job_title: str
    company: str
    match_score: float
    before_image_url: str | None = None
    after_image_url: str | None = None
    changed_sections: list[str] = []


class ResumeAnalysisResponse(BaseModel):
    id: int
    job_title: str
    company: str
    match_score: float
    before_image_url: str | None
    after_image_url: str | None
    changed_sections: list[str]
    created_at: datetime

    model_config = {"from_attributes": True}
