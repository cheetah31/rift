"use client";

import { useState } from "react";
import ResumeCard from "./ResumeCard";
import ComparisonModal from "./ComparisonModal";

export interface ResumeResult {
  id: number;
  jobTitle: string;
  company: string;
  matchScore: number;
  beforeImageUrl: string;
  afterImageUrl: string;
  changedSections: string[];
}

// 임시 목업 데이터
const MOCK_RESULTS: ResumeResult[] = [
  {
    id: 1,
    jobTitle: "프론트엔드 개발자",
    company: "카카오",
    matchScore: 82,
    beforeImageUrl: "/mock/resume-before-1.png",
    afterImageUrl: "/mock/resume-after-1.png",
    changedSections: ["기술 스택", "프로젝트 경험", "자기소개서"],
  },
  {
    id: 2,
    jobTitle: "백엔드 개발자",
    company: "네이버",
    matchScore: 74,
    beforeImageUrl: "/mock/resume-before-2.png",
    afterImageUrl: "/mock/resume-after-2.png",
    changedSections: ["경력 사항", "보유 기술"],
  },
  {
    id: 3,
    jobTitle: "풀스택 개발자",
    company: "토스",
    matchScore: 91,
    beforeImageUrl: "/mock/resume-before-3.png",
    afterImageUrl: "/mock/resume-after-3.png",
    changedSections: ["포트폴리오", "기술 스택"],
  },
];

export default function ResumeList() {
  const [selected, setSelected] = useState<ResumeResult | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_RESULTS.map((result) => (
          <ResumeCard key={result.id} result={result} onClick={() => setSelected(result)} />
        ))}
      </div>

      {selected && (
        <ComparisonModal result={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
