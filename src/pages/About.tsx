import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";

const About = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="About Venko Wedding Planners | 10+ Years of Wedding Excellence in South India"
      description="Learn about Venko Wedding Planners, founded by Nageswar Kumar. 10+ years of experience, 500+ weddings planned across Andhra Pradesh, Telangana, Bangalore & Chennai with 100% client satisfaction."
      keywords="about Venko Wedding Planners, Nageswar Kumar wedding planner, wedding planner Hyderabad, wedding planner experience South India, best wedding organizer AP Telangana"
      canonical="https://venkoweddingplanners.com/about"
    />
    <Navbar />
    <div className="pt-20">
      <AboutSection />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default About;
