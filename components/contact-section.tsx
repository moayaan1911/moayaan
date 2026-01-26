"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { details } from "@/lib/details";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFileAlt, FaGift, FaComments, FaGlobe, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export function ContactSection() {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const currentContent = details.aboutMe[selectedLang as keyof typeof details.aboutMe];
  const currentLanguage = details.languages.find(lang => lang.code === selectedLang);

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
                  className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ayaangames@gmail.com&su=Hello%20Ayaan!"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50">
                        <FaEnvelope className="mr-3 text-xl" />
                        Drop a Mail
                      </Button>
                    </Link>

                    <Link
                      href="/AyaanResume.pdf"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 bg-transparent">
                        <FaFileAlt className="mr-3 text-xl" />
                        View Resume
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/game">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-amber-500 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 bg-transparent">
                        <FaGift className="mr-3 text-xl" />
                        Play a Game
                      </Button>
                    </Link>

                    <Link href="/chat">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 bg-transparent">
                        <FaComments className="mr-3 text-xl" />
                        Chat with AI-Ayaan
                      </Button>
                    </Link>
                  </div>
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
                    <Image
                      src={details.connect.celebrationGif || "/placeholder.svg"}
                      alt="Celebration"
                      width={256}
                      height={256}
                      className="w-64 h-64 rounded-lg shadow-lg object-cover"
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
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-400 italic">
                About Me
              </h3>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-amber-500/30 rounded-lg hover:bg-white/10 hover:border-amber-400/50 transition-all text-amber-400 text-sm cursor-pointer">
                  <FaGlobe className="text-base" />
                  <span>{currentLanguage?.flag} {currentLanguage?.name}</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${showLangDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showLangDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-amber-500/30 rounded-lg shadow-2xl shadow-amber-500/10 z-50 max-h-64 overflow-y-auto">
                    {details.languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang.code);
                          setShowLangDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-amber-500/20 transition-colors flex items-center gap-2 cursor-pointer ${
                          selectedLang === lang.code ? 'bg-amber-500/20 text-amber-400' : 'text-gray-300'
                        }`}>
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Card className="bg-white/5 border-amber-500/30 backdrop-blur-xl shadow-2xl flex-1 hover:border-amber-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div
                  key={selectedLang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-base leading-relaxed mb-4" dir={selectedLang === 'ur' || selectedLang === 'ar' ? 'rtl' : 'ltr'}>
                    {currentContent.intro}
                  </p>

                  <p className="text-gray-400 text-sm mb-3" dir={selectedLang === 'ur' || selectedLang === 'ar' ? 'rtl' : 'ltr'}>
                    {currentContent.hatsList}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-300" dir={selectedLang === 'ur' || selectedLang === 'ar' ? 'rtl' : 'ltr'}>
                    {currentContent.roles.map((role: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-lg">
                          {index === 0 ? '🇭🇰' : index === 1 ? '🇳🇱' : index === 2 ? '🇸🇬' : index === 3 ? '🇺🇸' : index === 4 ? '🇬🇧' : '🇮🇹'}
                        </span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-300 text-sm leading-relaxed mt-4" dir={selectedLang === 'ur' || selectedLang === 'ar' ? 'rtl' : 'ltr'}>
                    {currentContent.closing}
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
