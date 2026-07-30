import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "DuckDuckBot",
          "Applebot",
        ],
        allow: "/",
      },
      {
        userAgent: [
          "Google-Extended",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "Baiduspider",
          "Baiduspider-render",
          "Bytespider",
          "Sogou Spider",
          "Sogou web spider",
          "360Spider",
          "360Spider-Image",
          "YisouSpider",
          "YodaoBot",
          "ToutiaoSpider",
          "Facebot",
          "Twitterbot",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "Diffbot",
          "ImagesiftBot",
          "KimiBot",
          "MoonshotBot",
          "QwenBot",
          "ZhipuBot",
        ],
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(siteConfig.url).host,
  };
}
