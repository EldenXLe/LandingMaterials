import { site } from "../data/site";

export default function Footer() {
  const { brand, footer, contact } = site;

  return (
    <footer className="border-t border-white/10 bg-black/25">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">{brand.name}</p>
            <p className="mt-1 text-sm text-white/60">
              {contact.address} • {contact.hours}
            </p>
          </div>

          <div className="text-sm text-white/60">
            <span className="block">{footer.devCredit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
