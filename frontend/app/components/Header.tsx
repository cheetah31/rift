"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tight">
          RIFT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">홈</Link>
          <Link href="/analyze" className="hover:text-indigo-600 transition-colors">이력서 분석</Link>
          <Link href="/lectures" className="hover:text-indigo-600 transition-colors">강의 추천</Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-1.5 rounded-full border border-indigo-600 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition-colors"
          >
            로그인
          </button>
          <button className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">
            회원가입
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3 text-sm text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>홈</Link>
          <Link href="/analyze" onClick={() => setMenuOpen(false)}>이력서 분석</Link>
          <Link href="/lectures" onClick={() => setMenuOpen(false)}>강의 추천</Link>
          <button onClick={() => { setShowLogin(true); setMenuOpen(false); }} className="text-left text-indigo-600 font-medium">
            로그인
          </button>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6">로그인</h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="이메일"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="bg-indigo-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-indigo-700 transition-colors">
                로그인
              </button>
            </div>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 w-full text-center text-xs text-gray-400 hover:text-gray-600"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
