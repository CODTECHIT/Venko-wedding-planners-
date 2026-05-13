import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { CONTACT_NUMBERS, getWhatsAppLink } from "@/lib/constants";


const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {/* Brand */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Venko" className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-primary" />
            <div>
              <span className="text-gradient-gold font-display text-xl sm:text-2xl tracking-[0.3em] font-bold">VENKO</span>
              <span className="block text-xs tracking-[0.25em] text-muted-foreground uppercase">Wedding Planners</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
            Crafting unforgettable wedding experiences with elegance, passion, and perfection.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">Founded by <span className="text-primary font-display font-semibold">Nageswar Kumar</span></p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-gradient-gold font-display text-base sm:text-lg tracking-[0.2em]">Quick Links</h3>
          <div className="space-y-1.5 sm:space-y-2">
            {["Home", "About", "Services", "Packages", "Testimonials"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-lg font-body">
                {item}
              </Link>
            ))}
            <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-lg font-body">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-gradient-gold font-display text-base sm:text-lg tracking-[0.2em]">Get in Touch</h3>
          <div className="space-y-6">
            {CONTACT_NUMBERS.map((number, index) => (
              <div key={number} className="space-y-2 group">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-semibold mb-1">Office Contact {index + 1}</p>
                <a href={`tel:+91${number}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-lg font-medium">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" /> +91 {number}
                </a>
                <a href={getWhatsAppLink(number)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-colors text-sm sm:text-lg">
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" /> WhatsApp Chat
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>


      <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center space-y-2">
        <p className="text-muted-foreground text-xs sm:text-sm tracking-wider">
          © {new Date().getFullYear()} Venko Wedding Planners. All rights reserved.
        </p>
        <p className="text-muted-foreground/60 text-[10px] sm:text-xs tracking-wider">
          Developed by{" "}
          <a href="https://www.codtechitsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors font-semibold">
            CODTECH IT Solutions
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
