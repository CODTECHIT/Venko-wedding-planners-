import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { BookingModal } from "./BookingModal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Venko Wedding Planners" className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-primary" />
            <div>
              <span className="text-gradient-gold font-display text-base sm:text-xl tracking-[0.2em] sm:tracking-[0.3em] font-bold">VENKO</span>
              <span className="block text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground uppercase">Wedding Planners</span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-xs xl:text-sm tracking-[0.12em] xl:tracking-[0.15em] uppercase font-body font-medium transition-colors ${location.pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-gradient-gold text-primary-foreground px-4 xl:px-6 py-2 xl:py-2.5 text-xs xl:text-sm tracking-[0.12em] xl:tracking-[0.15em] uppercase font-display font-semibold hover:opacity-90 transition-opacity"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden glass-dark border-t border-border py-4 sm:py-6 px-4 sm:px-6 space-y-2 sm:space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`block text-sm tracking-[0.12em] sm:tracking-[0.15em] uppercase font-body py-2 transition-colors ${location.pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full text-center bg-gradient-gold text-primary-foreground px-6 py-3 text-sm tracking-[0.12em] sm:tracking-[0.15em] uppercase font-display font-semibold hover:opacity-90 transition-opacity"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navbar;

