import TeamSection from "@/components/TeamSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the product, development, and design team behind Team Sheriya.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">Team Sheriya team</h1>
      <Navbar />
      <div className="pt-16">
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}
