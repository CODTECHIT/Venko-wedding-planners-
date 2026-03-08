import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Users, Tag, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import OptimizedImage from "@/components/OptimizedImage";
import { packages, typeOrder, formatPrice, getDiscount, type Package } from "@/data/packages";

const PHONE = "7382525028";

function getWhatsAppLink(pkg: Package) {
  const text = `Hi Venko Wedding Planners, I'm interested in Package ${pkg.id} (${pkg.type}) - ${formatPrice(pkg.price)} for ${pkg.pax}. Please share more details.`;
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
}

const grouped = typeOrder.map((type) => ({
  type,
  packages: packages.filter((p) => p.type === type).sort((a, b) => a.price - b.price),
})).filter((g) => g.packages.length > 0);

const allTypes = ["All", ...typeOrder];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const Packages = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? grouped : grouped.filter((g) => g.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Wedding Packages from ₹1.95L | Resort Wedding, Muhurat, Reception | Venko Wedding Planners"
        description="Explore 20+ wedding packages from ₹1,95,999. Resort Wedding, Muhurat, Reception, Engagement & Photography packages. Serving AP, Telangana, Bangalore & Chennai."
        keywords="wedding packages, resort wedding package, affordable wedding packages India, island wedding, beach resort wedding, budget resort wedding Hyderabad, wedding package South India"
        canonical="https://venkoweddingplanners.com/packages"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 text-center px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-body"
        >
          Curated For You
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
          className="text-gradient-gold font-display text-3xl sm:text-4xl md:text-6xl mt-3 sm:mt-4 mb-3 sm:mb-4"
        >
          Our Packages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
        >
          Choose from our carefully crafted wedding packages designed to make your special day unforgettable.
        </motion.p>
      </section>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12"
      >
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {allTypes.map((type) => (
            <motion.button
              key={type}
              onClick={() => setFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm tracking-[0.08em] sm:tracking-[0.1em] uppercase font-body font-medium border transition-all duration-300 ${filter === type
                  ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Package Groups */}
      <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-12 sm:space-y-20">
        <AnimatePresence mode="wait">
          {filtered.map((group, gi) => (
            <motion.section
              key={group.type}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {/* Group Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-6 sm:mb-10 flex items-center gap-4 sm:gap-6"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                  <OptimizedImage src={group.packages[0].image} alt={group.type} className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-gradient-gold font-display text-xl sm:text-2xl md:text-3xl truncate">{group.type}s</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">{group.packages.length} packages available</p>
                </div>
                <div className="flex-1 h-px bg-border ml-4 hidden md:block" />
              </motion.div>

              {/* Package Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {group.packages.map((pkg, pi) => {
                  const discount = getDiscount(pkg.originalPrice, pkg.price);
                  return (
                    <motion.div
                      key={pkg.id}
                      custom={pi}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-30px" }}
                      whileHover={{ y: -6, boxShadow: "0 10px 30px -10px hsl(38 38% 61% / 0.25)" }}
                      className="bg-card border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Image Header */}
                      <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
                        <OptimizedImage src={pkg.image} alt={pkg.type} className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                        {discount > 0 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-gold text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-display font-bold tracking-wider"
                          >
                            {discount}% OFF
                          </motion.div>
                        )}

                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-background/80 backdrop-blur-sm text-primary px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-body tracking-wider border border-border">
                          PKG #{pkg.id}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                        <div>
                          <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                            <span className="text-gradient-gold font-display text-xl sm:text-2xl font-bold">{formatPrice(pkg.price)}</span>
                            <span className="text-muted-foreground line-through text-xs sm:text-sm">{formatPrice(pkg.originalPrice)}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                          <Users size={12} className="text-primary flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                          <span className="truncate">{pkg.pax}</span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <Tag size={12} className="text-primary flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                            <span className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground font-body">
                              Includes ({pkg.includes.length} services)
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {pkg.includes.slice(0, 6).map((item) => (
                              <span key={item} className="inline-flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs bg-secondary text-secondary-foreground px-1.5 sm:px-2 py-0.5 sm:py-1">
                                <Check size={8} className="text-primary sm:w-2.5 sm:h-2.5" />
                                {item}
                              </span>
                            ))}
                            {pkg.includes.length > 6 && (
                              <span className="inline-flex items-center text-[10px] sm:text-xs text-primary px-1.5 sm:px-2 py-0.5 sm:py-1">
                                +{pkg.includes.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>

                        <motion.a
                          href={getWhatsAppLink(pkg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 w-full bg-gradient-gold text-primary-foreground py-2.5 sm:py-3 text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase font-display font-semibold hover:opacity-90 transition-opacity mt-2 sm:mt-4"
                        >
                          <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                          Enquire Now
                        </motion.a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Packages;
