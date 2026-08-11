import { useEffect, useState } from "react";
import { site } from "../data/site";
import Reveal from "../components/Reveal";

export default function Gallery() {
  const { gallery } = site;
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, gallery.length]);

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal as="div" className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Galeria</h2>
        <p className="mt-3 text-white/70">
          Um pouco da loja, materiais, estoque e entregas.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((src, idx) => (
          <Reveal
            key={`${src}-${idx}`}
            delay={(idx % 3) * 80}
            className="group h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="block h-full w-full cursor-zoom-in"
              aria-label={`Ampliar foto ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Foto ${idx + 1} da loja de materiais`}
                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Fechar"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <img
            src={gallery[activeIndex]}
            alt={`Foto ${activeIndex + 1} da loja de materiais em tamanho ampliado`}
            className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-white/10 object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i + 1) % gallery.length);
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
