import type { Metadata, Viewport } from "next";
import { Bruno_Ace_SC, Montserrat } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const brunoAceSC = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bruno-ace-sc"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat"
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://deakinrover.com/#organization",
        "name": "Deakin Rover Team",
        "url": "https://deakinrover.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://deakinrover.com/deakin_rover_logo_white.svg",
          "width": 512,
          "height": 512
        },
        "description": "Deakin University's student-led rover team competing in the Australian Rover Challenge",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Geelong",
          "addressRegion": "VIC",
          "postalCode": "3220",
          "addressCountry": "AU"
        },
        "parentOrganization": {
          "@type": "EducationalOrganization",
          "name": "Deakin University",
          "url": "https://deakin.edu.au"
        },
        "sameAs": [
          "https://github.com/deakinrover",
          "https://instagram.com/deakinroverteam",
          "https://linkedin.com/company/deakin-competitive-robotics/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://deakinrover.com/#website",
        "url": "https://deakinrover.com",
        "name": "Deakin Rover Team",
        "description": "Deakin University's student-led rover team competing in the Australian Rover Challenge",
        "publisher": {
          "@id": "https://deakinrover.com/#organization"
        },
        "inLanguage": "en-AU"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://deakinrover.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          montserrat.className,
          brunoAceSC.variable,
          montserrat.variable
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
