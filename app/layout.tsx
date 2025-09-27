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
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
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
