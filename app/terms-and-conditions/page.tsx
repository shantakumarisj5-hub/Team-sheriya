import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms governing use of the Team Sheriya website.", alternates: { canonical: "/terms-and-conditions" } };
export default function TermsPage() { return <LegalPage title="Terms and Conditions" updated="2026-10-05" sections={[
  { title: "Website use", body: ["You may use this website for lawful, personal, or business-enquiry purposes. Do not interfere with its operation, attempt unauthorised access, submit harmful content, or use the site in a way that infringes another person’s rights."] },
  { title: "Project enquiries", body: ["A form submission or website discussion does not create a client relationship, binding scope, price, or delivery commitment. Project work begins only under separately agreed written terms."] },
  { title: "Intellectual property", body: ["The Team Sheriya name, site copy, design, code, and original visuals are protected by applicable intellectual-property laws. Do not reuse them without written permission. Client work and third-party materials remain subject to their respective agreements and licences."] },
  { title: "Accuracy and liability", body: ["We aim to keep website content accurate, but it is provided for general information and may change. To the extent permitted by applicable law, Team Sheriya is not liable for indirect or consequential loss arising from use of this website."] },
  { title: "Governing law", body: ["These terms are intended to be interpreted under applicable Indian law. Mandatory consumer or privacy rights in your location are not excluded."] },
]}/>; }
