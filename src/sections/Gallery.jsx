import { site } from "../data/site";

export default function Gallery() {
  const { gallery } = site;

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Galeria</h2>
        <p className="mt-3 text-white/70">
          Um pouco da loja, materiais, estoque e entregas.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="group h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}