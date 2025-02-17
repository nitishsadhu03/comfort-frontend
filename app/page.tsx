import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import Services from "@/components/Services";
import SocialMediaFeed from "@/components/SocialMediaFeed";

export default function Home() {
  return (
    <main className="bg-secondary-foreground">
      <Navbar />
      <Hero />
      <ServiceCards />
      <About />
      <Services />
      <Gallery />
      <ContactSection />
      <SocialMediaFeed />
      <Footer />
    </main>
  );
}
