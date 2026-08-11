import Hero from "./sections/Hero";
import About from "./sections/About";
import Highlights from "./sections/Highlights";
import Benefits from "./sections/Benefits";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* pular para o conteúdo (acessibilidade / navegação por teclado) */}
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-black transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      {/* textura de grid, referência a planta baixa / desenho técnico de obra */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(52,211,153,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,.6)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      />

      {/* glow editorial */}
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(60%_50%_at_18%_10%,rgba(16,185,129,.25)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-25 [background:radial-gradient(45%_40%_at_80%_30%,rgba(16,185,129,.18)_0%,transparent_55%)]" />

      <div id="conteudo" className="relative">
        <Hero />
        <About />
        <Highlights />
        <Benefits />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}
