"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FaRocket,
  FaCode,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaCoffee,
  FaUsers,
} from "react-icons/fa";
import { SiHashnode, SiUpwork } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { details } from "@/lib/details";
import Image from "next/image";

const socialIcons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Hashnode: SiHashnode,
  Upwork: SiUpwork,
  Twitter: RiTwitterXFill,
  Peerlist: FaUsers,
  BuyMeACoffee: FaCoffee,
  Telegram: FaTelegram,
  Email: FaEnvelope,
  Donate: () => <span className="text-xl">🇵🇸</span>,
};

export function HeroSection() {
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
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
              {details.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-sm md:text-lg px-3 md:px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400">
                <FaCode className="mr-2" />
                Full Stack Blockchain Developer
              </Badge>
              <Badge className="text-sm md:text-lg px-3 md:px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-400">
                <FaRocket className="mr-2" />
                Crypto and DeFi Investor
              </Badge>
              <Badge className="text-sm md:text-lg px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white border-blue-400">
                <FaGraduationCap className="mr-2" />
                MBA in Blockchain Management
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
            {details.socials.map((social, index) => {
              const IconComponent =
                socialIcons[social.name as keyof typeof socialIcons];

              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 10,
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
                  }}
                  whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 border-gray-600 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-500 bg-transparent backdrop-blur-sm"
                    onClick={() => window.open(social.link, "_blank")}>
                    <IconComponent className="text-xl hover:text-white transition-colors duration-300" />
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div> */}
    </section>
  );
}
