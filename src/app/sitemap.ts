import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-26T00:00:00.000Z");

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/og-image.png"), absoluteUrl("/profile.png")],
    },
    {
      url: absoluteUrl("/resume"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/publications/research"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/publications/ebook"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/support"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
