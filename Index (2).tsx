import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Advantage from "@/components/Advantage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);
  return <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={loading ? "hidden" : "min-h-screen"}>
        <Hero />
        <About />
        <Projects />
        <Advantage />
        <Contact className="px-0" />
        <Footer />
        <Chatbot />
      </div>
    </>;
};
export default Index;