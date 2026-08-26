import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://team-sheriya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Team Sheriya | Web Development, Full-Stack Solutions & Video Editing",
    template: "%s | Team Sheriya",
  },

  description:
    "Team Sheriya builds fast, accessible websites, full-stack web applications, and high-impact video content for growing businesses.",

  keywords: [
    "web development",
    "full-stack development",
    "video editing",
    "UI UX design",
    "Team Sheriya",
    "web development India",
  ],

  verification: {
    google: "PNQdCiXjhTILSdz3rvHsduHgZb6v_1KtsLaI7BwNL1A",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Team Sheriya",
    title: "Team Sheriya | Digital products that move businesses forward",
    description:
      "Web development, full-stack applications, UI/UX, and video editing by Team Sheriya.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Team Sheriya | Web Development & Creative Services",
    description:
      "Web development, full-stack applications, UI/UX, and video editing by Team Sheriya.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Team Sheriya",
    url: siteUrl,
    email: "contact@teamsheriya.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: "IN",
    sameAs: [],
    makesOffer: [
      "Web Development",
      "Full-Stack Development",
      "Video Editing",
      "UI/UX Design",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}