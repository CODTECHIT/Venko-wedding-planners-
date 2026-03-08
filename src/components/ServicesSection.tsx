import { LazyMotion, domAnimation, m } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
import venueImg from "@/assets/service-venue.jpg";
import decorImg from "@/assets/service-decoration.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import photoImg from "@/assets/service-photography.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

const PHONE = "7382525028";
const WA_LINK = `https://wa.me/91${PHONE}?text=Hi%20Venko%20Wedding%20Planners%2C%20I%20am%20interested%20in%20your%20services.`;

const services = [
  { title: "End to End Wedding", desc: "Complete wedding planning from concept to execution. We handle every detail so you can enjoy every moment.", img: heroImg },
  { title: "Venue Selection", desc: "Access to the finest palaces, resorts, and banquet halls. We find the perfect backdrop for your love story.", img: venueImg },
  { title: "Decoration & Design", desc: "Breathtaking floral arrangements, lighting, and thematic decor that transform spaces into wonderlands.", img: decorImg },
  { title: "Catering Excellence", desc: "Curated multi-cuisine menus from top chefs. A culinary experience that delights every palate.", img: cateringImg },
  { title: "Photography & Film", desc: "Cinematic storytelling that captures the magic, the emotions, and the candid moments of your big day.", img: photoImg },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => (
  <LazyMotion features={domAnimation}>
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-body mb-2 sm:mb-3">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">Our Premium Services</h2>
          <div className="h-px w-20 sm:w-24 bg-gradient-gold mx-auto mt-4 sm:mt-6" />
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, i) => (
            <m.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden border border-border bg-card hover:border-primary/50 hover:shadow-gold transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <OptimizedImage src={service.img} alt={service.title} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-5 sm:p-6 md:p-8 space-y-2 sm:space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-gradient-gold">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-body leading-relaxed">{service.desc}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block text-primary text-xs sm:text-sm tracking-[0.15em] uppercase font-display font-semibold hover:text-gold-light transition-colors pt-1 sm:pt-2 story-link">
                  Enquire Now →
                </a>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  </LazyMotion>
);

export default ServicesSection;
