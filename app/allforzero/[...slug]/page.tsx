import Link from "next/link";
import { notFound } from "next/navigation";
import { PrototypeScreen } from "@/components/prototype-screen";
import { afzRoutes, getAfzRoute, getAfzStaticSlugParams } from "@/lib/allforzero-routes";

type Params = { slug: string[] };

/** Required for `output: 'export'` (Cloudflare Pages): pre-render all prototype sub-routes. */
export function generateStaticParams() {
  return getAfzStaticSlugParams();
}

/** Only paths returned above exist as static HTML; unknown URLs 404 at deploy time. */
export const dynamicParams = false;

export default async function AllForZeroNestedPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const slug = resolved.slug ?? [];
  const current = getAfzRoute(slug);

  if (!current) {
    notFound();
  }

  return (
    <div className="pb-10">
      <PrototypeScreen title={current.title} image={current.image} />
      <section className="mx-auto mt-6 w-full max-w-6xl px-4 md:px-6">
        <h2 className="mb-3 text-lg font-semibold">All for Zero routes</h2>
        <p className="mb-3 text-sm text-zinc-600">
          Home zonder extra pad:{" "}
          <Link href="/allforzero" className="font-medium text-[#c1539a] underline">
            /allforzero
          </Link>
        </p>
        <div className="grid gap-2 rounded border bg-white p-4 text-sm md:grid-cols-2">
          {afzRoutes.map((route) => {
            const path = `/allforzero/${route.slug.join("/")}`.replace(/\/$/, "");
            return (
              <Link key={path || "/allforzero"} href={path || "/allforzero"} className="text-zinc-700 hover:text-zinc-950">
                {path || "/allforzero"} - {route.title}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
