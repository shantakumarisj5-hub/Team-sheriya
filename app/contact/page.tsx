import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a website, product, UI/UX, or content project with Team Sheriya.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">Contact Team Sheriya</h1>
      <Navbar />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
