import { site } from "../data/site";

export default function About() {
  const { aboutGrid } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {aboutGrid.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <p className="text-xs tracking-[0.3em] text-emerald-200/70">
              {item.title.toUpperCase()}
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">{item.text}</p>

            <div className="mt-6 h-px w-10 bg-emerald-300/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
