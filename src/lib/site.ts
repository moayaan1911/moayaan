const fallbackSiteUrl = "https://moayaan.com";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;
const normalizedSiteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const siteConfig = {
  url: normalizedSiteUrl.replace(/\/$/, ""),
  name: "moayaan.eth",
  title: "moayaan.eth | Mohammad Ayaan",
  legalName: "MD Ayaan Siddiqui",
  displayName: "Mohammad Ayaan",
  username: "moayaan.eth",
  email: "moayaan.eth@gmail.com",
  description:
    "Mohammad Ayaan is a Full Stack Blockchain Developer and MBA in Blockchain Management building Web3 products, smart contracts, stablecoin systems, crypto wallet flows, and AI-powered tools.",
  shortDescription:
    "Full Stack Blockchain Developer and MBA in Blockchain Management.",
  roles: [
    "Full Stack Blockchain Developer",
    "Blockchain Developer",
    "Smart Contract Developer",
    "Web3 Product Builder",
  ],
  keywords: [
    "Mohammad Ayaan",
    "MD Ayaan Siddiqui",
    "moayaan.eth",
    "Full Stack Blockchain Developer",
    "Blockchain Developer",
    "Smart Contract Developer",
    "Solidity Developer",
    "Foundry Developer",
    "Next.js Developer",
    "Web3 Developer India",
    "Remote Blockchain Developer",
    "Stablecoin Developer",
    "Bitcoin DeFi Developer",
    "Crypto Wallet Developer",
    "Solana Developer",
    "Blockchain Product Management",
    "MBA in Blockchain Management",
    "AI tools developer",
  ],
  links: {
    email: "mailto:moayaan.eth@gmail.com",
    github: "https://github.com/moayaan1911",
    linkedin: "https://www.linkedin.com/in/ayaaneth",
    x: "https://x.com/moayaan1911",
    telegram: "https://t.me/moayaan1911",
    hashnode: "https://blog.moayaan.com",
    ens: "https://app.ens.domains/moayaan.eth",
    reddit: "https://www.reddit.com/user/moayaan1911/",
    cal: "https://cal.com/moayaan1911/meet",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
