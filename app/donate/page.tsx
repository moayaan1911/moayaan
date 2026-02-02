"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaCheck, FaHeart } from "react-icons/fa";
import { SiSolana, SiBitcoin, SiEthereum } from "react-icons/si";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";
import Link from "next/link";
import { GlobalEthBackground } from "@/components/global-eth-background";
import { details } from "@/lib/details";

const donationAddresses = {
  solana: {
    address: "4TX8VBDNSerHeThJFa52TSQ38hpXmK6PFD5BpPPgp8Xj",
    label: "Solana",
    icon: SiSolana,
    color: "from-purple-500 to-green-400",
    qrValue: "solana:4TX8VBDNSerHeThJFa52TSQ38hpXmK6PFD5BpPPgp8Xj",
  },
  upi: {
    address: "moayaan.eth@axl",
    label: "UPI",
    icon: null,
    color: "from-orange-500 to-green-500",
    qrValue: "upi://pay?pa=moayaan.eth@axl",
  },
  bitcoin: {
    address: "bc1q26pywz5lfeype9dmc605epc57ehwcxqmvfrevw",
    label: "Bitcoin",
    icon: SiBitcoin,
    color: "from-orange-400 to-yellow-500",
    qrValue: "bitcoin:bc1q26pywz5lfeype9dmc605epc57ehwcxqmvfrevw",
  },
  ethereum: {
    address: "0x898238Db447f7ADd2a213223C6bF41f0C71C4C4f",
    label: "Ethereum",
    icon: SiEthereum,
    color: "from-blue-400 to-purple-500",
    qrValue: "ethereum:0x898238Db447f7ADd2a213223C6bF41f0C71C4C4f",
  },
};

export default function DonatePage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const copyToClipboard = (address: string, key: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(key);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <GlobalEthBackground />

      <div className="relative z-10 pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Palestine Donation Section - Compact Glass */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-24 h-12 relative rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src="https://flagcdn.com/w320/ps.png"
                    alt="Palestine Flag"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white flex items-center gap-2">
                    <FaHeart className="text-red-500 text-sm" />
                    Support Palestine
                  </h2>
                  <p className="text-gray-400 text-xs">
                    Help the people of Gaza
                  </p>
                </div>
              </div>
              <Link
                href={details.donation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
                Donate 🇵🇸
              </Link>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Support My Work
            </h1>
            <p className="text-gray-400 text-sm">
              Your support helps me continue creating amazing projects
            </p>
          </motion.div>

          {/* Donation Grid - 2x2 Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 mb-6">
            {(["solana", "upi", "bitcoin", "ethereum"] as const).map((key) => {
              const item = donationAddresses[key];
              const Icon = item.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all">
                  {/* Label */}
                  <div className="flex items-center justify-center gap-1.5 mb-3">
                    {Icon && (
                      <Icon
                        className="text-xl"
                        style={{
                          color:
                            key === "bitcoin"
                              ? "#F7931A"
                              : key === "ethereum"
                                ? "#627EEA"
                                : key === "solana"
                                  ? "#9945FF"
                                  : undefined,
                        }}
                      />
                    )}
                    {key === "upi" && (
                      <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                        UPI
                      </span>
                    )}
                    {key !== "upi" && (
                      <span className="text-base font-semibold text-white">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center mb-3">
                    <div className="bg-white p-2 rounded-lg shadow-lg">
                      <QRCodeSVG
                        value={item.qrValue}
                        size={120}
                        level="M"
                        includeMargin={false}
                      />
                    </div>
                  </div>

                  {/* Address with Copy */}
                  <div className="flex items-center gap-2 bg-black/40 rounded-lg p-2">
                    <code className="text-xs text-gray-300 flex-1 truncate">
                      {item.address}
                    </code>
                    <button
                      onClick={() => copyToClipboard(item.address, key)}
                      className="text-purple-400 hover:text-purple-300 transition-colors p-1.5 hover:bg-white/10 rounded">
                      {copiedAddress === key ? (
                        <FaCheck className="text-green-400 text-sm" />
                      ) : (
                        <FaCopy className="text-sm" />
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              Thank you for your support! 🙏
            </p>
            <Link
              href="/"
              className="inline-block text-purple-400 hover:text-purple-300 transition-colors text-sm">
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
