import Image from "next/image";
import Link from "next/link";
import { NewsletterBar, SimpleFooter } from "@/components/site-sections";
import { esraConfig } from "@/lib/site-config";

const stats = [
  { label: "Countries", value: "48" },
  { label: "Survey waves", value: "4" },
  { label: "Respondents", value: "60k+" },
  { label: "Publications", value: "100+" },
];

export default function EsraHomePage() {
  return (
    <main>
      <section className="relative px-4 py-20 text-white">
        <Image src="/esra/home.png" alt="ESRA home hero" width={1600} height={700} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#5f7f1f]/75" />
        <div className="relative mx-auto w-full max-w-6xl">
          <h1 className="max-w-2xl text-4xl font-semibold">Understanding road safety attitudes across the globe</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            ESRA is an international initiative collecting harmonized road safety attitude and behavior data.
          </p>
          <div className="mt-7 flex gap-3">
            <Link href="/esranet/about" className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#5f7f1f]">
              Read about us
            </Link>
            <Link href="/esranet/dashboards" className="rounded border border-white px-4 py-2 text-sm font-semibold text-white">
              Explore dashboards
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded border p-4 text-center">
              <p className="text-2xl font-semibold text-[#6b8e23]">{stat.value}</p>
              <p className="text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto w-full max-w-6xl rounded border bg-white p-6 md:grid md:grid-cols-2 md:gap-6">
          <Image src="/esra/event-upcoming.png" alt="Upcoming event" width={480} height={260} className="h-auto w-full rounded" />
          <div className="mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold">Upcoming event</h2>
            <p className="mt-3 text-sm text-zinc-700">Join the ESRA4 Global Launch Event and meet researchers and policy stakeholders.</p>
            <Link href="/esranet/events/esra4-global-launch" className="mt-4 inline-block text-sm font-semibold text-[#6b8e23]">
              View event {"->"}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-2">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          <Link href="/esranet/dashboards" className="rounded border bg-white p-5">
            <h3 className="font-semibold">Interactive dashboards</h3>
            <p className="mt-2 text-sm text-zinc-600">Explore harmonized data across countries and survey waves.</p>
          </Link>
          <Link href="/esranet/publications" className="rounded border bg-white p-5">
            <h3 className="font-semibold">Publications</h3>
            <p className="mt-2 text-sm text-zinc-600">Read reports, scientific papers and methodological notes.</p>
          </Link>
          <Link href="/esranet/news" className="rounded border bg-white p-5">
            <h3 className="font-semibold">News</h3>
            <p className="mt-2 text-sm text-zinc-600">Latest project updates, outcomes and announcements.</p>
          </Link>
        </div>
      </section>

      <NewsletterBar
        accentClassName={esraConfig.newsletter.backgroundClassName}
        title={esraConfig.newsletter.title}
        placeholder={esraConfig.newsletter.placeholder}
        buttonLabel={esraConfig.newsletter.buttonLabel}
        consentText={esraConfig.newsletter.consentText}
      />
      <SimpleFooter
        brand={esraConfig.footer.brand}
        description={esraConfig.footer.description}
        columns={esraConfig.footer.columns}
      />
    </main>
  );
}
