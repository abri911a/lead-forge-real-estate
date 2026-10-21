import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppOfferBox from "@/components/WhatsAppOfferBox";
import PublishedInStrip from "@/components/PublishedInStrip";
import SeoHead from "@/components/SeoHead";

// Arabic version of /property-for-sale-in-oman-for-foreigners (built 21 Oct 2026).
// Same 14 projects, prices, dates and source links as the English page, translated only. No new facts.
// When the English page's data changes (monthly refresh), change this file in the same commit.
// Never add Uptown Muscat / Wujha.

const title = "عقارات للبيع في عُمان للأجانب (2026): مشاريع يمكنك شراؤها مع الأسعار | Waleed Property";
const description =
  "14 مشروعاً في عُمان يمكن للأجانب شراؤها، مع السعر المعلن وتاريخه ورابط المصدر. الموج، خليج مسقط، يتي، مسقط هيلز، جبل السيفة، صلالة ومدينة السلطان هيثم.";
const canonical = "https://waleedproperty.com/ar/property-for-sale-in-oman-for-foreigners";
const englishUrl = "https://waleedproperty.com/property-for-sale-in-oman-for-foreigners";

const linkClass = "text-gold underline underline-offset-2 hover:text-gold-light";
const WA = "https://wa.me/96879136646?text=";

type Project = {
  name: string;
  by: string;
  unit: string;
  from?: boolean;
  amount: string;
  priceNote?: string;
  date: string;
  older?: boolean; // price date more than 3 months before 17 Oct 2026
  priceSource: { label: string; href: string };
  whoCanBuy: string;
  whoSource: { label: string; href: string };
  handover?: string;
};

type Area = { id: string; name: string; note: string; projects: Project[] };

