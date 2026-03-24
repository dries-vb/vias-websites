import Link from "next/link";
import type { FooterColumn } from "@/lib/site-config";

type NewsletterProps = {
  accentClassName: string;
  title?: string;
  placeholder?: string;
  buttonLabel?: string;
  consentText?: string;
};

export function NewsletterBar({
  accentClassName,
  title = "Schrijf je in voor onze nieuwsbrief",
  placeholder = "E-mailadres",
  buttonLabel = "Schrijf in",
  consentText = "Ik ga akkoord met de regels & voorwaarden",
}: NewsletterProps) {
  return (
    <section className={`mt-12 ${accentClassName} px-4 py-10 text-white`}>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex w-full max-w-xl flex-col gap-2 sm:flex-row">
          <input
            aria-label={placeholder}
            placeholder={placeholder}
            className="h-10 flex-1 rounded border border-white/30 bg-white px-3 text-sm text-zinc-900 outline-none"
          />
          <button className="h-10 rounded bg-zinc-900 px-5 text-sm font-semibold text-white">{buttonLabel}</button>
        </div>
        <p className="text-xs text-white/90">{consentText}</p>
      </div>
    </section>
  );
}

type FooterProps = {
  brand: string;
  description?: string;
  columns?: FooterColumn[];
};

export function SimpleFooter({ brand, description, columns }: FooterProps) {
  const fallbackColumns: FooterColumn[] = [
    {
      title: "Navigatie",
      links: [
        { href: "#", label: "Home" },
        { href: "#", label: "Projecten" },
        { href: "#", label: "Nieuws" },
      ],
    },
    {
      title: "Meer info",
      links: [
        { href: "#", label: "Veelgestelde vragen" },
        { href: "#", label: "Nieuwsbrieven" },
        { href: "#", label: "Contact" },
      ],
    },
  ];

  const resolvedColumns = columns && columns.length > 0 ? columns : fallbackColumns;

  return (
    <footer className="border-t bg-[#e9ecef] px-4 py-10 text-sm text-zinc-700">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-4">
        <div>
          <h3 className="font-semibold">{brand}</h3>
          <p className="mt-2 text-xs text-zinc-600">{description ?? "Prototype footer section based on the design screens."}</p>
        </div>
        {resolvedColumns.map((column) => (
          <div key={column.title}>
            <h4 className="font-semibold">{column.title}</h4>
            <ul className="mt-2 space-y-1">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-semibold">Volg ons</h4>
          <p className="mt-2 text-xs text-zinc-600">LinkedIn - X - Facebook</p>
        </div>
      </div>
    </footer>
  );
}
