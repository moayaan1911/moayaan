"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaRocket,
  FaCode,
  FaGraduationCap,
  FaCalendarAlt,
  FaCoffee,
} from "react-icons/fa";
import { details } from "@/lib/details";
import Image from "next/image";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function HeroSection() {

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
      Telegram: "border-[#0088CC]",
      Palestine: "border-[#00A650]",
    };
    return borderColors[name] || "border-white";
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
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 border-2 ${getBorderColor(
                    social.name,
                  )} hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-500 rounded-full p-2.5 bg-transparent cursor-pointer flex items-center justify-center`}>
                  <Image
                    src={social.image}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center gap-4">
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
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-9 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 flex flex-col items-center gap-1.5">
                <span className="flex items-center text-2xl">
                  <FaCoffee className="mr-3 text-2xl" />
                  Support My Work
                </span>
                <span className="text-sm font-normal text-amber-200">
                  Buy Me a Coffee ☕
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
