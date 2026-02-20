import { site } from "../data/site";
import { buildWhatsAppLink, buildMapsLink } from "../utils/whatsapp";

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* CTA final */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl">Está com fome?</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Peça agora pelo WhatsApp e receba no conforto da sua casa.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black hover:bg-green-400"
              href={buildWhatsAppLink(contact.whatsappNumber, "Olá! Quero fazer um pedido.")}
              target="_blank"
              rel="noreferrer"
            >
              Pedir no WhatsApp
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

        {/* “Mapa” simples (link + imagem) */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <iframe
            src={contact.mapsEmbedUrl}
            className="h-[420px] w-full"
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
