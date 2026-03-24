import Link from "next/link";
import { notFound } from "next/navigation";
import { PrototypeScreen } from "@/components/prototype-screen";
import { getViasRoute, getViasStaticSlugParams, viasRoutes } from "@/lib/vias-routes";

type Params = { slug: string[] };

export function generateStaticParams() {
  return getViasStaticSlugParams();
}

export const dynamicParams = false;

export default async function ViasNestedPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const slug = resolved.slug ?? [];
  const current = getViasRoute(slug);

  if (!current) {
    notFound();
  }

  return (
    <div className="pb-10">
      <PrototypeScreen title={current.title} image={current.image} />
      <section className="mx-auto mt-6 w-full max-w-6xl px-4 md:px-6">
        <h2 className="mb-3 text-lg font-semibold">Vias Institute routes</h2>
        <p className="mb-3 text-sm text-zinc-600">
          Home:{" "}
          <Link href="/vias" className="font-medium text-[#5f8096] underline">
            /vias
          </Link>
        </p>
        <div className="grid gap-2 rounded border bg-white p-4 text-sm md:grid-cols-2">
          {viasRoutes.map((route) => {
            const path = `/vias/${route.slug.join("/")}`.replace(/\/$/, "");
            return (
              <Link key={path || "/vias"} href={path || "/vias"} className="text-zinc-700 hover:text-zinc-950">
                {path || "/vias"} - {route.title}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
