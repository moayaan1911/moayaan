import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const publications: Record<
  string,
  {
    title: string;
    description: string;
    cover: string;
    pdf: string;
    linkLabel: string;
    linkUrl: string;
  }
> = {
  research: {
    title: "Research Paper | Mohammad Ayaan",
    description:
      "A Cross-Chain Architecture for Coupling ERC-8004 Agent Identity with x402 Micro-Settlement Across Solana and Ethereum — a blockchain research paper on autonomous agent infrastructure.",
    cover: "/coverResearch.png",
    pdf: "/x402_ERC8004_Paper_SHORT.pdf",
    linkLabel: "View on Zenodo",
    linkUrl: "https://zenodo.org/records/21394562",
  },
  ebook: {
    title: "Ebook | Mohammad Ayaan",
    description:
      "Solidity Smart Contracts: From Zero to Production — a Foundry-first guide to writing, testing, and deploying Solidity smart contracts.",
    cover: "/coverEbook.png",
    pdf: "/SolidityEbook.pdf",
    linkLabel: "View on Leanpub",
    linkUrl: "https://leanpub.com/solidity-ebook",
  },
};

function getJsonLd(slug: string, pub: (typeof publications)[string]) {
  if (slug === "research") {
    return {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: "A Cross-Chain Architecture for Coupling ERC-8004 Agent Identity with x402 Micro-Settlement Across Solana and Ethereum",
      description: pub.description,
      url: "https://zenodo.org/records/21394562",
      doi: "10.5281/zenodo.21394562",
      author: {
        "@type": "Person",
        name: "MD Ayaan Siddiqui",
        url: "https://moayaan.com",
      },
      datePublished: "2026-07-16",
      publisher: {
        "@type": "Organization",
        name: "Zenodo",
        url: "https://zenodo.org",
      },
      keywords:
        "blockchain, agentic infrastructure, x402, ERC-8004, autonomous agents, cross-chain, Solana, Ethereum, smart contracts, AI agents, decentralized identity, micro-settlement",
      isPartOf: {
        "@type": "CreativeWorkSeries",
        name: "Preprint",
        url: "https://zenodo.org",
      },
    };
  }

  if (slug === "ebook") {
    return {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "Solidity Smart Contracts: From Zero to Production",
      description: pub.description,
      url: "https://leanpub.com/solidity-ebook",
      author: {
        "@type": "Person",
        name: "MD Ayaan Siddiqui",
        url: "https://moayaan.com",
      },
      datePublished: "2026-01-01",
      publisher: {
        "@type": "Organization",
        name: "Leanpub",
        url: "https://leanpub.com",
      },
      inLanguage: "en",
      bookFormat: "EBook",
      keywords:
        "Solidity, smart contracts, blockchain, Web3, Ethereum, Foundry, testing, deployment, DeFi, security, gas optimization",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pub = publications[slug];
  if (!pub) return {};

  const base: Metadata = {
    title: pub.title,
    description: pub.description,
    alternates: {
      canonical: `/publications/${slug}`,
    },
    openGraph: {
      title: pub.title,
      description: pub.description,
      url: absoluteUrl(`/publications/${slug}`),
      siteName: siteConfig.name,
      images: [
        {
          url: pub.cover,
          width: 1200,
          height: 630,
          alt: pub.title,
        },
      ],
      type: "article",
    },
  };

  if (slug === "research") {
    base.other = {
      "citation_author": "MD Ayaan Siddiqui",
      "citation_title": "A Cross-Chain Architecture for Coupling ERC-8004 Agent Identity with x402 Micro-Settlement Across Solana and Ethereum",
      "citation_doi": "10.5281/zenodo.21394562",
      "citation_publication_date": "2026-07-16",
      "citation_journal_title": "Zenodo Preprint",
      "citation_pdf_url": absoluteUrl("/x402_ERC8004_Paper_SHORT.pdf"),
    };
  }

  return base;
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const pub = publications[slug];

  if (!pub) {
    notFound();
  }

  const jsonLd = getJsonLd(slug, pub);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <main className="resume-page">
        <div className="resume-shell">
          <header className="resume-header">
            <Link className="resume-back" href="/">
              <span className="arr">←</span> BACK TO PORTFOLIO
            </Link>
            <a
              className="resume-action"
              href={pub.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.linkLabel}
            </a>
          </header>

          <section className="resume-frame-wrap" aria-label="PDF viewer">
            <iframe
              className="resume-frame"
              src={pub.pdf}
              title={pub.title}
            />
          </section>
        </div>
      </main>
    </>
  );
}
