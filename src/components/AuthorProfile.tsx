import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import waleedProfile from "@/assets/waleed-profile.webp";

interface AuthorProfileProps {
  variant?: "compact" | "full";
}

const AuthorProfile = ({ variant = "compact" }: AuthorProfileProps) => {
  const focusAreas = [
    "Foreign ownership rules",
    "ITC freehold and usufruct",
    "Residency through property",
    "Off-plan escrow"
  ];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
        <img 
          src={waleedProfile}
          alt="Waleed Al Abri - Real Estate Advisor"
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
          className="w-32 h-32 rounded-lg object-cover border-2 border-gold"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gold mb-2">Waleed Al Abri</h3>
          <p className="text-lg text-foreground mb-1">Real Estate Advisor</p>
          <p className="text-sm text-muted-foreground mb-4">
            Waleed Property - Founder & Principal Advisor
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Focus areas:</h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="border-gold text-gold">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-sm text-muted-foreground">
            <p className="mb-3">
              Waleed works with foreign and GCC buyers in Oman's property market. Most of the work is the 
              part non-Omani buyers get stuck on: which areas allow foreign ownership, the difference between 
              ITC freehold and usufruct, whether a property gets you residency, and how off-plan payments are 
              protected.
            </p>
            <p>
              <strong className="text-foreground">Covers:</strong> Al Mouj Muscat, Sultan Haitham City, 
              designated foreign-ownership areas, and residency through property.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AuthorProfile;
