import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import WhoWeServe from "@/components/WhoWeServe";
import WhyDeleteRisk from "@/components/WhyDeleteRisk";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Problem />
        <Services />
        <HowWeWork />
        <WhoWeServe />
        <WhyDeleteRisk />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
