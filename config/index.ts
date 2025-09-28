import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://deakinrover.com"),
  title: {
    default: "Deakin Rover Team | Lunar Exploration & Space Robotics",
    template: "%s | Deakin Rover Team"
  },
  description: "Deakin University's student-led rover team competing in the Australian Rover Challenge. Join us as we push the boundaries of space robotics and lunar exploration technology.",
  keywords: [
    "deakin rover",
    "deakin university",
    "space robotics",
    "lunar exploration",
    "australian rover challenge",
    "mars rover",
    "space technology",
    "robotics engineering",
    "space exploration",
    "rover competition",
    "lunar rover",
    "space mission",
    "robotics team",
    "engineering students",
    "space innovation",
    "autonomous systems",
    "rover design",
    "space research",
    "planetary exploration",
    "STEM education"
  ] as Array<string>,
  authors: {
    name: "Deakin Rover Team",
    url: "https://github.com/deakinrover",
  },
  creator: "Deakin Rover Team",
  publisher: "Deakin University",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://deakinrover.com",
    siteName: "Deakin Rover Team",
    title: "Deakin Rover Team | Lunar Exploration & Space Robotics",
    description: "Deakin University's student-led rover team competing in the Australian Rover Challenge. Join us as we push the boundaries of space robotics and lunar exploration technology.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deakin Rover Team - Space Robotics and Lunar Exploration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deakin Rover Team | Lunar Exploration & Space Robotics",
    description: "Deakin University's student-led rover team competing in the Australian Rover Challenge. Join us as we push the boundaries of space robotics and lunar exploration technology.",
    images: ["/og-image.jpg"],
    creator: "@deakinrover",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://deakinrover.com",
  },
  category: "Space Technology",
} as const;
