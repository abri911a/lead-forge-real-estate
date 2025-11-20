import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Video, User, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

interface TourBookingProps {
  propertyId: string;
  propertyTitle: string;
}

const tourBookingSchema = z.object({
  visitorName: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  visitorEmail: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  visitorPhone: z.string()
    .trim()
    .min(8, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[\d\s\+\-\(\)]+$/, { message: "Phone number can only contain numbers, spaces, +, -, (, )" }),
});

const TourBooking = ({ propertyId, propertyTitle }: TourBookingProps) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [tourType, setTourType] = useState<"in-person" | "video-chat">("in-person");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate next 7 days for quick selection
  const quickDates = Array.from({ length: 7 }, (_, i) => addDays(startOfDay(new Date()), i));

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleBookTour = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time for your tour.",
        variant: "destructive",
      });
      return;
    }

    // Validate contact information
    const validationResult = tourBookingSchema.safeParse({
      visitorName,
      visitorEmail,
      visitorPhone,
    });

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Please check your information";
      toast({
        title: "Invalid Information",
        description: errorMessage,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit through edge function with rate limiting and server-side validation
      const { data, error } = await supabase.functions.invoke(
        "submit-tour-request",
        {
          body: {
            property_id: propertyId,
            property_title: propertyTitle,
            visitor_name: visitorName,
            visitor_email: visitorEmail,
            visitor_phone: visitorPhone || null,
            tour_date: format(selectedDate, "yyyy-MM-dd"),
            tour_time: selectedTime,
            tour_type: tourType,
          },
        }
      );

      if (error) {
        if (error.message?.includes("Rate limit exceeded") || error.message?.includes("429")) {
          toast({
            title: "Too Many Requests",
            description: "You've submitted too many tour requests recently. Please try again in an hour.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Tour Request Submitted!",
        description: `Your ${tourType === "video-chat" ? "video chat" : "in-person"} tour for ${propertyTitle} on ${format(selectedDate, "PPP")} at ${selectedTime} has been requested. We'll contact you soon!`,
      });

      // Reset form
      setSelectedDate(undefined);
      setSelectedTime("");
      setVisitorName("");
      setVisitorEmail("");
      setVisitorPhone("");
      setTourType("in-person");
    } catch (error) {
      console.error("Error submitting tour request:", error);
      toast({
        title: "Error",
        description: "Failed to submit tour request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-gold/20">
      <h3 className="text-2xl font-bold mb-6 text-center">Request a Tour</h3>

      {/* Quick Date Selection */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Choose a Date</label>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {quickDates.slice(0, 3).map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => setSelectedDate(date)}
              className={cn(
                "p-4 rounded-xl border-2 transition-all text-center",
                selectedDate && format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
                  ? "border-gold bg-gold/10"
                  : "border-border hover:border-gold/50"
              )}
            >
              <div className="text-xs text-muted-foreground mb-1">
                {format(date, "EEEE")}
              </div>
              <div className="text-3xl font-bold">{format(date, "d")}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {format(date, "MMM")}
              </div>
            </button>
          ))}
        </div>

        {/* Calendar Popover */}
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < startOfDay(new Date())}
            className="rounded-md border border-border bg-background"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
              ),
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: cn(
                "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
              ),
              day_range_end: "day-range-end",
              day_selected:
                "bg-gold text-luxury-dark hover:bg-gold hover:text-luxury-dark focus:bg-gold focus:text-luxury-dark",
              day_today: "bg-accent text-accent-foreground",
              day_outside:
                "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle:
                "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
          />
        </div>
      </div>

      {/* Time Selection */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Choose a Time</label>
        <Select value={selectedTime} onValueChange={setSelectedTime}>
          <SelectTrigger className="w-full border-gold/30 focus:border-gold">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tour Type Selection */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">Tour Type</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setTourType("in-person")}
            className={cn(
              "flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all",
              tourType === "in-person"
                ? "border-gold bg-gold/10 text-gold"
                : "border-border hover:border-gold/50"
            )}
          >
            <User className="h-5 w-5" />
            <span className="font-medium">In Person</span>
          </button>
          <button
            onClick={() => setTourType("video-chat")}
            className={cn(
              "flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all",
              tourType === "video-chat"
                ? "border-gold bg-gold/10 text-gold"
                : "border-border hover:border-gold/50"
            )}
          >
            <Video className="h-5 w-5" />
            <span className="font-medium">Via Video Chat</span>
          </button>
        </div>
      </div>

      {/* Visitor Information */}
      <div className="space-y-4 mb-6">
        <h4 className="text-lg font-semibold">Your Information</h4>
        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={visitorEmail}
              onChange={(e) => setVisitorEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+968 XXXX XXXX"
              value={visitorPhone}
              onChange={(e) => setVisitorPhone(e.target.value)}
              className="mt-1"
              required
            />
          </div>
        </div>
      </div>

      {/* Book Button */}
      <Button
        onClick={handleBookTour}
        disabled={isSubmitting}
        className="w-full bg-gold text-luxury-dark hover:bg-gold-light font-semibold py-6 text-lg"
      >
        {isSubmitting ? "Submitting..." : "Request Tour"}
      </Button>
    </div>
  );
};

export default TourBooking;