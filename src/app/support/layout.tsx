import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support my work | Mohammad Ayaan",
  description:
    "Support Mohammad Ayaan's work or donate directly to Palestine through verified aid organizations.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support my work | Mohammad Ayaan",
    description:
      "Support Mohammad Ayaan's work or donate directly to Palestine through verified aid organizations.",
    url: absoluteUrl("/support"),
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Ayaan, Full Stack Blockchain Developer and MBA in Blockchain Management",
      },
    ],
    type: "website",
  },
};

export default function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
