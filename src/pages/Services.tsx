import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";

const Services = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Wedding Planning Services | Decoration, Catering, Photography | Venko Wedding Planners"
      description="Explore Venko's premium wedding services: venue selection, decoration, catering, photography, videography, bridal makeup, DJ & more. Serving Andhra Pradesh, Telangana, Bangalore & Chennai."
      keywords="wedding decoration services, wedding catering, wedding photography Hyderabad, wedding venue selection, bridal makeup, wedding DJ, wedding videography, wedding services Andhra Pradesh Telangana Bangalore Chennai"
      canonical="https://venkoweddingplanners.com/services"
    />
    <Navbar />
    <div className="pt-20">
      <ServicesSection />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default Services;
