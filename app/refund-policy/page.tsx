import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Refund Policy", description: "Team Sheriya's policy for refunds on agreed services.", alternates: { canonical: "/refund-policy" } };
export default function RefundPolicy() { return <LegalPage title="Refund Policy" updated="2026-10-05" sections={[
  { title: "Project services", body: ["Team Sheriya provides custom services. Fees, deliverables, milestones, cancellations, and any refund terms are set out in the written proposal or agreement for each project."] },
  { title: "How to request help", body: ["If you have a payment or service concern, email contact@teamsheriya.com with your project name, invoice reference, and issue. We will review the applicable agreement and respond."] },
  { title: "No general website purchases", body: ["This website does not sell a standardised downloadable product or subscription. A website enquiry is not a purchase."] },
]}/>; }
