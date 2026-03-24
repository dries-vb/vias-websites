import Link from "next/link";
import { notFound } from "next/navigation";
import { PrototypeScreen } from "@/components/prototype-screen";
import { afzRoutes } from "@/lib/allforzero-routes";

type Params = { slug: string[] };

export default async function AllForZeroNestedPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const slug = resolved.slug;
  const current = afzRoutes.find((route) => route.slug.join("/") === slug.join("/"));

  if (!current) {
    notFound();
  }

  return (
    <div className="pb-10">
      <PrototypeScreen title={current.title} image={current.image} />
      <section className="mx-auto mt-6 w-full max-w-6xl px-4 md:px-6">
        <h2 className="mb-3 text-lg font-semibold">All for Zero routes</h2>
        <div className="grid gap-2 rounded border bg-white p-4 text-sm md:grid-cols-2">
          {afzRoutes.map((route) => {
            const path = `/allforzero/${route.slug.join("/")}`;
            return (
              <Link key={path} href={path} className="text-zinc-700 hover:text-zinc-950">
                {path} - {route.title}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
