import TeamSection from "@/components/TeamSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}