import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

const NAV_LINKS = [
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const { brand, footer, contact } = site;

  return (
    <footer className="border-t border-white/10 bg-black/25">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* marca */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-400/10">
                <span className="text-xs font-bold text-emerald-200">LM</span>
              </div>
              <p className="text-lg font-bold">{brand.name}</p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/60 leading-relaxed">
              {contact.address} • {contact.hours}
            </p>
          </div>

          {/* navegação */}
          <div>
            <p className="text-xs tracking-[0.3em] text-emerald-200/70">NAVEGAÇÃO</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="w-fit hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* redes e contato */}
          <div>
            <p className="text-xs tracking-[0.3em] text-emerald-200/70">CONTATO</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={buildWhatsAppLink(
                  contact.whatsappNumber,
                  "Olá! Quero um orçamento. Minha lista é: ____"
                )}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-emerald-300/30 hover:text-emerald-200"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21Z" />
                </svg>
              </a>

              {contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-emerald-300/30 hover:text-emerald-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              )}
            </div>
            <p className="mt-4 text-sm text-white/60">{contact.instagram}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</span>
          <span>{footer.devCredit}</span>
        </div>
      </div>
    </footer>
  );
}
