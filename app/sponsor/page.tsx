import type { Metadata } from "next";

import { SponsorHero } from "@/components/sponsor/sponsor-hero";
import { SponsorshipTiers } from "@/components/sponsor/sponsorship-tiers";
import { SponsorImpact } from "@/components/sponsor/sponsor-impact";
import { SponsorContactForm } from "@/components/sponsor/sponsor-contact-form";

export const metadata: Metadata = {
  title: "Become a Sponsor | Deakin Rover - Partner with Us",
  description: "Partner with Deakin Rover for the 2026 Australian Rover Challenge. Support space robotics education and innovation with our sponsorship opportunities.",
  keywords: ["sponsorship", "deakin rover", "space robotics", "australian rover challenge", "partnership", "education"],
};

export default function SponsorPage() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <SponsorHero />

      {/* Why Sponsor Us & Impact */}
      <SponsorImpact />

      {/* Sponsorship Tiers */}
      <SponsorshipTiers />

      {/* Budget Breakdown */}
      {/* <BudgetBreakdown /> */}

      {/* Contact Form */}
      <SponsorContactForm />
    </main>
  );
}