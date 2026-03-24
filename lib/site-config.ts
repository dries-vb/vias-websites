export type NavItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type SiteConfig = {
  id: "allforzero" | "vias" | "esranet";
  name: string;
  navItems: NavItem[];
  brandColor: string;
  newsletter: {
    title: string;
    placeholder: string;
    buttonLabel: string;
    consentText: string;
    backgroundClassName: string;
  };
  footer: {
    brand: string;
    description: string;
    columns: FooterColumn[];
  };
};

export const allForZeroConfig: SiteConfig = {
  id: "allforzero",
  name: "All for Zero",
  brandColor: "#c1539a",
  navItems: [
    { href: "/allforzero", label: "Home" },
    { href: "/allforzero/actieplannen", label: "Actieplannen" },
    { href: "/allforzero/conferenties", label: "Conferenties" },
    { href: "/allforzero/projecten", label: "Projecten" },
    { href: "/allforzero/statusrapporten", label: "Statusrapporten" },
    { href: "/allforzero/nieuws", label: "Nieuws" },
    { href: "/allforzero/faq", label: "FAQ" },
  ],
  newsletter: {
    title: "Schrijf je in voor onze nieuwsbrief",
    placeholder: "E-mailadres",
    buttonLabel: "Schrijf in",
    consentText: "Ik ga akkoord met de regels & voorwaarden",
    backgroundClassName: "bg-[#c1539a]",
  },
  footer: {
    brand: "All for Zero",
    description: "Samen naar nul ernstige verkeersslachtoffers in Belgie.",
    columns: [
      {
        title: "Navigatie",
        links: [
          { href: "/allforzero", label: "Over All for Zero" },
          { href: "/allforzero/actieplannen", label: "Actieplannen" },
          { href: "/allforzero/conferenties", label: "Conferenties" },
          { href: "/allforzero/projecten", label: "Projecten" },
          { href: "/allforzero/statusrapporten", label: "Statusrapporten" },
          { href: "/allforzero/nieuws", label: "Nieuws" },
        ],
      },
      {
        title: "Meer info",
        links: [
          { href: "/allforzero/faq", label: "Veelgestelde vragen" },
          { href: "/allforzero/contact", label: "Contact" },
        ],
      },
    ],
  },
};

export const viasConfig: SiteConfig = {
  id: "vias",
  name: "Vias Institute",
  brandColor: "#5f8096",
  navItems: [
    { href: "/vias", label: "Home" },
    { href: "/vias/knowledge-center", label: "Kennisbank" },
    { href: "/vias/news-overview", label: "Nieuws" },
    { href: "/vias/publications-overview", label: "Publicaties" },
    { href: "/vias/events-overview", label: "Webinars & events" },
    { href: "/vias/tools-overview", label: "Tools & dashboards" },
    { href: "/vias/contact", label: "Contact" },
  ],
  newsletter: {
    title: "Schrijf je in voor onze nieuwsbrief",
    placeholder: "E-mailadres",
    buttonLabel: "Schrijf in",
    consentText: "Ik ga akkoord met de regels & voorwaarden",
    backgroundClassName: "bg-[#5f8096]",
  },
  footer: {
    brand: "Vias Institute",
    description: "Het Belgisch kenniscentrum voor verkeersveiligheid, mobiliteit en veiligheid.",
    columns: [
      {
        title: "Kennisbank",
        links: [
          { href: "/vias/news-overview", label: "Nieuws" },
          { href: "/vias/publications-overview", label: "Publicaties" },
          { href: "/vias/events-overview", label: "Webinars & events" },
          { href: "/vias/tools-overview", label: "Tools & dashboards" },
        ],
      },
      {
        title: "Over Vias",
        links: [
          { href: "/vias/contact", label: "Contacteer ons" },
        ],
      },
    ],
  },
};

export const esraConfig: SiteConfig = {
  id: "esranet",
  name: "ESRA",
  brandColor: "#6b8e23",
  navItems: [
    { href: "/esranet", label: "Home" },
    { href: "/esranet/about", label: "About the project" },
    { href: "/esranet/dashboards", label: "Dashboards" },
    { href: "/esranet/publications", label: "Publications" },
    { href: "/esranet/news", label: "News" },
    { href: "/esranet/events", label: "Events" },
    { href: "/esranet/contact", label: "Contact" },
    { href: "/esranet/faq", label: "FAQ" },
  ],
  newsletter: {
    title: "Subscribe to the ESRA newsletter",
    placeholder: "Email address",
    buttonLabel: "Subscribe",
    consentText: "I agree to the terms & conditions",
    backgroundClassName: "bg-[#6b8e23]",
  },
  footer: {
    brand: "ESRA",
    description: "The European Survey of Road users' Attitudes - a joint initiative of research centres worldwide.",
    columns: [
      {
        title: "ESRA Project",
        links: [
          { href: "/esranet/about", label: "About ESRA" },
          { href: "/esranet/about/esra4", label: "ESRA4" },
          { href: "/esranet/about/esra3", label: "ESRA3" },
          { href: "/esranet/about/esra2", label: "ESRA2" },
          { href: "/esranet/about/esra1", label: "ESRA1" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "/esranet/dashboards", label: "Dashboards" },
          { href: "/esranet/publications", label: "Publications" },
          { href: "/esranet/news", label: "News & Events" },
          { href: "/esranet/faq", label: "FAQ" },
        ],
      },
    ],
  },
};
