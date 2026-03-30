"use client";

import { useEffect } from "react";
import { ResumeResult } from "./ResumeList";

interface Props {
  result: ResumeResult;
  onClose: () => void;
}

export default function ComparisonModal({ result, onClose }: Props) {
  // ESC 키로 닫기
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              {result.company} · {result.jobTitle}
            </h3>
            <p className="text-sm text-gray-400 mt-0.5">
              합격률 <span className="font-semibold text-indigo-600">{result.matchScore}%</span>
              &nbsp;· 수정 항목: {result.changedSections.join(", ")}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none transition-colors"
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        {/* Before / After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Before */}
          <div className="p-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              수정 전
            </p>
            <div className="w-full min-h-[400px] bg-red-50 border border-red-100 rounded-xl flex items-center justify-center text-gray-300 text-sm">
              이력서 원본 이미지
            </div>
          </div>

          {/* After */}
          <div className="p-6">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
              수정 후
            </p>
            <div className="w-full min-h-[400px] bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-gray-300 text-sm">
              이력서 수정본 이미지
            </div>
          </div>
        </div>

        {/* Changed Sections Detail */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <p className="text-xs font-semibold text-gray-500 mb-2">수정된 항목</p>
          <div className="flex flex-wrap gap-2">
            {result.changedSections.map((section) => (
              <span
                key={section}
                className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium"
              >
                {section}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
