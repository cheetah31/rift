import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ResumeList from "@/app/components/ResumeList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">이력서 분석 결과</h2>
          <p className="text-gray-500 text-sm">채용 공고 대비 이력서 수정 전후를 비교해보세요.</p>
        </section>
        <ResumeList />
      </main>
      <Footer />
    </>
  );
}
