import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Team Sheriya collects, uses, and protects personal information.", alternates: { canonical: "/privacy-policy" } };
export default function PrivacyPolicy() { return <LegalPage title="Privacy Policy" updated="2026-10-05" sections={[
  { title: "What we collect", body: ["When you submit a project enquiry, we collect the information you enter: your name, work email, company or brand, selected service, project type, budget range, timeline, and project message. We may also receive basic technical request data necessary to operate and secure the site."] },
  { title: "Why we use it", body: ["We use enquiry information to reply to your request, assess project fit, provide services you ask for, maintain business records, and protect the site from misuse. We do not sell personal information."] },
  { title: "Where it is stored and shared", body: ["Enquiries are stored in our configured Supabase database provider. We share information only with service providers needed to operate the website or deliver requested services, or where law requires it."] },
  { title: "Retention and your choices", body: ["We retain enquiry information only for as long as reasonably needed for the purpose described above, legal obligations, or dispute resolution. You may request access, correction, or deletion by emailing contact@teamsheriya.com, subject to applicable law."] },
  { title: "Children and international visitors", body: ["This website is not directed to children. If you are under the age at which you can provide valid consent in your location, do not submit personal data. By using the site from outside India, you understand information may be processed where our providers operate."] },
]}/>; }
