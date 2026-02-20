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
      <Hero />
      <About />
      <Highlights />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
