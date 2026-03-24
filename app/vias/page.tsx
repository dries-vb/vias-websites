import Image from "next/image";
import Link from "next/link";
import { NewsletterBar, SimpleFooter } from "@/components/site-sections";
import { viasConfig } from "@/lib/site-config";

const domainCards = [
  { title: "Verkeersveiligheid", href: "/vias/knowledge-center" },
  { title: "Mobiliteit", href: "/vias/events-overview" },
  { title: "Veiligheid", href: "/vias/publications-overview" },
];

export default function ViasHomePage() {
  return (
    <main>
      <section className="relative px-4 py-20 text-white">
        <Image
          src="/vias-institute/home.png"
          alt="Vias home achtergrond"
          width={1600}
          height={700}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto w-full max-w-6xl">
          <h1 className="max-w-2xl text-4xl font-semibold">Het Belgisch kenniscentrum voor verkeersveiligheid, mobiliteit en veiligheid.</h1>
          <div className="mt-7 flex gap-3">
            <Link href="/vias/knowledge-center" className="rounded bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
              Verken kennisbank
            </Link>
            <Link href="/vias/contact" className="rounded border border-white px-4 py-2 text-sm font-semibold text-white">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold">Onze domeinen</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {domainCards.map((item) => (
              <Link key={item.title} href={item.href} className="rounded border p-5 hover:border-[#5f8096]">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">Ontdek artikels, tools en projecten in dit domein.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto w-full max-w-6xl rounded border bg-white p-6 md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Over Vias institute</h2>
            <p className="mt-3 text-sm text-zinc-700">
              Vias verzamelt en deelt onderzoek en inzichten rond verkeersveiligheid, mobiliteit en veiligheid voor beleid en samenleving.
            </p>
            <Link href="/vias/contact" className="mt-4 inline-block text-sm font-semibold text-[#5f8096]">
              Ontdek Vias {"->"}
            </Link>
          </div>
          <Image src="/vias-institute/kennisbank.png" alt="Vias kennisbank" width={520} height={290} className="mt-4 h-auto w-full rounded md:mt-0" />
        </div>
      </section>

      <NewsletterBar
        accentClassName={viasConfig.newsletter.backgroundClassName}
        title={viasConfig.newsletter.title}
        placeholder={viasConfig.newsletter.placeholder}
        buttonLabel={viasConfig.newsletter.buttonLabel}
        consentText={viasConfig.newsletter.consentText}
      />
      <SimpleFooter
        brand={viasConfig.footer.brand}
        description={viasConfig.footer.description}
        columns={viasConfig.footer.columns}
      />
    </main>
  );
}
