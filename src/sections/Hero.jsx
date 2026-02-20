import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Hero() {
  const { brand, contact } = site;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-[80vh] w-full bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex h-[80vh] max-w-6xl flex-col justify-center px-4">
        <p className="mb-3 rounded-full bg-white/10 px-4 py-1 text-sm w-fit">
          {brand.badge}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">{brand.name}</h1>
        <p className="mt-4 text-white/80 max-w-xl">{brand.tagline}</p>

        <a
          href={buildWhatsAppLink(contact.whatsappNumber, "Olá! Quero fazer um pedido.")}
          target="_blank"
          className="mt-6 w-fit rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400"
        >
          Pedir no WhatsApp
        </a>
      </div>
    </section>
  );
}
