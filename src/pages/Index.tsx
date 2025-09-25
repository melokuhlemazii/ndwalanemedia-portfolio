import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Gallery from "@/components/Gallery";
import CorporateSection from "@/components/CorporateSection";
import StudioSection from "@/components/StudioSection";
import WeddingSection from "@/components/WeddingSection";
import UmemuloSection from "@/components/UmemuloSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Gallery />
        <CorporateSection />
        <StudioSection />
        <WeddingSection />
        <UmemuloSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
