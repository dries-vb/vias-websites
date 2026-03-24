export type PrototypeRoute = {
  slug: string[];
  title: string;
  image: string;
};

export const viasRoutes: PrototypeRoute[] = [
  { slug: [], title: "Vias Institute home", image: "/vias-institute/home.png" },
  { slug: ["knowledge-center"], title: "Kennisbank overzicht", image: "/vias-institute/kennisbank.png" },
  { slug: ["news-overview"], title: "Nieuws overzicht", image: "/vias-institute/nieuws-overzicht.png" },
  { slug: ["news-detail", "jongeren-campagne"], title: "Nieuws detail", image: "/vias-institute/nieuws-detail.png" },
  { slug: ["events-overview"], title: "Webinars & Events overzicht", image: "/vias-institute/events-overzicht.png" },
  { slug: ["event-detail", "webinar-de-toekomst"], title: "Webinar detail", image: "/vias-institute/events-detail.png" },
  { slug: ["publications-overview"], title: "Publicaties overzicht", image: "/vias-institute/publicaties-overzicht.png" },
  { slug: ["publication-detail", "verkeersongevallen-2024"], title: "Publicatie detail", image: "/vias-institute/publicaties-detail.png" },
  { slug: ["tools-overview"], title: "Tools overzicht", image: "/vias-institute/tools-overzicht.png" },
  { slug: ["tool-detail", "verkeersveiligheidsbarometer"], title: "Tool detail", image: "/vias-institute/tools-detail.png" },
  { slug: ["contact"], title: "Contact", image: "/vias-institute/contact.png" },
];

export function getViasRoute(slug: string[]): PrototypeRoute | undefined {
  return viasRoutes.find((route) => route.slug.join("/") === slug.join("/"));
}

export function getViasStaticSlugParams(): { slug: string[] }[] {
  return viasRoutes
    .filter((route) => route.slug.length > 0)
    .map((route) => ({ slug: route.slug }));
}
