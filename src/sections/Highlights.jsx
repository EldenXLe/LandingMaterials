import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Highlights() {
  const { productsTitle, productsSubtitle, products, contact } = site;

  return (
    <section id="produtos" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">{productsTitle}</h2>
          <p className="mt-3 max-w-2xl text-white/70">{productsSubtitle}</p>
        </div>

        <a
          className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 md:inline-flex"
          href={buildWhatsAppLink(
            contact.whatsappNumber,
            "Olá! Quero um orçamento. Minha lista é: ____"
          )}
          target="_blank"
          rel="noreferrer"
        >
          Enviar lista no WhatsApp
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <div className="absolute left-4 top-4 z-10">
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                {p.tag}
              </span>
            </div>

            <img
              src={p.image}
              alt={p.name}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              loading="lazy"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-white/90">{p.price}</span>

                <a
                  className="rounded-xl bg-emerald-400 px-3 py-2 text-sm font-semibold text-black hover:bg-emerald-300"
                  href={buildWhatsAppLink(contact.whatsappNumber, p.whatsappText)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Orçar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <a
          className="inline-flex w-full justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300"
          href={buildWhatsAppLink(
            contact.whatsappNumber,
            "Olá! Quero um orçamento. Minha lista é: ____"
          )}
          target="_blank"
          rel="noreferrer"
        >
          Enviar lista no WhatsApp
        </a>
      </div>
    </section>
  );
}
