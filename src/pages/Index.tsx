import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import SocialProof from "@/components/SocialProof";
import Projects from "@/components/Projects";
import About from "@/components/About";
import AuthorProfile from "@/components/AuthorProfile";
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
      
      {/* Agent Profile Section */}
      <section id="agent-profile" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gold mb-8 text-center">Meet Your Real Estate Advisor</h2>
            <AuthorProfile variant="full" />
          </div>
        </div>
      </section>
      
      <Projects />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
