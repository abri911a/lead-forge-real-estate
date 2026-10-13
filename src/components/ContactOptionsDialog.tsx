import { Phone, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactOptionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactOptionsDialog = ({ open, onOpenChange }: ContactOptionsDialogProps) => {
  const phoneNumber = "+968 79136646";
  const whatsappNumber = "96879136646"; // WhatsApp number without special characters
  const whatsappMessage = "Hi! I'm interested in learning more about your properties.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="dark sm:max-w-md bg-luxury-dark border-warmGray text-foreground">
        <DialogHeader>
          <DialogTitle className="text-foreground">Contact Us</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose your preferred way to get in touch with us
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 mt-4">
          <Button
            asChild
            className="w-full bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-ink font-semibold h-14 text-base"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOpenChange(false)}
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full border-gold bg-transparent text-gold hover:bg-gold hover:text-luxury-dark h-14 text-base"
          >
            <a href={callUrl} onClick={() => onOpenChange(false)}>
              <Phone className="mr-3 h-5 w-5" />
              Call {phoneNumber}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactOptionsDialog;
