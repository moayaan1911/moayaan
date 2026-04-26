import { absoluteUrl, siteConfig } from "@/lib/site";

const sameAs = [
  siteConfig.links.github,
  siteConfig.links.linkedin,
  siteConfig.links.x,
  siteConfig.links.hashnode,
  siteConfig.links.ens,
  siteConfig.links.reddit,
];

const projects = [
  {
    name: "StableCoin",
    url: "https://github.com/moayaan1911/stablecoin",
    description:
      "A USD-pegged, overcollateralized stablecoin engine built with Solidity, Foundry, WETH/WBTC collateral, and Chainlink feeds.",
    languages: ["Solidity", "Foundry", "TypeScript"],
  },
  {
    name: "LoomLess",
    url: "https://loomless.fun",
    codeRepository: "https://github.com/moayaan1911/loomless",
    description:
      "A local-first screen recorder for Mac and Chrome, built for private, lightweight, distraction-free capture.",
    languages: ["Next.js", "TypeScript", "Chrome Extension"],
  },
  {
    name: "ImanVibes",
    url: "https://imanvibes.vercel.app/",
    codeRepository: "https://github.com/moayaan1911/imanvibes",
    description:
      "A calm, mobile-first Islamic PWA for Quran by mood, Hadith, Duas, 99 Names, daily reflection, sharing, and TTS.",
    languages: ["Next.js", "TypeScript", "PWA"],
  },
];

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: siteConfig.name,
      alternateName: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: {
        "@id": absoluteUrl("/#person"),
      },
      about: {
        "@id": absoluteUrl("/#person"),
      },
    },
    {
      "@type": "ProfilePage",
      "@id": absoluteUrl("/#profilepage"),
      url: absoluteUrl("/"),
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "en",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/profile.png"),
        width: 499,
        height: 499,
      },
      mainEntity: {
        "@id": absoluteUrl("/#person"),
      },
    },
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: siteConfig.legalName,
      alternateName: [siteConfig.displayName, siteConfig.username, "moayaan1911"],
      url: absoluteUrl("/"),
      image: absoluteUrl("/profile.png"),
      email: siteConfig.email,
      jobTitle: siteConfig.roles,
      description: siteConfig.description,
      sameAs,
      knowsAbout: [
        "Blockchain development",
        "Smart contracts",
        "Solidity",
        "Foundry",
        "Next.js",
        "Web3 product management",
        "Stablecoin systems",
        "Bitcoin DeFi",
        "Crypto wallets",
        "Solana",
        "AI tools",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universita degli Studi Guglielmo Marconi",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "MBA in Blockchain Management",
        credentialCategory: "Master of Business Administration",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Universita degli Studi Guglielmo Marconi",
        },
      },
    },
    {
      "@type": "ItemList",
      "@id": absoluteUrl("/#featured-projects"),
      name: "Featured blockchain and Web3 projects by Mohammad Ayaan",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.name,
          url: project.url,
          codeRepository: project.codeRepository || project.url,
          description: project.description,
          programmingLanguage: project.languages,
          author: {
            "@id": absoluteUrl("/#person"),
          },
        },
      })),
    },
  ],
};

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
