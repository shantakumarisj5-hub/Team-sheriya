"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Video, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Business websites, portfolios, e-commerce, landing pages",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Web applications, dashboards, SaaS platforms, APIs",
    features: ["Database Design", "API Development", "Authentication", "Cloud Deployment"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Reels, YouTube videos, promotional content",
    features: ["Color Grading", "Motion Graphics", "Sound Design", "Quick Turnaround"],
    color: "from-orange-500 to-red-500",
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="transition-all duration-300"
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}