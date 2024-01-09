import Container from "@/components/Container";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import MainSection from "@/components/section-main/MainSection";

export default function Home() {
  return (
    <main className="bg-slate-100 h-screen">
      <Header />
      <Navbar />
      <Container>
        <MainSection />
      </Container>
    </main>
  );
}
