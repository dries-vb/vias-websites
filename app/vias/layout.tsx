import { SiteLayout } from "@/components/site-layout";
import { viasConfig } from "@/lib/site-config";

export default function ViasLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout config={viasConfig}>{children}</SiteLayout>;
}
