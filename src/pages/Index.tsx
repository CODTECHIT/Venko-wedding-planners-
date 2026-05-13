import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import { CONTACT_NUMBERS } from "@/lib/constants";


const Index = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Venko Wedding Planners | Best Wedding Planners in Andhra Pradesh, Telangana, Bangalore & Chennai"
      description={`Venko Wedding Planners – Premium end-to-end wedding planning in Andhra Pradesh, Telangana, Bangalore & Chennai. 500+ weddings, decoration, catering, photography & more. Call +91 ${CONTACT_NUMBERS.join(" / ")}.`}

      keywords="wedding planners, best wedding planners Andhra Pradesh, wedding planners Telangana, wedding planners Hyderabad, wedding planners Bangalore, wedding planners Chennai, Telugu wedding planners, South Indian wedding planners, Venko Wedding Planners"
      canonical="https://venkoweddingplanners.com/"
    />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
