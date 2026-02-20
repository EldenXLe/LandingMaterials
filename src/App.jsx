import Hero from "./sections/Hero";
import About from "./sections/About";
import Highlights from "./sections/Highlights";
import Benefits from "./sections/Benefits";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Glow editorial */}
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(60%_50%_at_18%_10%,rgba(16,185,129,.25)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-25 [background:radial-gradient(45%_40%_at_80%_30%,rgba(16,185,129,.18)_0%,transparent_55%)]" />

      <div className="relative">
        <Hero />
        <About />
        <Highlights />
        <Benefits />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
