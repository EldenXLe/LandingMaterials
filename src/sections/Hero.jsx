import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Hero() {
  const { brand, contact, stats } = site;

  return (
    <section className="relative overflow-hidden">
      {/* fundo */}
      <div className="absolute inset-0">
        <div className="h-[92vh] w-full bg-[url('https://plus.unsplash.com/premium_photo-1682144835480-dec6a3bb54a1?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-10">
        {/* topbar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-400/10">
              <span className="text-xs font-bold text-emerald-200">LM</span>
            </div>
            <span className="font-semibold tracking-wide">{brand.name}</span>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#produtos" className="hover:text-white">
              Produtos
            </a>
            <a href="#galeria" className="hover:text-white">
              Galeria
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>
        </div>

        {/* grid hero */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* texto */}
          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              {brand.badge}
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {brand.heroTitle}
            </h1>

            <p className="mt-5 max-w-xl text-white/70 leading-relaxed">
              {brand.heroText}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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
                href="#produtos"
              >
                Ver produtos
              </a>
            </div>

            {/* mini infos */}
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-white font-semibold">Horário</p>
                <p className="mt-1">{contact.hours}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-white font-semibold">Endereço</p>
                <p className="mt-1">{contact.address}</p>
              </div>
            </div>
          </div>

          {/* colagem */}
          <div className="relative lg:col-span-5">
            <div className="relative h-[100px] w-full">
              {/* stat card */}
              <div className="absolute right-0 top-0 z-10 w-[240px] rounded-2xl border border-emerald-300/20 bg-black/45 p-6 backdrop-blur hover:bg-black/60 transition-colors">
                <p className="text-xs text-white/60">{stats?.[0]?.label || "Anos"}</p>
                <p className="mt-2 text-5xl font-bold tracking-tight">
                  {stats?.[0]?.value || "30+"}
                </p>
                <p className="mt-2 text-sm text-white/70">{stats?.[1]?.label || "Orçamento"}</p>
              </div>

            </div>
          </div>
        </div>

        <div className="h-14" />
      </div>
    </section>
  );
}
