import { site } from "../data/site";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  const { contact } = site;

  return (
    <a
      href={buildWhatsAppLink(
        contact.whatsappNumber,
        "Olá! Quero um orçamento. Minha lista é: ____"
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir orçamento pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-emerald-400 text-black shadow-lg shadow-emerald-950/40 transition-all hover:gap-2 hover:pr-4"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21Zm4.51-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </span>
      <span className="hidden max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all group-hover:block group-hover:max-w-xs group-hover:opacity-100">
        Falar no WhatsApp
      </span>
    </a>
  );
}
