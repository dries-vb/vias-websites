import { SiteLayout } from "@/components/site-layout";
import { esraConfig } from "@/lib/site-config";

export default function EsraLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout config={esraConfig}>{children}</SiteLayout>;
}
