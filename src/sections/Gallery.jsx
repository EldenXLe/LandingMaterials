import { site } from "../data/site";

export default function Gallery() {
  const { gallery } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Galeria</h2>
        <p className="mt-3 text-white/70">Um pouco do nosso ambiente e dos nossos pratos.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((src, idx) => (
          <div
            key={src}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="h-56 w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
