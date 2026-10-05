import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore representative web, product, and creative work by Team Sheriya.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">Team Sheriya projects</h1>
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
