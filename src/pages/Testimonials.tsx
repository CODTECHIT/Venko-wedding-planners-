import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";

const Testimonials = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Client Reviews & Testimonials | Venko Wedding Planners | 500+ Happy Couples"
      description="Read what our happy couples say about Venko Wedding Planners. 500+ weddings planned with 5-star ratings across Andhra Pradesh, Telangana, Bangalore & Chennai."
      keywords="Venko Wedding Planners reviews, wedding planner testimonials, best wedding planner reviews Hyderabad, wedding planner ratings South India, happy couples Venko"
      canonical="https://venkoweddingplanners.com/testimonials"
    />
    <Navbar />
    <div className="pt-20">
      <TestimonialsSection />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Testimonials;
