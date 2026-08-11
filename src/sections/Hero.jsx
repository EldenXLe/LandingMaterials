import { useState } from "react";
import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

const NAV_LINKS = [
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export default function Hero() {
  const { brand, contact, stats, gallery } = site;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* fundo */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://plus.unsplash.com/premium_photo-1682144835480-dec6a3bb54a1?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
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
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* botão hamburguer (mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* menu mobile */}
        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm backdrop-blur md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* grid hero */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
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
                className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-black hover:bg-emerald-300 transition-colors"
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
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
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
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto h-[420px] w-full max-w-md">
              {/* marcas de canto, referência a desenho técnico/planta baixa */}
              <span className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-emerald-300/40" />
              <span className="absolute -right-3 -bottom-3 h-6 w-6 border-r-2 border-b-2 border-emerald-300/40" />

              <div className="absolute left-0 top-0 h-64 w-[78%] overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40">
                <img
                  src={gallery[0]}
                  alt="Estoque de materiais de construção"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="absolute bottom-0 right-0 h-56 w-[62%] overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40">
                <img
                  src={gallery[3]}
                  alt="Tijolos e blocos organizados"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* faixa de estatísticas */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-emerald-300">{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="h-14" />
      </div>
    </section>
  );
}
