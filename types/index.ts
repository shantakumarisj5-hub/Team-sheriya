export interface Enquiry {
  id: string;
  service: string;
  name: string;
  email: string;
  budget: string;
  message: string;
  status: "new" | "contacted" | "discussion" | "quotation" | "approved" | "in_progress" | "completed";
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  bio: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}