const areas: Area[] = [
  {
    id: "al-mouj",
    name: "الموج مسقط",
    note: "مجمع سياحي متكامل (ITC) قرب مطار مسقط. مبني ومسكون، وفيه مارينا وملعب غولف.",
    projects: [
      {
        name: "Azura Beach Residences III & IV",
        by: "الموج مسقط (المطوّر)",
        unit: "شقق، نوع الوحدة غير مذكور",
        from: true,
        amount: "69,000",
        priceNote: "+ ضريبة القيمة المضافة",
        date: "على الصفحة يوم 17 أكتوبر 2026",
        priceSource: { label: "almouj.com", href: "https://www.almouj.com/en/azura-iii-iv/" },
        whoCanBuy: "تملك حر، لكل الجنسيات",
        whoSource: { label: "بيان صحفي من المطوّر (Zawya)", href: "https://www.zawya.com/en/press-release/companies-news/al-mouj-muscat-expands-its-best-selling-oceanfront-portfolio-with-final-release-of-azura-beach-residences-iii-and-iv-361251" },
      },
      {
        name: "Vistal by Victoria Swarovski",
        by: "LEO Developments",
        unit: "غرفة نوم واحدة، حوالي 66 م²",
        from: true,
        amount: "140,316",
        date: "على الصفحة يوم 17 أكتوبر 2026 (وسيط)",
        priceSource: { label: "Palmera", href: "https://www.palmera.realestate/oman/property/vistal-by-victoria-swarovski/" },
        whoCanBuy: "تملك حر، مع إقامة للمشتري الأجنبي",
        whoSource: { label: "Oman Observer", href: "https://www.omanobserver.om/article/1180942/business/first-victoria-swarovski-branded-residential-project-launched-at-al-mouj-muscat" },
        handover: "الربع الرابع 2029",
      },
    ],
  },
  {
    id: "muscat-bay",
    name: "خليج مسقط",
    note: "مجمع سياحي متكامل على الساحل جنوب شرق مسقط، بين الجبال والبحر.",
    projects: [
      {
        name: "Luma Residences",
        by: "Muscat Bay",
        unit: "غرفة نوم واحدة، 105 م² قابلة للبيع",
        amount: "78,555",
        date: "14 مارس 2026 (وسيط)",
        older: true,
        priceSource: { label: "VP Realty", href: "https://thevprealty.com/property/luma-residences-muscat-bay/" },
        whoCanBuy: "وحدات تملك حر، والتمويل متاح لكل الجنسيات",
        whoSource: { label: "Muscat Daily", href: "https://www.muscatdaily.com/2026/01/13/muscat-bay-launches-luma-residences-with-r020mn-investment/" },
        handover: "حوالي 2029",
      },
      {
        name: "Zen Residences",
        by: "Muscat Bay",
        unit: "غرفتا نوم، 133 م² (الاستوديو وغرفة النوم الواحدة نفدت)",
        from: true,
        amount: "138,000",
        priceNote: "قبل الضريبة",
        date: "على الصفحة يوم 17 أكتوبر 2026 (وسيط)",
        priceSource: { label: "Irfan", href: "https://www.irfaninvest.com/buy/zen-residences" },
        whoCanBuy: "تملك حر، أي جنسية (حسب الوسيط)",
        whoSource: { label: "Irfan", href: "https://www.irfaninvest.com/buy/zen-residences" },
        handover: "بدأ التسليم في 2026",
      },
    ],
  },
  {
    id: "yiti-aida",
    name: "يتي وعايدة",
    note: "مجمعات سياحية متكاملة على الساحل بعد خليج مسقط. أغلبها على الخارطة، والتسليم من 2027 إلى 2029.",
    projects: [
      {
        name: "The Plaza, Sustainable City Yiti",
        by: "The Sustainable City Yiti",
        unit: "غرفة نوم واحدة، حوالي 78–83 م²",
        amount: "85,971",
        date: "قائمة المطوّر أبريل 2026، عن طريق وسيط",
        older: true,
        priceSource: { label: "muscat.properties", href: "https://muscat.properties/projects/tsc-yiti-the-plaza" },
        whoCanBuy: "تملك حر، أي جنسية (حسب الوسيط)",
        whoSource: { label: "muscat.properties", href: "https://muscat.properties/projects/tsc-yiti-the-plaza" },
        handover: "ديسمبر 2027",
      },
      {
        name: "The Great Escape 2",
        by: "Dar Global",
        unit: "غرفة نوم واحدة، 59.6 م²، بدون أثاث",
        amount: "125,605",
        date: "18 فبراير 2026 (وسيط)",
        older: true,
        priceSource: { label: "Tropical Riviera", href: "https://tropicalriviera.com/the-great-escape-2-signature-residences-aida-oman/" },
        whoCanBuy: "كل الجنسيات (حسب الوسيط)",
        whoSource: { label: "Tropical Riviera", href: "https://tropicalriviera.com/the-great-escape-2-signature-residences-aida-oman/" },
        handover: "يونيو 2029",
      },
      {
        name: "Marriott Residences AIDA",
        by: "Dar Global",
        unit: "غرفة نوم واحدة، حوالي 60 م²، مفروشة",
        amount: "139,200",
        date: "18 يوليو 2026 (دليل وسيط)",
        older: true,
        priceSource: { label: "Palmera", href: "https://www.palmera.realestate/oman/guides/aida-yiti/" },
        whoCanBuy: "تملك حر، لكل الجنسيات",
        whoSource: { label: "Dar Global", href: "https://darglobal.co.uk/marriott-residences-aida-oman" },
        handover: "سبتمبر 2029",
      },
    ],
  },
  {
    id: "muscat-hills",
    name: "مسقط هيلز",
    note: "مجمع سياحي متكامل قرب المطار، حول ملعب غولف.",
    projects: [
      {
        name: "Opal Residence",
        by: "Al Nama",
        unit: "سعر البداية من صفحة المطوّر (استوديو، قبل الضريبة، حسب وسيط)",
        from: true,
        amount: "44,645",
        date: "على الصفحة يوم 17 أكتوبر 2026 (المطوّر)",
        priceSource: { label: "opalresidence.com", href: "https://opalresidence.com/" },
        whoCanBuy: "تملك حر لكل الجنسيات",
        whoSource: { label: "المطوّر", href: "https://opalresidence.com/" },
        handover: "الربع الرابع 2028",
      },
    ],
  },
  {
    id: "jebel-sifah",
    name: "جبل السيفة",
    note: "مجمع سياحي متكامل على الساحل، حوالي ساعة من مسقط. سوق عطلات وبيت ثانٍ.",
    projects: [
      {
        name: "Solaris",
        by: "Muriya",
        unit: "من استوديو إلى غرفتي نوم",
        from: true,
        amount: "50,000",
        date: "على الصفحة يوم 17 أكتوبر 2026 (المطوّر)",
        priceSource: { label: "jebelsifah.com", href: "https://jebelsifah.com/real-estate/solaris/" },
        whoCanBuy: "تملك حر وإقامة لكل الجنسيات",
        whoSource: { label: "المطوّر", href: "https://jebelsifah.com/real-estate/solaris/" },
      },
      {
        name: "Olive Farms Phase 2",
        by: "Muriya",
        unit: "بيت مزرعة بغرفة نوم واحدة (بيت وليس شقة)",
        from: true,
        amount: "75,000",
        date: "على الصفحة يوم 17 أكتوبر 2026 (المطوّر)",
        priceSource: { label: "jebelsifah.com", href: "https://jebelsifah.com/real-estate/olive-farms/" },
        whoCanBuy: "تملك حر (المطوّر)؛ كل الجنسيات (وسيط)",
        whoSource: { label: "المطوّر", href: "https://jebelsifah.com/real-estate/olive-farms/" },
      },
    ],
  },
  {
    id: "salalah",
    name: "هوانا صلالة",
    note: "مجمع سياحي متكامل في صلالة بالجنوب. سوق منتجعات وتأجير عطلات.",
    projects: [
      {
        name: "Riviera Residences",
        by: "Muriya",
        unit: "غرفة نوم واحدة بإطلالة بحرية، حوالي 50–54 م²",
        amount: "65,500",
        priceNote: "الضريبة غالباً غير شاملة",
        date: "18 يوليو 2026 (دليل وسيط)",
        older: true,
        priceSource: { label: "Palmera", href: "https://www.palmera.realestate/oman/guides/hawana-salalah/" },
        whoCanBuy: "مفتوح للمشترين من خارج عُمان، وإقامة لكل الجنسيات",
        whoSource: { label: "المطوّر", href: "https://hawanasalalah.com/real-estate/" },
      },
    ],
  },
  {
    id: "sultan-haitham-city",
    name: "مدينة السلطان هيثم",
    note: "مدينة حكومية جديدة في السيب. المرحلة الأولى: أغلبها لم يُبنَ بعد. اقرأ ملاحظة الملكية تحت قبل الحجز.",
    projects: [
      {
        name: "Wadi Zaha",
        by: "Al Ahly Sabbour",
        unit: "استوديو، 54 م²",
        amount: "54,705",
        date: "3 سبتمبر 2026 (وسيط)؛ وسطاء آخرون يعرضون سعراً أعلى",
        priceSource: { label: "Damas Global", href: "https://damas.net/oman/blog/sultan-haitham-city-shc" },
        whoCanBuy: "يُباع للمشترين الأجانب (موقع المبيعات). الملكية: انظر الملاحظة",
        whoSource: { label: "موقع المبيعات", href: "https://www.investinoman.co/en_GB" },
        handover: "2028 (حسب الوسطاء)",
      },
      {
        name: "Yenaier Residences",
        by: "Adanté Realty",
        unit: "استوديو، 65 م²",
        amount: "52,500",
        date: "قائمة أسعار 13 يوليو 2026 (وسيط)",
        older: true,
        priceSource: { label: "Damas Global", href: "https://damas.net/en/oman/muscat/sultan-haitham-city/yenaier" },
        whoCanBuy: "موصوف بأنه مفتوح لكل الجنسيات (الصحافة). الملكية: انظر الملاحظة",
        whoSource: { label: "Gulf News", href: "https://gulfnews.com/world/gulf/adante-realty-launches-yenaier-residences-in-oman-1.500017306" },
        handover: "النصف الثاني من 2027 (وسيط)",
      },
      {
        name: "Sarooj Oasis – Azha",
        by: "Sarooj",
        unit: "غرفة نوم واحدة، 70.1 م²",
        amount: "60,765",
        date: "9 يونيو 2026 (وسيط)",
        older: true,
        priceSource: { label: "Wave Homes", href: "https://www.wavehomes.net/property-search~action=detail,pid=3202" },
        whoCanBuy: "يحق للعُمانيين والوافدين الشراء (الصحافة). الملكية: انظر الملاحظة",
        whoSource: { label: "Oman Observer", href: "https://www.omanobserver.om/article/1164471/business/economy/sarooj-oasis-launched-at-sultan-haitham-city" },
        handover: "الربع الرابع 2028 (وسيط)",
      },
    ],
  },
];

