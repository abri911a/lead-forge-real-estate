import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import waleedProfile from "@/assets/waleed-profile.jpg";

interface AuthorProfileProps {
  variant?: "compact" | "full";
}

const AuthorProfile = ({ variant = "compact" }: AuthorProfileProps) => {
  const credentials = [
    "Licensed Real Estate Advisor - Oman",
    "ITC Investment Specialist",
    "10+ Years GCC Property Markets",
    "First-Class Residency Expert"
  ];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
        <img 
          src={waleedProfile}
          alt="Waleed Al Abri - Licensed Real Estate Advisor"
          className="w-16 h-16 rounded-full object-cover border-2 border-gold"
        />
        <div>
          <h3 className="font-semibold text-foreground">Waleed Al Abri</h3>
          <p className="text-sm text-muted-foreground">Licensed Real Estate Advisor</p>
          <p className="text-xs text-gold">10+ Years Experience in Oman Property Markets</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="p-6 bg-card border border-border">
      <div className="flex flex-col md:flex-row gap-6">
        <img 
          src={waleedProfile}
          alt="Waleed Al Abri - Licensed Real Estate Advisor in Oman"
          className="w-32 h-32 rounded-lg object-cover border-2 border-gold"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gold mb-2">Waleed Al Abri</h3>
          <p className="text-lg text-foreground mb-1">Licensed Real Estate Advisor</p>
          <p className="text-sm text-muted-foreground mb-4">
            Waleed Realestate Oman - Founder & Principal Advisor
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Professional Credentials:</h4>
            <div className="flex flex-wrap gap-2">
              {credentials.map((credential, index) => (
                <Badge key={index} variant="outline" className="border-gold text-gold">
                  {credential}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-sm text-muted-foreground">
            <p className="mb-3">
              Waleed specializes in guiding international investors and GCC nationals through Oman's 
              real estate market. With over a decade of experience in Integrated Tourism Complexes (ITCs), 
              foreign ownership regulations, and the First-Class Residency Card program, he has helped 
              hundreds of clients successfully invest in Oman property.
            </p>
            <p>
              <strong className="text-foreground">Areas of Expertise:</strong> Al Mouj Muscat luxury properties, 
              Sultan Haitham City investments, SEZAD commercial real estate, Oman Vision 2040 opportunities, 
              foreign investment compliance, and residency visa acquisition.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AuthorProfile;
