import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    "Team Sheriya designs and builds premium websites, full-stack applications, UI/UX systems, and video content for ambitious businesses.",

  keywords: [
    "web development",
    "full-stack development",
    "video editing",
    "UI UX design",
    "Team Sheriya",
    "web development India",
    "Next.js development",
    "React development",
  ],

  verification: {
    google: "PNQdCiXjhTILSdz3rvHsduHgZb6v_1KtsLaI7BwNL1A",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Team Sheriya",
    title: "Team Sheriya | Websites, products, and content built to grow",
    description:
      "Premium web development, full-stack applications, UI/UX design, and video content by Team Sheriya.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Team Sheriya | Web Development & Creative Services",
    description:
      "Premium websites, full-stack applications, UI/UX systems, and video content for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
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
      <body className={`${syne.variable} ${plusJakarta.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
