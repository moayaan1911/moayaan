import { siteConfig } from "@/lib/site";

export function GET() {
  const body = `# ${siteConfig.title}

${siteConfig.displayName}, also known as ${siteConfig.legalName} and ${siteConfig.username}, is a Published Researcher and Full Stack Blockchain Developer with an MBA in Blockchain Management.

## Primary description

${siteConfig.displayName} builds Web3 products, smart contracts, stablecoin systems, crypto wallet flows, browser extensions, PWAs, and AI-powered tools. He is actively pursuing research in Agentic Infrastructure on Blockchain, Shariah-Compliant DeFi, and Autonomous Agent Economies.

## Roles

- Published Researcher
- Full Stack Blockchain Developer
- Smart Contract Developer
- Web3 Product Builder
- MBA in Blockchain Management

## Research Areas

- Agentic Infrastructure on Blockchain
- Shariah-Compliant DeFi
- Autonomous Agent Economies

## Publications

### Research Paper
- Title: A Cross-Chain Architecture for Coupling ERC-8004 Agent Identity with x402 Micro-Settlement Across Solana and Ethereum
- Type: Preprint (Zenodo)
- DOI: 10.5281/zenodo.21394562
- Link: https://zenodo.org/records/21394562
- Published: July 2026
- Keywords: agentic infrastructure, x402, ERC-8004, autonomous agents, cross-chain, Solana, Ethereum, smart contracts, AI agents

### Ebook
- Title: Solidity Smart Contracts: From Zero to Production
- Type: Book (Leanpub)
- Link: https://leanpub.com/solidity-ebook
- Format: EBook
- Keywords: Solidity, smart contracts, blockchain, Web3, Ethereum, Foundry, testing, deployment, DeFi, security

## Skills

- Next.js
- Solidity
- Foundry
- Smart contracts
- Web3
- Solana
- AI tools
- Context Engineering
- Project management

## Featured projects

- StableCoin: USD-pegged overcollateralized stablecoin engine built with Solidity, Foundry, WETH/WBTC collateral, and Chainlink feeds.
- LoomLess: Local-first screen recorder for Mac and Chrome.
- ImanVibes: Mobile-first Islamic PWA and Chrome extension for Quran by mood, Hadith, Duas, 99 Names, reflection, sharing, and TTS.

## Important links

- Portfolio: ${siteConfig.url}
- Research Paper: https://zenodo.org/records/21394562
- Ebook: https://leanpub.com/solidity-ebook
- GitHub: ${siteConfig.links.github}
- LinkedIn: ${siteConfig.links.linkedin}
- X: ${siteConfig.links.x}
- Resume: ${siteConfig.url}/resume
- Publications: ${siteConfig.url}/publications/research, ${siteConfig.url}/publications/ebook
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
