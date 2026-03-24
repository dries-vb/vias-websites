import Link from "next/link";
import { notFound } from "next/navigation";
import { PrototypeScreen } from "@/components/prototype-screen";
import { esraRoutes, getEsraStaticSlugParams } from "@/lib/esra-routes";

type Params = { slug: string[] };

export function generateStaticParams() {
  return getEsraStaticSlugParams();
}

export const dynamicParams = false;

export default async function EsraNestedPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const slug = resolved.slug ?? [];
  const current = esraRoutes.find((route) => route.slug.join("/") === slug.join("/"));

  if (!current) {
    notFound();
  }

  return (
    <div className="pb-10">
      <PrototypeScreen title={current.title} image={current.image} />
      <section className="mx-auto mt-6 w-full max-w-6xl px-4 md:px-6">
        <h2 className="mb-3 text-lg font-semibold">ESRA routes</h2>
        <p className="mb-3 text-sm text-zinc-600">
          Home:{" "}
          <Link href="/esranet" className="font-medium text-[#6b8e23] underline">
            /esranet
          </Link>
        </p>
        <div className="grid gap-2 rounded border bg-white p-4 text-sm md:grid-cols-2">
          {esraRoutes.map((route) => {
            const path = `/esranet/${route.slug.join("/")}`.replace(/\/$/, "");
            return (
              <Link key={path || "/esranet"} href={path || "/esranet"} className="text-zinc-700 hover:text-zinc-950">
                {path || "/esranet"} - {route.title}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
