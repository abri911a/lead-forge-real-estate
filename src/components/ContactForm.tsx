import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today for personalized assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+96871555067" className="text-muted-foreground hover:text-gold transition-colors">
                    +968 7155 5067
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@omanproperty.com" className="text-muted-foreground hover:text-gold transition-colors">
                    info@omanproperty.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                  <p className="text-muted-foreground">
                    Muscat, Oman
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-warmGray">
              <h4 className="font-semibold text-foreground mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Expert local market knowledge
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Personalized property matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  End-to-end support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Exclusive off-market listings
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-warmGray">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="+968 XXXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                  placeholder="Tell us about your property requirements..."
                />
              </div>

              <Button type="submit" className="w-full bg-gold text-luxury-dark hover:bg-gold-light">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
