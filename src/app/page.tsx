import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* ClientLogos section kept off per request */}
      <AboutSection />
      <ServicesSection />
      <WhyWorkWithUs />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </main>
  );
}

