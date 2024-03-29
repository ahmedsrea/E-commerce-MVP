import Container from "@/components/Container";
import DealsAndOffers from "@/components/DealsAndOffers";
import Group1 from "@/components/Group1";
import Group2 from "@/components/Group2";
import Header from "@/components/header/Header";
import Inquiry from "@/components/inquiry/Inquiry";
import Navbar from "@/components/navbar/Navbar";
import MainSection from "@/components/section-main/MainSection";

export default function Home() {
  return (
    <main className="bg-slate-100 pb-[1000px]">
      <Header />
      <Navbar />
      <Container>
        <MainSection />
        <DealsAndOffers />
        <Group1 />
        <Group2 />
        <Inquiry />
      </Container>
    </main>
  );
}
