import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Highlights() {
  const { highlights, contact } = site;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Destaques do Cardápio</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((item) => (
          <div key={item.name} className="rounded-2xl bg-white/5 p-4 border border-white/10">
            <img src={item.image} className="rounded-xl h-72 w-full object-cover" />
            <h3 className="mt-4 font-semibold">{item.name}</h3>
            <p className="text-sm text-white/70">{item.desc}</p>
            <p className="mt-2 font-semibold">{item.price}</p>

            <a
              href={buildWhatsAppLink(contact.whatsappNumber, item.whatsappText)}
              target="_blank"
              className="mt-4 inline-block rounded-lg bg-green-500 px-4 py-2 text-black font-semibold hover:bg-green-400"
            >
              Pedir
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
