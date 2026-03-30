import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RIFT - Resume Intelligence Fit Tool",
  description: "이력서를 채용 공고에 맞춰 분석하고 합격률을 예측합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
