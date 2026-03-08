import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";

const PHONE = "7382525028";
const WA_LINK = `https://wa.me/91${PHONE}?text=Hi%20Venko%20Wedding%20Planners%2C%20I%20am%20interested%20in%20your%20services.`;

const Contact = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Contact Venko Wedding Planners | Call +91 7382525028 | AP, Telangana, Bangalore, Chennai"
      description="Contact Venko Wedding Planners for your dream wedding. Call +91 7382525028 or WhatsApp us. We serve Andhra Pradesh, Telangana, Hyderabad, Bangalore & Chennai."
      keywords="contact wedding planner, wedding planner phone number, Venko Wedding Planners contact, wedding planner Hyderabad contact, book wedding planner South India"
      canonical="https://venkoweddingplanners.com/contact"
    />
    <Navbar />
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-body mb-2 sm:mb-3">Get in Touch</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-gradient-gold">Contact Us</h1>
          <div className="h-px w-20 sm:w-24 bg-gradient-gold mx-auto mt-4 sm:mt-6" />
          <p className="text-foreground/70 text-base sm:text-xl font-body mt-4 sm:mt-6 max-w-xl mx-auto px-2">
            Ready to plan your dream wedding? Reach out to us and let's create something magical together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          <motion.a
            href={`tel:+91${PHONE}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-border bg-card p-6 sm:p-8 md:p-10 text-center space-y-3 sm:space-y-4 hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-gold">
              <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-gradient-gold">Call Us</h3>
            <p className="text-foreground/70 text-base sm:text-xl font-body">+91 {PHONE}</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Tap to call directly</p>
          </motion.a>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border bg-card p-6 sm:p-8 md:p-10 text-center space-y-3 sm:space-y-4 hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-[#25D366]">
              <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-gradient-gold">WhatsApp</h3>
            <p className="text-foreground/70 text-base sm:text-xl font-body">Chat with us instantly</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Quick response guaranteed</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-primary-foreground px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl tracking-[0.15em] sm:tracking-[0.2em] uppercase font-display font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            Start Planning Your Wedding
          </a>
        </motion.div>
      </div>
    </section>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Contact;
