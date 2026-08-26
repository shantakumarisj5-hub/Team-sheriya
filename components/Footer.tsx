"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TEAM SHERIYA
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Building digital experiences that matter. We specialize in web development, full-stack solutions, and creative video editing.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-gray-800">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition">Services</button></li>
              <li><button onClick={() => scrollToSection("#projects")} className="hover:text-white transition">Projects</button></li>
              <li><button onClick={() => scrollToSection("#team")} className="hover:text-white transition">Team</button></li>
              <li><button onClick={() => scrollToSection("#contact")} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>Full-Stack Development</li>
              <li>Video Editing</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 TEAM SHERIYA. Made with <Heart className="inline w-4 h-4 text-red-500" /> by Team Sheriya.
          </p>
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            className="border-gray-700 hover:bg-gray-800"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}