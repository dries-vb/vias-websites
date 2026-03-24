import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">VIAS Websites</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Prototype hub for all four websites. `All for Zero` is connected to uploaded screens.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link className="rounded-lg border bg-white p-5 hover:border-zinc-400" href="/allforzero">
          <h2 className="text-lg font-semibold">All for Zero</h2>
          <p className="mt-1 text-sm text-zinc-600">Implemented from uploaded screens + Figma Make route structure.</p>
        </Link>
        <Link className="rounded-lg border bg-white p-5 hover:border-zinc-400" href="/vias">
          <h2 className="text-lg font-semibold">Vias Institute</h2>
          <p className="mt-1 text-sm text-zinc-600">Implemented from uploaded screens + Figma Make route structure.</p>
        </Link>
        <Link className="rounded-lg border bg-white p-5 hover:border-zinc-400" href="/esranet">
          <h2 className="text-lg font-semibold">ESRA</h2>
          <p className="mt-1 text-sm text-zinc-600">Implemented from uploaded screens + Figma Make route structure.</p>
        </Link>
        <a className="rounded-lg border bg-white p-5 hover:border-zinc-400" href="https://design.vias.v-b.site" target="_blank" rel="noreferrer">
          <h2 className="text-lg font-semibold">Design overview</h2>
          <p className="mt-1 text-sm text-zinc-600">Original design entry page.</p>
        </a>
      </div>
    </main>
  );
}
