import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEAM SHERIYA - Web Development, Full-Stack & Video Editing",
  description: "Professional web development, full-stack solutions, and video editing services by TEAM SHERIYA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}