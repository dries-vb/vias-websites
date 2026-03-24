import { SiteLayout } from "@/components/site-layout";
import { allForZeroConfig } from "@/lib/site-config";

export default function AllForZeroLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout config={allForZeroConfig}>{children}</SiteLayout>;
}
