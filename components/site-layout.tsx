import Link from "next/link";
import type { SiteConfig } from "@/lib/site-config";

export function SiteLayout({
  config,
  children,
}: {
  config: SiteConfig;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="text-sm font-semibold">
            VIAS Websites
          </Link>
          <span className="text-sm font-semibold" style={{ color: config.brandColor }}>
            {config.name}
          </span>
        </div>
        <nav className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-4 pb-3 text-sm md:px-6">
          {config.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-zinc-700 hover:text-zinc-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
