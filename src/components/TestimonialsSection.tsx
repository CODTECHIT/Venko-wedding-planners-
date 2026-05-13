import { LazyMotion, domAnimation, m } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya & Rahul", text: "Venko made our dream wedding a reality! Every detail was perfect, from the stunning decor to the seamless coordination. We couldn't have asked for a better experience.", rating: 5 },
  { name: "Ananya & Vikram", text: "The team at Venko is simply magical. They understood our vision perfectly and delivered beyond our expectations. Our guests are still talking about the wedding!", rating: 5 },
  { name: "Sneha & Arjun", text: "Professional, creative, and incredibly passionate. Nageswar and his team turned our wedding into a fairy tale. Highly recommend Venko Wedding Planners!", rating: 5 },
  { name: "Deepika & Karthik", text: "From the grand venue to the tiniest flower arrangement, Venko handled everything with grace. Our families were so impressed — it was the wedding of our dreams!", rating: 5 },
  { name: "Meera & Siddharth", text: "We were stressed about planning a destination wedding, but Nageswar sir and his team made it completely effortless. Every guest felt like royalty. Absolutely phenomenal!", rating: 5 },
  { name: "Kavya & Ravi", text: "The decoration was out of this world! Venko transformed a simple hall into a palace. The photography team also captured every emotion beautifully. Worth every penny.", rating: 5 },
  { name: "Lakshmi & Prasad", text: "We had a very traditional Telugu wedding and Venko understood all our customs perfectly. The catering was exceptional — our guests still rave about the food!", rating: 5 },
  { name: "Swathi & Aditya", text: "Venko doesn't just plan weddings, they create unforgettable experiences. The attention to detail, the creativity, and the warmth of the team is unmatched. Truly the best!", rating: 5 },
  { name: "Nithya & Harsha", text: "We gave them a tight budget and they still delivered a wedding that looked like a million bucks. So grateful for the Venko team's dedication and talent!", rating: 5 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const TestimonialsSection = () => (
  <LazyMotion features={domAnimation}>
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-body mb-2 sm:mb-3">Love Stories</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">What Our Couples Say</h2>
          <div className="h-px w-20 sm:w-24 bg-gradient-gold mx-auto mt-4 sm:mt-6" />
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <m.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="border border-border bg-background p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="text-5xl sm:text-6xl text-primary/20 font-display absolute top-3 sm:top-4 left-4 sm:left-6">"</div>
              <div className="flex gap-1 pt-5 sm:pt-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg font-body leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="h-px w-10 sm:w-12 bg-gradient-gold" />
              <p className="text-gradient-gold font-display font-semibold text-base sm:text-lg">{t.name}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  </LazyMotion>
);

export default TestimonialsSection;
