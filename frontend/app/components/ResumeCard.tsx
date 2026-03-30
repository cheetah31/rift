import { ResumeResult } from "./ResumeList";

interface Props {
  result: ResumeResult;
  onClick: () => void;
}

export default function ResumeCard({ result, onClick }: Props) {
  const scoreColor =
    result.matchScore >= 85
      ? "text-green-600"
      : result.matchScore >= 70
      ? "text-yellow-600"
      : "text-red-500";

  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl shadow hover:shadow-md transition-shadow p-5 text-left w-full group border border-gray-100 hover:border-indigo-200"
    >
      {/* Score Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
          {result.company}
        </span>
        <span className={`text-sm font-bold ${scoreColor}`}>
          합격률 {result.matchScore}%
        </span>
      </div>

      {/* Preview Image Area */}
      <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:bg-indigo-50 transition-colors">
        <span className="text-gray-400 text-xs">이력서 미리보기</span>
      </div>

      {/* Job Info */}
      <p className="font-semibold text-gray-800 text-sm mb-1">{result.jobTitle}</p>
      <p className="text-xs text-gray-400 mb-3">수정된 항목 {result.changedSections.length}개</p>

      {/* Changed Sections */}
      <div className="flex flex-wrap gap-1">
        {result.changedSections.map((section) => (
          <span
            key={section}
            className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
          >
            {section}
          </span>
        ))}
      </div>

      <p className="text-xs text-indigo-400 mt-3 group-hover:text-indigo-600 transition-colors">
        클릭하여 수정 전후 비교 보기 →
      </p>
    </button>
  );
}
