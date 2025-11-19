import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import SocialProof from "@/components/SocialProof";
import Projects from "@/components/Projects";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      
      <Header />
      <Hero />
      <SocialProof />
      <FeaturedProperties />
      <About />
      <Projects />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
