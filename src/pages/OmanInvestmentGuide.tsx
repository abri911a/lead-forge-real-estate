import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import AuthorProfile from "@/components/AuthorProfile";
import BacklinkResources from "@/components/BacklinkResources";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/SeoHead";
import { MapPin, TrendingUp, Home, Shield, DollarSign, Users } from "lucide-react";

const title = "Oman Property Investment Guide (2026) | Waleed Property";
const description = "Step-by-step guide for foreign investors buying property in Oman: ITCs, freehold zones, Golden Residency, financing, fees, and yields in Muscat, Duqm, and Salalah.";
const canonical = "https://waleedproperty.com/oman-investment-guide";

const OmanInvestmentGuide = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <SeoHead title={title} description={description} canonical={canonical} type="article" />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
      </Helmet>
      <StructuredData 
        type="article" 
        data={{
          title: "Best Real Estate Investment Options in Oman (2026)",
          description: "Comprehensive guide to Oman real estate investment for international buyers",
          datePublished: "2025-01-19",
          dateModified: "2026-06-10"
        }}
      />

      
      <Header />
      
      {/* Hero Section - Answer First (RAG-Optimized) */}
      <section className="py-20 bg-gradient-to-br from-luxury-dark via-luxury-dark to-warmGray/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <span className="text-gold text-sm font-semibold uppercase tracking-wide">Investment Guide 2025</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6">
              Best Real Estate Investment Options in Oman
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: January 19, 2025 | By Waleed Al Abri - Licensed Real Estate Advisor
            </p>
          </div>

          {/* Answer-First Section (RAG Priority) */}
          <div className="bg-warmGray/10 border border-gold/20 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gold mb-4">Quick Answer</h2>
            <p className="text-foreground text-lg leading-relaxed mb-4">
              <strong>Oman's top real estate investments for international buyers in 2025 include:</strong> Integrated Tourism Complexes (ITCs) in Muscat offering 5-8% gross yields, freehold properties in Special Economic Zones like Duqm SEZAD, and emerging smart city developments in Sultan Haitham City. Foreign investment grew 19.4% year-over-year in 2024, supported by Oman's Golden Residency programme, which requires from OMR 200,000 in qualifying property investment for a 10-year renewable visa.
            </p>
            <p className="text-muted-foreground">
              Oman Vision 2040 has streamlined foreign ownership regulations, making it one of the most investor-friendly GCC markets. Properties in Al Mouj Muscat start from OMR 80,000 for apartments to OMR 1,500,000+ for luxury villas. For verified, area-by-area numbers see our <a href="/oman-property-prices-2026" className="text-gold underline underline-offset-2 hover:text-gold-light">Oman property prices 2026</a> guide.
            </p>
          </div>

          {/* Author Profile */}
          <div className="mb-12">
            <AuthorProfile variant="full" />
          </div>

          {/* Key Investment Locations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8" />
              Top Investment Locations in Oman
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">1. Al Mouj Muscat - Luxury Waterfront ITC</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Investment Range:</strong> OMR 80,000 - OMR 1,500,000+</li>
                  <li>• <strong>Rental Yield:</strong> 6-7% annually</li>
                  <li>• <strong>Property Types:</strong> Waterfront apartments, luxury villas, townhouses</li>
                  <li>• <strong>Key Features:</strong> 18-hole championship golf course, private marina, 24/7 security</li>
                  <li>• <strong>Ownership:</strong> 100% freehold for foreigners</li>
                </ul>
                <p className="text-foreground">
                  Al Mouj is Oman's premier ITC with established infrastructure and strong expat community. Properties include lakeside villas with 907+ sqm BUA and apartments with marina views. Expected handover: Existing + new phases through 2026.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">2. Sultan Haitham City - Oman's Flagship Smart City</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Investment Range:</strong> OMR 33,250 (studios) - OMR 234,650 (villas)</li>
                  <li>• <strong>Rental Yield:</strong> 7-9% potential (emerging market)</li>
                  <li>• <strong>Property Types:</strong> Studios, 1-4 bedroom apartments, townhouses, standalone villas</li>
                  <li>• <strong>Developer:</strong> Al Ahly Sabbour (Egypt's leading developer)</li>
                  <li>• <strong>Payment Plan:</strong> 20% down, 5-year installments, 2-year post-handover grace</li>
                </ul>
                <p className="text-foreground">
                  Wadi Zaha neighborhood offers Central Park-facing zones, walkable green masterplan, and smart infrastructure. Freehold ownership open to all nationalities. Projected completion: 2026-2027.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">3. Duqm Special Economic Zone (SEZAD)</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Focus:</strong> Industrial, logistics, and commercial properties</li>
                  <li>• <strong>Investment Type:</strong> Land plots, warehouses, mixed-use developments</li>
                  <li>• <strong>Incentives:</strong> Tax exemptions, 100% foreign ownership, duty-free import/export</li>
                  <li>• <strong>Target Investors:</strong> Industrial corporations, logistics companies, GCC businesses</li>
                </ul>
                <p className="text-foreground">
                  Duqm SEZ is strategically positioned for Indian Ocean trade routes. Government infrastructure investment exceeds OMR 15 billion. Ideal for commercial real estate investors seeking long-term industrial leases.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gold mb-3">4. Salalah - Tourism-Driven Market</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• <strong>Market Driver:</strong> Khareef monsoon season tourism (June-September)</li>
                  <li>• <strong>Property Types:</strong> Resort apartments, vacation villas</li>
                  <li>• <strong>Rental Strategy:</strong> Seasonal short-term rentals + long-term leases</li>
                  <li>• <strong>Growth Factor:</strong> Oman Vision 2040 tourism expansion targets</li>
                </ul>
                <p className="text-foreground">
                  Salalah offers seasonal rental opportunities with premium rates during Khareef. Mix of tourist rentals and permanent residential market. Foreign ownership available in designated ITC zones.
                </p>
              </div>
            </div>
          </div>

          {/* Foreign Ownership Regulations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Foreign Ownership Regulations in Oman
            </h2>
            
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Integrated Tourism Complexes (ITCs)</h3>
              <p className="text-foreground mb-4">
                ITCs allow <strong>100% freehold ownership</strong> for foreign nationals with no restrictions. Property can be inherited, sold, or rented without government approval. Major ITCs include:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Al Mouj Muscat (established, premium pricing)</li>
                <li>• The Wave Muscat (luxury beachfront)</li>
                <li>• Jebel Sifah (coastal resort ITC)</li>
                <li>• Yiti (emerging waterfront development)</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Special Economic Zones</h3>
              <p className="text-foreground mb-4">
                Special Economic Zones (SEZs) like Duqm SEZAD and Sohar offer freehold commercial and industrial property ownership. Residential property ownership follows standard ITC regulations within SEZ boundaries.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Oman Golden Residency (from OMR 200,000)</h3>
              <p className="text-foreground mb-4">
                <strong>Eligibility Requirements:</strong>
              </p>
              <ul className="text-muted-foreground space-y-2 mb-4">
                <li>• Minimum property investment: OMR 500,000 (~USD 1.3 million)</li>
                <li>• Property must be in approved freehold areas (ITCs, designated zones)</li>
                <li>• Investment must be maintained for residency duration</li>
                <li>• 10-year renewable residency visa</li>
              </ul>
              <p className="text-foreground">
                <strong>Benefits:</strong> Family residency sponsorship, no Omani sponsor required, business ownership rights, multiple-entry privileges.
              </p>
            </div>
          </div>

          {/* Investment Returns & Market Data */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8" />
              Investment Returns & Market Analysis
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card border border-gold/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Rental Yields</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Al Mouj ITC:</strong> 6-7% gross annually</li>
                  <li>• <strong>Sultan Haitham City:</strong> 7-9% potential</li>
                  <li>• <strong>Duqm SEZ:</strong> 8-10% (commercial leases)</li>
                  <li>• <strong>Salalah:</strong> 5-8% (seasonal variation)</li>
                </ul>
              </div>

              <div className="bg-card border border-gold/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-gold">Market Growth</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>2024 YoY Growth:</strong> 19.4% foreign investment</li>
                  <li>• <strong>Villa Segment:</strong> 17.6% price appreciation</li>
                  <li>• <strong>Q2 2025 Projection:</strong> 10.8% annual growth</li>
                  <li>• <strong>Occupancy Rates:</strong> 85-92% (prime locations)</li>
                </ul>
              </div>
            </div>

            <div className="bg-warmGray/10 border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Comparison: Oman vs Other GCC Markets</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-border">
                    <tr className="text-gold">
                      <th className="py-3 px-2">Market</th>
                      <th className="py-3 px-2">Avg. Yield</th>
                      <th className="py-3 px-2">Entry Price</th>
                      <th className="py-3 px-2">Foreign Ownership</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 font-semibold">Oman (Muscat)</td>
                      <td className="py-3 px-2">5-8%</td>
                      <td className="py-3 px-2">OMR 80,000+</td>
                      <td className="py-3 px-2 text-gold">Full Freehold (ITCs)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2">Dubai</td>
                      <td className="py-3 px-2">4-6%</td>
                      <td className="py-3 px-2">AED 600,000+</td>
                      <td className="py-3 px-2">Freehold (designated zones)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2">Abu Dhabi</td>
                      <td className="py-3 px-2">5-7%</td>
                      <td className="py-3 px-2">AED 800,000+</td>
                      <td className="py-3 px-2">Freehold (investment zones)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Riyadh</td>
                      <td className="py-3 px-2">4-6%</td>
                      <td className="py-3 px-2">SAR 500,000+</td>
                      <td className="py-3 px-2">Limited (GCC nationals priority)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <em>Data as of Q4 2024. Source: GCC Real Estate Market Reports, Oman National Center for Statistics and Information (NCSI)</em>
              </p>
            </div>
          </div>

          {/* Investment Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Home className="h-8 w-8" />
              Property Purchase Process for Foreign Buyers
            </h2>
            
            <div className="space-y-4">
              <div className="bg-card border-l-4 border-gold rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-luxury-dark rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Property Selection & Due Diligence</h3>
                    <p className="text-muted-foreground">
                      Identify properties in approved freehold zones. Verify developer credentials, check title deed status, review master plan approvals. Engage licensed real estate advisor (Waleed Realestate provides multilingual support).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-gold rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-luxury-dark rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Offer & Reservation</h3>
                    <p className="text-muted-foreground">
                      Submit official offer through agent. Pay reservation fee (typically 5-10% of property value). Receive Memorandum of Understanding (MOU) outlining terms, payment schedule, and handover date.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-gold rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-luxury-dark rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Legal Review & Contract</h3>
                    <p className="text-muted-foreground">
                      Hire Omani lawyer for contract review. Verify freehold status, check for encumbrances, confirm payment terms. Legal fees: 0.5-1% of property value. Duration: 5-10 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-gold rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-luxury-dark rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Payment & Registration</h3>
                    <p className="text-muted-foreground">
                      Execute payment per agreed schedule. Register property with Oman Municipality (3% registration fee). Obtain title deed in your name. Total closing costs: 4-5% of purchase price (registration, legal, agent fees).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-l-4 border-gold rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-luxury-dark rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-2">Post-Purchase: Residency Application</h3>
                    <p className="text-muted-foreground">
                      If qualifying for the Oman Golden Residency (from OMR 200,000 in qualifying property): Submit application through Royal Oman Police. Required documents: passport copies, property title deed, proof of investment, bank statements. Processing time: 30-60 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-warmGray/10 border border-border rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gold mb-3">Timeline Summary</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>Property search & selection:</strong> 1-4 weeks</li>
                <li>• <strong>Offer to contract:</strong> 1-2 weeks</li>
                <li>• <strong>Legal review:</strong> 5-10 days</li>
                <li>• <strong>Registration:</strong> 7-14 days</li>
                <li>• <strong>Total purchase timeline:</strong> 6-10 weeks (ready properties)</li>
                <li>• <strong>Off-plan properties:</strong> 18-36 months to handover</li>
              </ul>
            </div>
          </div>

          {/* Financing Options */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6">Financing Options for International Buyers</h2>
            
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Mortgage Financing</h3>
              <p className="text-foreground mb-4">
                Select Omani banks offer mortgage financing to foreign buyers:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-4">
                <li>• <strong>Down Payment:</strong> 20-30% minimum</li>
                <li>• <strong>Interest Rates:</strong> 4-5.5% (conventional) or Islamic financing options</li>
                <li>• <strong>Loan Term:</strong> Up to 25 years</li>
                <li>• <strong>Eligibility:</strong> Proof of income, valid residency or work visa, minimum age 21</li>
              </ul>
              <p className="text-muted-foreground">
                <em>Note: Mortgage availability varies by nationality and employment status. Consult with Omani banks directly for pre-approval.</em>
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gold mb-4">Developer Payment Plans</h3>
              <p className="text-foreground mb-4">
                Many developers offer installment plans for off-plan properties:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>Typical Structure:</strong> 20% down payment, installments during construction, balance on handover</li>
                <li>• <strong>Sultan Haitham City (Wadi Zaha):</strong> 20% down, 5-year installments, 2-year post-handover grace</li>
                <li>• <strong>Al Mouj Projects:</strong> 10-15% down, 6 installments linked to construction milestones, 15% on handover</li>
                <li>• <strong>Advantage:</strong> Lower upfront capital, flexibility for investors securing financing</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Oman */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3">
              <Users className="h-8 w-8" />
              Why International Investors Choose Oman
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-3">Political & Economic Stability</h3>
                <p className="text-muted-foreground">
                  Oman maintains neutral foreign policy, strong GCC relationships, and consistent investment laws. Moody's rating: Stable outlook. Low crime rate and secure environment for expat families.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-3">Transparent Legal Framework</h3>
                <p className="text-muted-foreground">
                  Clear freehold ownership in ITCs with no hidden restrictions. Property rights protected by Omani law. Efficient title registration system through municipality offices.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-3">Competitive Pricing vs GCC</h3>
                <p className="text-muted-foreground">
                  Lower entry costs than Dubai and Abu Dhabi with comparable yields. Price per square meter in Muscat: 30-40% below Dubai equivalents. Higher yield potential in emerging markets.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-3">Oman Vision 2040 Growth</h3>
                <p className="text-muted-foreground">
                  Government infrastructure investment targeting tourism, logistics, and manufacturing. Expected GDP diversification away from oil. New Muscat International Airport opening drives tourism growth.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-3">Quality of Life</h3>
                <p className="text-muted-foreground">
                  Safe, family-friendly environment. International schools (British, American, IB curricula). World-class healthcare. Coastal lifestyle with year-round sunshine. Cultural authenticity combined with modern amenities.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gold mb-3">Tax-Free Environment</h3>
                <p className="text-muted-foreground">
                  No personal income tax, no capital gains tax on property sales, no inheritance tax. Minimal annual property fees. Rental income not subject to personal income taxation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gold/10 to-warmGray/10 border border-gold/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gold mb-4">Ready to Invest in Oman Real Estate?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert advisors provide personalized consultations, ROI analysis, legal guidance, and end-to-end support for international buyers. Schedule a private viewing or request detailed property portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-luxury-dark hover:bg-gold-light">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-dark">
                Download Investment Guide (PDF)
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Contact: +968 79136646 | WhatsApp Available 24/7
            </p>
          </div>

          {/* Author Bio (E-E-A-T Signal) */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">About Waleed Realestate Team</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Waleed Realestate is a licensed real estate advisory firm specializing in GCC property markets with focus on Oman investment opportunities. Our team of certified advisors has facilitated over OMR 50 million in transactions for international clients across Muscat ITCs, Special Economic Zones, and emerging smart city developments. We provide comprehensive services including property selection, legal coordination, financing assistance, and residency visa guidance.
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  <strong>Credentials:</strong> Licensed by Oman Ministry of Housing and Urban Planning | Member of GCC Real Estate Association | 15+ years combined experience in Gulf property markets
                </p>
              </div>
            </div>
          </div>

          {/* Data Sources */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-gold mb-3">Sources & References</h3>
            <ol className="text-xs text-muted-foreground space-y-1">
              <li>[1] National Center for Statistics and Information (NCSI) - Oman Real Estate Market Reports Q2-Q4 2024</li>
              <li>[2] Royal Oman Police - Property Owner Residency Guidelines (ROP Decision 87/2026) Royal Oman Police - First-Class Residency Card Guidelines 2025 Golden Residency Programme</li>
              <li>[3] Oman Ministry of Housing and Urban Planning - Foreign Ownership Regulations (Updated April 2025)</li>
              <li>[4] GCC Real Estate Market Analysis - Knight Frank Middle East Q4 2024</li>
              <li>[5] Al Ahly Sabbour - Wadi Zaha Development Master Plan 2025</li>
              <li>[6] Special Economic Zone Authority at Duqm (SEZAD) - Investment Incentives Documentation</li>
              <li>[7] Oman Vision 2040 - Economic Diversification Strategy</li>
            </ol>
          </div>
        </div>
      </section>

      <BacklinkResources />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OmanInvestmentGuide;
