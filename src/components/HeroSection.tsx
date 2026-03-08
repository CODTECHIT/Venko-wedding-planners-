import { LazyMotion, domAnimation, m } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const PHONE = "7382525028";
const WA_LINK = `https://wa.me/91${PHONE}?text=Hi%20Venko%20Wedding%20Planners%2C%20I%20am%20interested%20in%20your%20services.`;

const HeroSection = () => (
  <LazyMotion features={domAnimation}>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury wedding venue"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-24 sm:py-32">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <div className="h-px w-16 sm:w-24 bg-gradient-gold mx-auto mb-4 sm:mb-6" />
            <p className="text-primary text-sm sm:text-lg tracking-[0.3em] sm:tracking-[0.4em] uppercase font-body">Premium Wedding Planning</p>
            <div className="h-px w-16 sm:w-24 bg-gradient-gold mx-auto mt-4 sm:mt-6" />
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-gradient-gold">Your Dream</span>
            <br />
            <span className="text-foreground">Wedding Awaits</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground/70 text-base sm:text-xl md:text-2xl font-body max-w-2xl mx-auto leading-relaxed px-2"
          >
            Where every detail is curated with love, elegance, and timeless beauty by <span className="text-primary font-semibold">Venko Wedding Planners</span>
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4 sm:px-0"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-gold text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase font-display font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-gold animate-glow-pulse"
            >
              Plan Your Wedding
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block border-2 border-primary text-primary px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase font-display font-semibold hover:bg-primary/10 transition-all hover:scale-105"
            >
              Our Services
            </a>
          </m.div>
        </m.div>
      </div>
    </section>
  </LazyMotion>
);

export default HeroSection;
