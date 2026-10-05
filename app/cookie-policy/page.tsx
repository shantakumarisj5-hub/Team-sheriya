import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Cookie Policy", description: "How Team Sheriya uses browser storage and cookies.", alternates: { canonical: "/cookie-policy" } };
export default function CookiePolicy() { return <LegalPage title="Cookie Policy" updated="2026-10-05" sections={[
  { title: "What we use", body: ["The site uses essential browser storage to remember your cookie choice. This is not used for advertising or cross-site profiling."] },
  { title: "Optional services", body: ["If analytics, advertising, video, maps, or other third-party embeds are added later, they may place their own cookies or collect data. We will update this policy and request consent where required before enabling non-essential technologies."] },
  { title: "Manage your choice", body: ["You can clear site data in your browser settings to remove the saved cookie choice. Blocking essential storage may affect parts of the site."] },
]}/>; }
