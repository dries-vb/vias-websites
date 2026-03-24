export type PrototypeRoute = {
  slug: string[];
  title: string;
  image: string;
};

export const esraRoutes: PrototypeRoute[] = [
  { slug: [], title: "ESRA home", image: "/esra/home.png" },
  { slug: ["about"], title: "About the project", image: "/esra/about.png" },
  { slug: ["about", "esra4"], title: "About offer detail ESRA4", image: "/esra/about-esra4.png" },
  { slug: ["about", "esra3"], title: "About offer detail ESRA3", image: "/esra/about-esra3.png" },
  { slug: ["dashboards"], title: "Dashboards overview", image: "/esra/dashboards.png" },
  { slug: ["dashboards", "esra-123-dashboard"], title: "Dashboard detail", image: "/esra/dashboard-detail.png" },
  { slug: ["publications"], title: "Publications overview", image: "/esra/publications.png" },
  { slug: ["publications", "esra4-pilot-report"], title: "Publication detail", image: "/esra/publication-detail.png" },
  { slug: ["news"], title: "News overview", image: "/esra/news.png" },
  { slug: ["news", "global-status-report"], title: "News detail", image: "/esra/news-detail.png" },
  { slug: ["events"], title: "Events overview", image: "/esra/events.png" },
  { slug: ["events", "esra4-global-launch"], title: "Event detail upcoming", image: "/esra/event-upcoming.png" },
  { slug: ["events", "esra-10-years-event"], title: "Event detail past", image: "/esra/event-past.png" },
  { slug: ["contact"], title: "Contact", image: "/esra/contact.png" },
  { slug: ["faq"], title: "Frequently Asked Questions", image: "/esra/faq.png" },
];

export function getEsraStaticSlugParams(): { slug: string[] }[] {
  return esraRoutes
    .filter((route) => route.slug.length > 0)
    .map((route) => ({ slug: route.slug }));
}
