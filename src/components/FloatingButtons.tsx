import { Phone, MessageCircle } from "lucide-react";

const PHONE = "7382525028";
const WA_LINK = `https://wa.me/91${PHONE}?text=Hi%20Venko%20Wedding%20Planners%2C%20I%20am%20interested%20in%20your%20services.`;

const FloatingButtons = () => (
  <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3">
    <a
      href={`tel:+91${PHONE}`}
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-gold shadow-gold hover:scale-110 transition-transform"
      aria-label="Call us"
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
    </a>
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform animate-glow-pulse"
      style={{ "--tw-shadow-color": "#25D366" } as React.CSSProperties}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
    </a>
  </div>
);

export default FloatingButtons;
