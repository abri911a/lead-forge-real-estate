import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              How I help <span className="text-gold">buyers in Oman</span>
            </h2>
            <p className="text-white/90 text-xl leading-relaxed mb-10 font-medium">
              I work with international buyers and GCC citizens who want property in Oman.
              Before you pay, we check together where you can own, what the unit really costs,
              and whether it gives you residency.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-7 w-7 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ownership and residency rules</h3>
                  <p className="text-white/80 text-base leading-relaxed">I check the law and the official sources before I advise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-7 w-7 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Personal service</h3>
                  <p className="text-white/80 text-base leading-relaxed">I start from your budget and your goal, not from a sales list</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-7 w-7 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">From booking to title deed</h3>
                  <p className="text-white/80 text-base leading-relaxed">I stay with you until the title deed is in your name</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gold text-luxury-dark hover:bg-gold-light text-base px-8 py-6 font-semibold">
                <a href="#agent-profile">About Waleed</a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-luxury-dark text-base px-8 py-6 font-semibold">
                <a
                  href={`https://wa.me/96879136646?text=${encodeURIComponent("Hi Waleed, I want to book a consultation. My budget is: ... My nationality is: ...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a consultation
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/img/waleed-headshot-800.webp"
              srcSet="/img/waleed-headshot-480.webp 480w, /img/waleed-headshot-800.webp 800w"
              sizes="(min-width: 1024px) 560px, 92vw"
              alt="Waleed Al Abri, real estate advisor in Muscat"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full max-w-md lg:max-w-lg mx-auto aspect-square object-cover rounded-lg shadow-2xl"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
