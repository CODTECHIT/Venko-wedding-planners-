import { LazyMotion, domAnimation, m } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import aboutImg from "@/assets/about-wedding.jpg";

const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const AboutSection = () => (
  <LazyMotion features={domAnimation}>
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <m.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-3 sm:-inset-4 border border-primary/20 hidden sm:block" />
            <OptimizedImage src={aboutImg} alt="About Venko" className="w-full h-[280px] sm:h-[400px] md:h-[500px]" />
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-gradient-gold px-5 sm:px-8 py-3 sm:py-4"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">10+</span>
              <span className="block text-primary-foreground/80 text-xs sm:text-sm tracking-wider uppercase">Years Experience</span>
            </m.div>
          </m.div>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 sm:space-y-6 mt-8 lg:mt-0"
          >
            <m.div variants={fadeUp}>
              <p className="text-primary text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-body mb-2 sm:mb-3">About Us</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold leading-tight">
                Crafting Timeless<br />Wedding Stories
              </h2>
            </m.div>
            <m.div variants={fadeUp} className="h-px w-12 sm:w-16 bg-gradient-gold" />
            <m.p variants={fadeUp} className="text-foreground/70 text-base sm:text-xl font-body leading-relaxed">
              Founded by <span className="text-primary font-semibold">Nageswar Kumar</span>, Venko Wedding Planners brings passion, creativity, and meticulous attention to every celebration. We believe every love story deserves a grand chapter.
            </m.p>
            <m.p variants={fadeUp} className="text-foreground/60 text-sm sm:text-lg font-body leading-relaxed">
              From intimate ceremonies to grand celebrations, we transform your vision into a breathtaking reality. Our end-to-end services ensure every moment is picture-perfect, every detail is flawless, and every guest is mesmerized.
            </m.p>
            <m.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:gap-6 pt-2 sm:pt-4">
              {[
                { num: "500+", label: "Weddings Planned" },
                { num: "100%", label: "Client Satisfaction" },
                { num: "50+", label: "Venue Partners" },
                { num: "200+", label: "Happy Families" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center border border-border p-3 sm:p-4 transition-colors hover:border-primary/50"
                >
                  <span className="text-gradient-gold font-display text-xl sm:text-2xl font-bold">{stat.num}</span>
                  <span className="block text-muted-foreground text-xs sm:text-sm tracking-wider uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  </LazyMotion>
);

export default AboutSection;
