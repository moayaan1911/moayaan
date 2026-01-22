"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { details } from "@/lib/details";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 relative">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 max-w-7xl mx-auto items-stretch">
          {/* Left Column - Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-6 italic">
              Let's Connect
            </h3>

            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl flex-1 hover:border-pink-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=ayaangames@gmail.com&su=Hello%20Ayaan!",
                        "_blank",
                      )
                    }>
                    <FaEnvelope className="mr-3 text-xl" />
                    Drop a Mail
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 bg-transparent"
                    onClick={() => {
                      window.open("/AyaanResume.pdf", "_blank");
                    }}>
                    <FaFileAlt className="mr-3 text-xl" />
                    View Resume
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center pt-4 border-t border-gray-700">
                  <p className="text-2xl text-gray-300 mb-4">
                    {details.connect.thankYouMessage}
                  </p>

                  <div className="flex justify-center">
                    <img
                      src={details.connect.celebrationGif || "/placeholder.svg"}
                      alt="Celebration"
                      className="w-64 h-64 rounded-lg shadow-lg"
                    />
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 italic">
              About Me
            </h3>

            <Card className="bg-white/5 border-amber-500/30 backdrop-blur-xl shadow-2xl flex-1 hover:border-amber-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Assalamualaikum guys! 🙌 This is Mohammad Ayaan Siddiqui (
                    <span className="text-amber-400 font-semibold">
                      ♦moayaan.eth♦
                    </span>
                    ). I'm a{" "}
                    <span className="text-purple-400 font-semibold">
                      Full Stack Blockchain Developer
                    </span>
                    ,{" "}
                    <span className="text-green-400 font-semibold">
                      Crypto Investor
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-400 font-semibold">
                      MBA in Blockchain Management
                    </span>{" "}
                    with{" "}
                    <span className="text-pink-400 font-semibold">
                      2 years of experience
                    </span>{" "}
                    rocking the Web3 world! 🚀
                  </p>

                  <p className="text-gray-400 text-sm mb-3">
                    I've worn many hats:
                  </p>

                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-lg">🇭🇰</span>
                      <span>Research Intern at a Hong Kong-based firm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg">🇳🇱</span>
                      <span>Founding Engineer at a Netherlands-based firm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg">🇸🇬</span>
                      <span>
                        Full Stack Intern at a Singapore-based crypto hardware
                        wallet firm
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg">🇺🇸</span>
                      <span>
                        Blockchain Developer at a US-based Bitcoin DeFi project
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg">🇬🇧</span>
                      <span>
                        PG Diploma in Blockchain Management from Cambridge
                        International Qualifications (CIQ)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg">🇮🇹</span>
                      <span>
                        MBA in Blockchain Management from University of Studies
                        Guglielmo Marconi, Italy
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
