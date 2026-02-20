import { site } from "../data/site";
import { buildWhatsAppLink, buildMapsLink } from "../utils/whatsapp";

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* CTA */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <p className="text-3xl font-bold md:text-4xl text-emerald-200/70">CONTATO</p>
          <h2 className="mt-3 font-bold md:text-4xl">
            Precisa de material pra sua obra?
          </h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Chame no WhatsApp, mande sua lista e a gente faz seu orçamento.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300"
              href={buildWhatsAppLink(
                contact.whatsappNumber,
                "Olá! Quero um orçamento. Minha lista é: ____"
              )}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orçamento no WhatsApp
            </a>

            <a
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10"
              href={buildMapsLink(contact.mapsQuery)}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Maps
            </a>
          </div>

          <div className="mt-8 space-y-3 text-white/80">
            <div>
              <p className="text-sm text-white/60">Endereço</p>
              <p className="font-semibold">{contact.address}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Horário</p>
              <p className="font-semibold">{contact.hours}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Instagram</p>
              <p className="font-semibold">{contact.instagram}</p>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <iframe
            src={contact.mapsEmbedUrl}
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - localização"
          />
        </div>
      </div>
    </section>
  );
}
