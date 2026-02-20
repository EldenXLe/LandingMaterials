import { site } from "../data/site";

export default function Benefits() {
  const { benefits } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Por que escolher a gente?</h2>
          <p className="mt-3 text-white/70">
            Tudo pensado para você comer bem, com praticidade.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-white/5 transition-colors"
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
