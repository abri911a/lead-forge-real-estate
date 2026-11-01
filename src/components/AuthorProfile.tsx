import { publications } from "@/data/publications";
import { Card } from "@/components/ui/card";
import waleedProfile from "@/assets/waleed-profile.webp";

interface AuthorProfileProps {
  variant?: "compact" | "full";
}

const textLink = "text-gold underline underline-offset-2 hover:text-gold-light";

const AuthorProfile = ({ variant = "compact" }: AuthorProfileProps) => {
  // Each tag opens the guide on that topic. They look like buttons, and visitors tap them
  // (Clarity, 31 Oct: 12 dead + 2 rage taps on these tags on the projects page).
  const focusAreas = [
    { label: "Foreign ownership rules", href: "/can-foreigners-buy-property-in-oman" },
    { label: "ITC freehold and usufruct", href: "/can-foreigners-buy-property-in-oman" },
    { label: "Residency through property", href: "/oman-residency-by-property" },
    { label: "Off-plan escrow", href: "/is-off-plan-property-safe-in-oman" },
  ];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
        <img 
          src={waleedProfile}
          alt="Waleed Al Abri - Real Estate Advisor"
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="w-16 h-16 rounded-full object-cover border-2 border-gold"
        />
        <div>
          <h3 className="font-semibold text-foreground">Waleed Al Abri</h3>
          <p className="text-sm text-muted-foreground">Real Estate Advisor</p>
          <p className="text-xs text-gold">Works with foreign and GCC buyers</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="p-6 bg-card border border-border">
      <div className="flex flex-col md:flex-row gap-6">
        <img 
          src={waleedProfile}
          alt="Waleed Al Abri - Real Estate Advisor in Oman"
          width={128}
          height={128}
          loading="lazy"
          decoding="async"
          className="w-32 h-32 flex-shrink-0 rounded-lg object-cover border-2 border-gold"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-2">Waleed Al Abri</h3>
          <p className="text-lg text-foreground mb-1">Real Estate Advisor</p>
          <p className="text-sm text-muted-foreground mb-4">
            Waleed Property - Founder & Principal Advisor
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Focus areas:</h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <a
                  key={area.label}
                  href={area.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-gold px-3 text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-luxury-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {area.label}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-prose space-y-3 leading-relaxed text-muted-foreground">
            {/* Topic words link to their guides: visitors tapped this paragraph (Clarity, 1 Nov). */}
            <p>
              Waleed works with{" "}
              <a href="/can-gcc-citizens-buy-property-in-oman" className={textLink}>foreign and GCC buyers</a> in
              Oman's property market. Most of the work is the part non-Omani buyers get stuck on:{" "}
              <a href="/can-foreigners-buy-property-in-oman" className={textLink}>which areas allow foreign ownership</a>,
              the difference between{" "}
              <a href="/can-foreigners-buy-property-in-oman" className={textLink}>ITC freehold and usufruct</a>,{" "}
              <a href="/oman-residency-by-property" className={textLink}>whether a property gets you residency</a>, and{" "}
              <a href="/is-off-plan-property-safe-in-oman" className={textLink}>how off-plan payments are protected</a>.
            </p>
            <p>
              <strong className="text-foreground">Covers:</strong> Al Mouj Muscat, Sultan Haitham City, 
              designated foreign-ownership areas, and residency through property.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Published in:</h4>
            <ul className="space-y-3 text-sm">
              {publications.map((pub) => (
                <li key={pub.url}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="font-serif text-base font-semibold text-foreground group-hover:text-gold">
                      {pub.outlet}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}· {pub.date}
                      {pub.note ? ` · ${pub.note}` : ""}
                    </span>
                    <span className="block text-gold underline-offset-4 group-hover:underline">
                      {pub.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AuthorProfile;
