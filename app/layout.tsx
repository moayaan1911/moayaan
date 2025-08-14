import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "♦Mohammad Ayaan♦",
  description:
    "Full Stack Blockchain Developer, Crypto Investor, and MBA in Blockchain Management specializing in Web3, DeFi, and decentralized applications.",
  keywords:
    "blockchain developer, crypto investor, web3, defi, ethereum, solidity, next.js, react",
  authors: [{ name: "Mohammad Ayaan Siddiqui" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
