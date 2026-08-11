import { site } from "../data/site";
import Reveal from "../components/Reveal";

export default function Testimonials() {
  const { testimonials, testimonialsTitle, testimonialsSubtitle } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <Reveal className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{testimonialsTitle}</h2>
        <p className="mt-3 text-white/70">{testimonialsSubtitle}</p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal
            as="figure"
            key={t.name}
            delay={idx * 80}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <div className="text-sm text-emerald-200/80" aria-hidden="true">⭐⭐⭐⭐⭐</div>
            <blockquote className="mt-3 text-white/70 leading-relaxed">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-4 font-semibold">{t.name}</figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