const count = areas.reduce((n, a) => n + a.projects.length, 0);

const sources = [
  { label: "المرسوم السلطاني 12/2006، التملك في المجمعات السياحية المتكاملة (وزارة الإسكان)", href: "https://www.housing.gov.om/cmsapi/files/content/Royal%20Decree%20-%20Real%20Estate%20Ownership%20Act%20for%20the%20Integrated%20Tourism%20Complexes.pdf" },
  { label: "Gulf News: تملك الأجانب يبقى في المناطق المحددة (28 يونيو 2026)", href: "https://gulfnews.com/world/gulf/oman/oman-clarifies-foreign-property-ownership-remains-restricted-to-designated-areas-1.500589740" },
  { label: "Muscat Daily: حق 99 سنة للأجانب في المدن المستقبلية (24 يونيو 2023)", href: "https://www.muscatdaily.com/2023/06/24/foreigners-entitled-to-property-for-99-years-in-future-cities/" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "عقارات في عُمان يمكن للأجنبي شراؤها: المشاريع والأسعار",
  author: { "@type": "Person", name: "Waleed Al Abri", jobTitle: "Real Estate Advisor" },
  datePublished: "2026-10-21",
  dateModified: "2026-10-21",
  inLanguage: "ar",
  publisher: { "@type": "Organization", name: "Waleed Property" },
};

const askLink = (project: string) =>
  WA + encodeURIComponent(`مرحبا وليد، حاب أعرف عن ${project}. ميزانيتي: ... جنسيتي: ...`);

const PropertyForForeignersAr = () => (
  <div className="dark min-h-screen bg-luxury-dark text-foreground">
    <SeoHead title={title} description={description} canonical={canonical} type="article" />
    <Helmet>
      <html lang="ar" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="ar" href={canonical} />
      <link rel="alternate" hrefLang="en" href={englishUrl} />
      <link rel="alternate" hrefLang="x-default" href={englishUrl} />
      <meta property="og:locale" content="ar_OM" />
      <meta property="og:title" content="عقارات في عُمان يمكن للأجنبي شراؤها: المشاريع والأسعار" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="عقارات في عُمان يمكن للأجنبي شراؤها: المشاريع والأسعار" />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
    </Helmet>

    <Header />

    <main dir="rtl" lang="ar" className="pt-8 pb-16 md:py-20 bg-luxury-dark">
      <div className="container mx-auto px-4 max-w-4xl [&_p]:max-w-[65ch]">
        <div className="mb-8">
          <p className="mb-4 text-sm" dir="ltr" lang="en">
            <a href="/property-for-sale-in-oman-for-foreigners" className={linkClass}>
              Read in English
            </a>
          </p>
          <span className="text-gold text-sm font-semibold">مشاريع للمشترين الأجانب · أكتوبر 2026</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gold mt-2 mb-6 leading-tight">
            عقارات في عُمان يمكن للأجنبي شراؤها: المشاريع والأسعار
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            الأسعار من صفحات تم التحقق منها في 17 أكتوبر 2026 · وليد العبري، مستشار عقاري
          </p>
          <PublishedInStrip className="mt-2" />
        </div>

        {/* Short answer */}
        <div className="bg-card border border-gold/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">الجواب المختصر</h2>
          <div className="space-y-3 text-foreground leading-relaxed">
            <p>
              إذا كنت أجنبياً، يمكنك الشراء في مناطق محددة فقط. أغلبها مجمعات سياحية متكاملة (ITC).
              وبعض المشاريع في مدينة السلطان هيثم تُباع أيضاً للأجانب.
            </p>
            <p>
              تحت ستجد {count} مشروعاً في هذه المناطق بسعر معلن. لكل سعر تاريخ ورابط للصفحة التي
              وجدته فيها.
            </p>
            <p>
              الأرخص يبدأ من حوالي 44,000 إلى 55,000 ريال عُماني. أغلب الشقق بغرفة نوم واحدة بين
              60,000 و140,000 ريال.
            </p>
            <p>الأسعار تتغير مع بيع الوحدات. اسألني عن سعر اليوم قبل أن تقرر.</p>
          </div>
        </div>

        <WhatsAppOfferBox
          heading="لست متأكداً أي مشروع يناسبك؟"
          body="أرسل لي ميزانيتك وجنسيتك على واتساب. أرد عليك بـ3 مشاريع يحق لك شراؤها، مع سعر اليوم."
          message="مرحبا وليد، حاب أشتري عقار في عُمان. ميزانيتي: ... جنسيتي: ..."
          buttonLabel="أرسل على واتساب"
          showPublications
        />

        {/* How to read */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">كيف تقرأ هذه القائمة</h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pr-6">
            <li>
              الأسعار بالريال العُماني. هي أسعار معروضة في التاريخ المذكور، وليست عروضاً. "يبدأ من"
              يعني أرخص وحدة في تلك الصفحة.
            </li>
            <li>
              أغلب الوحدات الجديدة من المطوّر عليها ضريبة قيمة مضافة 5%. بعض الصفحات تشملها وبعضها
              لا. أذكر ذلك إذا ذكرته الصفحة.
            </li>
            <li>
              كثير من الأسعار من وسطاء، وليست من المطوّر. أذكر المصدر. الأسعار التي مضى عليها أكثر من
              3 أشهر عليها علامة.
            </li>
            <li>لا أذكر عائد الإيجار هنا. يعتمد على الوحدة نفسها والسعر الذي تدفعه.</li>
            <li>
              إذا كنت مواطناً خليجياً، القواعد مختلفة:{" "}
              <a href="/can-gcc-citizens-buy-property-in-oman" className={linkClass}>
                دليل الخليجيين (بالإنجليزية)
              </a>
            </li>
          </ul>
        </div>

        {/* Area nav */}
        <nav aria-label="المناطق" className="mb-10 flex flex-wrap gap-2">
          {areas.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-full border border-gold/40 px-4 py-2 text-sm text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              {a.name}
            </a>
          ))}
        </nav>

        {areas.map((area) => (
          <section key={area.id} id={area.id} className="mb-14 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{area.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{area.note}</p>

            {area.id === "sultan-haitham-city" && (
              <div className="border border-gold/40 bg-gold/5 rounded-lg p-5 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">ملاحظة الملكية للأجانب</h3>
                <p className="text-muted-foreground leading-relaxed">
                  البائعون يسمّون هذه المشاريع تملكاً حراً. لكن في يونيو 2023 قال وزير الإسكان إن
                  الأجنبي يحصل على حق انتفاع 99 سنة في المدن الجديدة، وليس تملكاً حراً. لم أجد
                  تحديثاً رسمياً بعد ذلك. قبل أن تدفع، خذ نوع الملكية مكتوباً من المطوّر.
                </p>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {area.projects.map((p) => (
                <article key={p.name} className="bg-card border border-border rounded-lg p-5 flex flex-col">
                  <h3 className="text-lg font-semibold text-foreground" dir="ltr" lang="en" style={{ textAlign: "right" }}>
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.by}</p>
                  <p className="text-2xl font-bold text-gold leading-tight">
                    {p.from ? "يبدأ من " : ""}
                    {p.amount} ر.ع.
                  </p>
                  {p.priceNote && <p className="text-sm text-muted-foreground">{p.priceNote}</p>}
                  <p className="text-sm text-muted-foreground mb-3">{p.unit}</p>
                  <dl className="text-sm space-y-1.5 mb-4">
                    <div>
                      <dt className="inline text-muted-foreground">تاريخ السعر: </dt>
                      <dd className="inline text-foreground">
                        {p.date} ·{" "}
                        <a href={p.priceSource.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {p.priceSource.label}
                        </a>
                        {p.older && (
                          <span className="mr-2 inline-block rounded bg-gold/15 px-2 py-0.5 text-xs text-gold">
                            مضى عليه أكثر من 3 أشهر
                          </span>
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline text-muted-foreground">من يحق له الشراء: </dt>
                      <dd className="inline text-foreground">
                        {p.whoCanBuy} ·{" "}
                        <a href={p.whoSource.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {p.whoSource.label}
                        </a>
                      </dd>
                    </div>
                    {p.handover && (
                      <div>
                        <dt className="inline text-muted-foreground">التسليم: </dt>
                        <dd className="inline text-foreground">{p.handover}</dd>
                      </div>
                    )}
                  </dl>
                  <a
                    href={askLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center min-h-[44px] rounded-md border border-[#25D366]/60 px-4 text-sm font-semibold text-foreground hover:bg-[#25D366] hover:text-[#0B141A] transition-colors"
                  >
                    اسأل عن هذا المشروع على واتساب
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Before you book */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">قبل أن تحجز أي مشروع منها</h2>
          <ol className="list-decimal pr-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>خذ نوع الملكية مكتوباً: تملك حر أو حق انتفاع، ولكم سنة.</li>
            <li>
              في مشاريع الخارطة، اسأل كيف تُحمى دفعاتك قبل التسليم.{" "}
              <a href="/is-off-plan-property-safe-in-oman" className={linkClass}>
                هل الشراء على الخارطة آمن في عُمان؟ (بالإنجليزية)
              </a>
            </li>
            <li>
              تأكد إذا كانت الوحدة تعطي إقامة، وأي نوع.{" "}
              <a href="/oman-residency-by-property" className={linkClass}>
                الإقامة عن طريق العقار (بالإنجليزية)
              </a>
            </li>
            <li>اطلب سعر اليوم وخطة الدفع. كثير من الأسعار هنا عمرها عدة أشهر.</li>
          </ol>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            كيف تحركت الأسعار من 2025 إلى 2026:{" "}
            <a href="/oman-property-prices-2026" className={linkClass}>
              متتبع أسعار مشاريع الخارطة (بالإنجليزية)
            </a>
            . القواعد بالتفصيل:{" "}
            <a href="/can-foreigners-buy-property-in-oman" className={linkClass}>
              هل يمكن للأجنبي التملك في عُمان؟ (بالإنجليزية)
            </a>
          </p>
        </div>

        {/* Sources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">مصادر القواعد</h2>
          <ol className="list-decimal pr-6 space-y-2 text-sm text-muted-foreground">
            {sources.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            مصدر السعر والملكية لكل مشروع موجود على بطاقته. تم التحقق في 17 أكتوبر 2026. إذا رأيت
            سعراً خاطئاً أو قديماً، أخبرني على واتساب وسأتحقق منه.
          </p>
        </div>
      </div>
    </main>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default PropertyForForeignersAr;
