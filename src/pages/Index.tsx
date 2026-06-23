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
import SeoHead from "@/components/SeoHead";

const title = "Best Real Estate Investment in Oman (2026) | Waleed Property — ITCs, Freehold & Foreign Ownership";
const description = "Oman's top real estate investments for international buyers: ITCs in Muscat with 5-8% gross yields, freehold properties in SEZs, and luxury villas. Expert guidance on Vision 2040 and the First-Class Residency Card.";
const canonical = "https://waleedproperty.com/";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <SeoHead title={title} description={description} canonical={canonical} />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
      </Helmet>
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      
      <Header />
      <Hero />
      <SocialProof />
      <FeaturedProperties />
      <section className="bg-luxury-dark border-y border-gold/20 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          New: see our verified <a href="/oman-property-prices-2026" className="text-gold underline underline-offset-2 hover:text-gold-light font-medium">Oman property prices 2026</a> guide — area-by-area numbers, foreign-ownership rules, and realistic yields. Also: <a href="/can-foreigners-buy-property-in-oman" className="text-gold underline underline-offset-2 hover:text-gold-light font-medium">Can foreigners buy property in Oman</a>.
        </div>
      </section>
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
