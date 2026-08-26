"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Tarunkumar S",
    role: "Founder & Full-Stack Developer",
    skills: ["Full Stack", "Backend", "Automation", "Project Management"],
    bio: "Passionate about building scalable web applications and leading teams to success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Shantakumari S J",
    role: "Co-Founder & UI/UX Designer",
    skills: ["UI/UX", "Frontend", "Design", "Client Relations"],
    bio: "Creative designer with expertise in crafting beautiful and user-friendly interfaces.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-medium">Meet Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Meet Our Founders
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            The minds behind TEAM SHERIYA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="transition-all duration-300"
            >
              <Card className="text-center hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="pt-6 -mt-16 relative">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-white dark:border-gray-900 shadow-xl">
                    <AvatarFallback className="text-4xl">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <Github size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <Linkedin size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <Mail size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}