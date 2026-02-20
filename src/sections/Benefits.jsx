import { site } from "../data/site";

export default function Benefits() {
  const { benefits } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur">
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] text-emerald-200/70">DIFERENCIAIS</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Por que comprar com a gente?</h2>
          <p className="mt-3 text-white/70">
            Atendimento rápido, variedade e entrega para sua obra não parar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-black/25 p-5 hover:bg-white/5 transition-colors"
            >
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
