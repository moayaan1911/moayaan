"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaRocket,
  FaCode,
  FaGraduationCap,
  FaCalendarAlt,
  FaGift,
  FaComments,
  FaTimes,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { SiSolana, SiBitcoin, SiEthereum } from "react-icons/si";
import { details } from "@/lib/details";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

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

export function HeroSection() {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meet" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const getBorderColor = (name: string) => {
    const borderColors: { [key: string]: string } = {
      LinkedIn: "border-[#0A66C2]",
      GitHub: "border-white",
      Hashnode: "border-[#2962FF]",
      Upwork: "border-white",
      Twitter: "border-white",
      Peerlist: "border-[#00AA45]",
      ENS: "border-[#5298FF]",
      BuyMeACoffee: "border-[#FFDD00]",
      Telegram: "border-[#0088CC]",
      Donate: "border-[#00A650]",
    };
    return borderColors[name] || "border-white";
  };

  const handleSocialClick = (social: { name: string; link: string }) => {
    if (social.name === "BuyMeACoffee") {
      setShowDonateModal(true);
    } else {
      window.open(social.link, "_blank");
    }
  };

  const copyToClipboard = (address: string, key: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(key);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Greeting with animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {details.salam}
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mt-4">
              Mohammad Ayaan Siddiqui
            </h3>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-600 rounded-full animate-pulse blur-xl opacity-50" />
            <Image
              src={details.profile || "/placeholder.svg"}
              alt="Mohammad Ayaan Siddiqui - Blockchain Developer"
              width={256}
              height={256}
              className="relative z-10 rounded-full border-4 border-amber-400 shadow-2xl hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative p-[3px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#f59e0b_0deg,#fbbf24_90deg,transparent_180deg,transparent_360deg)] animate-spin [animation-duration:2s]" />
                <div className="relative flex items-center gap-2 px-4 md:px-6 py-2.5 bg-gray-950 text-amber-300 rounded-full text-sm md:text-lg font-medium">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    <FaCode className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,1)]" />
                  </motion.span>
                  Full Stack Blockchain Developer
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative p-[3px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#a855f7_0deg,#c084fc_90deg,transparent_180deg,transparent_360deg)] animate-spin [animation-duration:2s]" />
                <div className="relative flex items-center gap-2 px-4 md:px-6 py-2.5 bg-gray-950 text-purple-300 rounded-full text-sm md:text-lg font-medium">
                  <motion.span
                    animate={{ y: [0, -3, 0], rotate: [0, 15, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    <FaRocket className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,1)]" />
                  </motion.span>
                  Crypto and DeFi Investor
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative p-[3px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#06b6d4_0deg,#22d3ee_90deg,transparent_180deg,transparent_360deg)] animate-spin [animation-duration:2s]" />
                <div className="relative flex items-center gap-2 px-4 md:px-6 py-2.5 bg-gray-950 text-cyan-300 rounded-full text-sm md:text-lg font-medium">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    <FaGraduationCap className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,1)]" />
                  </motion.span>
                  MBA in Blockchain Management
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-4 max-w-3xl mx-auto">
            {details.socials.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}>
                <button
                  className={`w-12 h-12 border-2 ${getBorderColor(
                    social.name,
                  )} hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-500 rounded-full p-2.5 bg-transparent cursor-pointer`}
                  onClick={() => handleSocialClick(social)}>
                  <Image
                    src={social.image}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-9 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex flex-col items-center gap-1.5"
              data-cal-namespace="meet"
              data-cal-link="moayaan1911/meet"
              data-cal-config='{"layout":"month_view"}'>
              <span className="flex items-center text-2xl">
                <FaCalendarAlt className="mr-3 text-2xl" />
                Get in Touch
              </span>
              <span className="text-sm font-normal text-purple-200">
                Freelancing | Job Offer | Crypto & DeFi Guide
              </span>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white w-20 py-9 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 rounded-xl flex items-center justify-center"
              onClick={() => (window.location.href = "/game")}>
              <FaGift className="text-9xl" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-20 py-9 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 rounded-xl flex items-center justify-center"
              onClick={() => (window.location.href = "/chat")}>
              <FaComments className="text-9xl" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowDonateModal(false)}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 p-6 md:p-8 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Support My Work
              </h2>
              <button
                onClick={() => setShowDonateModal(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <FaTimes className="text-2xl" />
              </button>
            </div>

            {/* QR Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Top Row: Solana & UPI */}
              {(["solana", "upi", "bitcoin", "ethereum"] as const).map(
                (key) => {
                  const item = donationAddresses[key];
                  const Icon = item.icon;
                  return (
                    <div
                      key={key}
                      className="bg-black/40 rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all">
                      {/* Label */}
                      <div className="flex items-center justify-center gap-2 mb-3">
                        {Icon && (
                          <Icon
                            className={`text-2xl bg-gradient-to-r ${item.color} bg-clip-text`}
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
                          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                            UPI
                          </span>
                        )}
                        <span className="text-lg font-semibold text-white">
                          {key !== "upi" && item.label}
                        </span>
                      </div>

                      {/* QR Code */}
                      <div className="flex justify-center mb-3">
                        <div className="bg-white p-3 rounded-xl">
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
                            <FaCheck className="text-green-400" />
                          ) : (
                            <FaCopy />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                },
              )}
            </div>

            {/* Footer */}
            <p className="text-center text-gray-400 text-sm mt-6">
              Thank you for your support! 🙏
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
