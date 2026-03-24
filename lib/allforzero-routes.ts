export type PrototypeRoute = {
  slug: string[];
  title: string;
  image: string;
};

export const afzRoutes: PrototypeRoute[] = [
  { slug: [], title: "All for Zero home", image: "/allforzero/home.png" },
  { slug: ["faq"], title: "Veelgestelde vragen", image: "/allforzero/faq.png" },
  { slug: ["conferenties"], title: "Conferenties overzicht", image: "/allforzero/conferenties.png" },
  { slug: ["conferenties", "all-for-zero-conferentie-2026"], title: "Conferentie detail", image: "/allforzero/conferentie-detail.png" },
  { slug: ["projecten"], title: "Projecten overzicht", image: "/allforzero/projecten-overzicht.png" },
  { slug: ["projecten", "lokale-projecten-2026"], title: "Lokale projecten 2026", image: "/allforzero/lokale-projecten.png" },
  { slug: ["projecten", "lokale-projecten-2026", "smart-mobility-gent"], title: "Project detail", image: "/allforzero/project-detail.png" },
  { slug: ["actieplannen"], title: "Actieplannen overzicht", image: "/allforzero/actieplannen.png" },
  { slug: ["actieplannen", "actieplan-vlaanderen"], title: "Actieplan detail", image: "/allforzero/actieplan-detail.png" },
  { slug: ["nieuws"], title: "Nieuws overzicht", image: "/allforzero/nieuws-overzicht.png" },
  { slug: ["nieuws", "all-for-zero-conferentie-2026-registratie"], title: "Nieuws detail", image: "/allforzero/nieuws-detail.png" },
  { slug: ["statusrapporten"], title: "Statusrapporten overzicht", image: "/allforzero/statusrapporten.png" },
  { slug: ["statusrapporten", "federaal-plan-2021-2025"], title: "Statusrapport detail", image: "/allforzero/statusrapport-detail.png" },
];

export function getAfzRoute(slug: string[]): PrototypeRoute | undefined {
  return afzRoutes.find((route) => route.slug.join("/") === slug.join("/"));
}

/** Paths for `output: 'export'` / Cloudflare Pages — excludes empty home (`/allforzero` uses `page.tsx`). */
export function getAfzStaticSlugParams(): { slug: string[] }[] {
  return afzRoutes
    .filter((route) => route.slug.length > 0)
    .map((route) => ({ slug: route.slug }));
}
