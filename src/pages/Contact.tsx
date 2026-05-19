import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import { CONTACT_NUMBERS, getWhatsAppLink } from "@/lib/constants";


const Contact = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title={`Contact Venko Wedding Planners | Call +91 ${CONTACT_NUMBERS.join(" / ")} | AP, Telangana, Bangalore, Chennai`}
      description={`Contact Venko Wedding Planners for your dream wedding. Call +91 ${CONTACT_NUMBERS.join(" or +91 ")}. We serve Andhra Pradesh, Telangana, Hyderabad, Bangalore & Chennai.`}
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

        <div className={CONTACT_NUMBERS.length === 1 ? "max-w-xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"}>
          {CONTACT_NUMBERS.map((number, index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden border border-border bg-card p-8 sm:p-10 text-center flex flex-col items-center justify-between group hover:border-primary/50 transition-all duration-500 shadow-xl"
            >
              {/* Decorative Background */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative space-y-6 w-full">
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-gold shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Phone className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-primary text-xs uppercase tracking-widest font-medium">
                    {CONTACT_NUMBERS.length > 1 ? `Contact Option ${index + 1}` : "Phone & WhatsApp"}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-gradient-gold">+91 {number}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">Available for calls and direct messaging for immediate wedding planning assistance.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={`tel:+91${number}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-display font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity shadow-gold"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href={getWhatsAppLink(number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] px-6 py-3 rounded-full font-display font-bold uppercase tracking-wider text-sm hover:bg-[#25D366]/10 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <a
            href={getWhatsAppLink(CONTACT_NUMBERS[0])}
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
