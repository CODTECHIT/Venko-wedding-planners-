import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, MessageSquare } from "lucide-react";
import { CONTACT_NUMBERS, getWhatsAppLink } from "@/lib/constants";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.8, y: 20 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-3 items-end mb-2"
          >
            {CONTACT_NUMBERS.map((number, index) => (
              <React.Fragment key={number}>
                {/* WhatsApp Option */}
                <motion.a
                  variants={itemVariants}
                  href={getWhatsAppLink(number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="bg-card/95 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full text-[10px] sm:text-xs font-display font-bold text-foreground shadow-xl whitespace-nowrap">
                    <span className="text-[#25D366]">WhatsApp:</span> +91 {number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </motion.a>

                {/* Call Option */}
                <motion.a
                  variants={itemVariants}
                  href={`tel:+91${number}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="bg-card/95 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full text-[10px] sm:text-xs font-display font-bold text-foreground shadow-xl whitespace-nowrap">
                    <span className="text-primary">Call:</span> +91 {number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                </motion.a>
              </React.Fragment>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ rotate: isOpen ? 90 : 0 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform z-50 relative"
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-8 sm:h-8" />
        ) : (
          <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
        )}

      </motion.button>
    </div>
  );
};

export default FloatingButtons;

