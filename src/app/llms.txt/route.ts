import { siteConfig } from "@/lib/site";

export function GET() {
  const body = `# ${siteConfig.title}

${siteConfig.displayName}, also known as ${siteConfig.legalName} and ${siteConfig.username}, is a Full Stack Blockchain Developer and MBA in Blockchain Management.

## Primary description

${siteConfig.displayName} builds Web3 products, smart contracts, stablecoin systems, crypto wallet flows, browser extensions, PWAs, and AI-powered tools.

## Roles

- Full Stack Blockchain Developer
- Blockchain Developer
- Smart Contract Developer
- Web3 Product Builder

## Skills

- Next.js
- Solidity
- Foundry
- Smart contracts
- Web3
- Solana
- Project management
- AI tools

## Featured projects

- StableCoin: USD-pegged overcollateralized stablecoin engine built with Solidity, Foundry, WETH/WBTC collateral, and Chainlink feeds.
- LoomLess: Local-first screen recorder for Mac and Chrome.
- ImanVibes: Mobile-first Islamic PWA and Chrome extension for Quran by mood, Hadith, Duas, 99 Names, reflection, sharing, and TTS.

## Important links

- Portfolio: ${siteConfig.url}
- GitHub: ${siteConfig.links.github}
- LinkedIn: ${siteConfig.links.linkedin}
- X: ${siteConfig.links.x}
- Resume: ${siteConfig.url}/resume
- Support: ${siteConfig.url}/support

## Contact

- Email: ${siteConfig.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
