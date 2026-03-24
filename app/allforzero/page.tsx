import Image from "next/image";
import Link from "next/link";
import { NewsletterBar, SimpleFooter } from "@/components/site-sections";
import { allForZeroConfig } from "@/lib/site-config";

const stats = [
  { label: "Verkeersdoden sinds 2020", value: "-15%" },
  { label: "Lokale projecten", value: "150+" },
  { label: "Actieve partners", value: "500+" },
];

export default function AllForZeroHomePage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#b64e91] to-[#c55ea1] px-4 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight">Samen naar nul ernstige verkeersslachtoffers</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            All for Zero is een beweging die overheden, bedrijven, organisaties en burgers samenbrengt voor veiligere wegen.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/allforzero/projecten" className="rounded border border-white bg-white px-4 py-2 text-sm font-semibold text-[#b64e91]">
              Ontdek All for Zero
            </Link>
            <Link href="/allforzero/conferenties" className="rounded border border-white px-4 py-2 text-sm font-semibold text-white">
              Conferentie 2026
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded border p-6 text-center">
              <p className="text-3xl font-semibold text-[#b64e91]">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto w-full max-w-6xl rounded border bg-white p-6 md:flex md:gap-6">
          <Image src="/allforzero/conferentie-detail.png" alt="Conferentie" width={420} height={240} className="h-auto w-full rounded md:w-1/2" />
          <div className="mt-4 md:mt-0 md:w-1/2">
            <h2 className="text-2xl font-semibold">Aankomende conferentie</h2>
            <p className="mt-3 text-sm text-zinc-700">
              Jaarlijkse bijeenkomst met experts en beleidsmakers rond verkeersveiligheid en innovatieve samenwerking.
            </p>
            <Link href="/allforzero/conferenties/all-for-zero-conferentie-2026" className="mt-5 inline-block text-sm font-semibold text-[#b64e91]">
              Meer info {"->"}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-4">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          <Link href="/allforzero/actieplannen" className="rounded border bg-white p-5">
            <h3 className="text-lg font-semibold">Actieplannen</h3>
            <p className="mt-2 text-sm text-zinc-600">Ontdek regionale en federale actieplannen.</p>
          </Link>
          <Link href="/allforzero/projecten" className="rounded border bg-white p-5">
            <h3 className="text-lg font-semibold">Projecten</h3>
            <p className="mt-2 text-sm text-zinc-600">Lokale verkeersveiligheidsprojecten per jaar.</p>
          </Link>
          <Link href="/allforzero/nieuws" className="rounded border bg-white p-5">
            <h3 className="text-lg font-semibold">Nieuws</h3>
            <p className="mt-2 text-sm text-zinc-600">Laatste updates over campagnes en resultaten.</p>
          </Link>
        </div>
      </section>

      <NewsletterBar
        accentClassName={allForZeroConfig.newsletter.backgroundClassName}
        title={allForZeroConfig.newsletter.title}
        placeholder={allForZeroConfig.newsletter.placeholder}
        buttonLabel={allForZeroConfig.newsletter.buttonLabel}
        consentText={allForZeroConfig.newsletter.consentText}
      />
      <SimpleFooter
        brand={allForZeroConfig.footer.brand}
        description={allForZeroConfig.footer.description}
        columns={allForZeroConfig.footer.columns}
      />
    </main>
  );
}
