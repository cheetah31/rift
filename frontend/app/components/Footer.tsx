export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} RIFT. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-600 transition-colors">이용약관</a>
          <a href="#" className="hover:text-gray-600 transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-gray-600 transition-colors">문의</a>
        </div>
      </div>
    </footer>
  );
}
