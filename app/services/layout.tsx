import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, full-stack product builds, UI/UX design, and video editing from Team Sheriya.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
