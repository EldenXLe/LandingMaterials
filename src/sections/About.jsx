import { site } from "../data/site";

export default function About() {
  const { about } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">{about.title}</h2>
          <p className="mt-4 text-white/70 leading-relaxed">{about.text}</p>

          <ul className="mt-6 space-y-3">
            {about.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/80">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              className="h-80 w-full object-cover md:h-[420px] hover:scale-[1.03] transition-transform duration-500"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop"
              alt="Ambiente do restaurante"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
