import { site } from "../data/site";

export default function Testimonials() {
  const { testimonials, testimonialsTitle, testimonialsSubtitle } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{testimonialsTitle}</h2>
        <p className="mt-3 text-white/70">{testimonialsSubtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <div className="text-sm text-emerald-200/80">⭐⭐⭐⭐⭐</div>
            <blockquote className="mt-3 text-white/70 leading-relaxed">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-4 font-semibold">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
