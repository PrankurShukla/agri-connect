import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import Impact from "@/components/sections/Impact";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { initAnimations } from "@/lib/animations";

export default function Home() {
  // Initialize animations when component mounts
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Problems />
        <Solutions />
        <Impact />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
