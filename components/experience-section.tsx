"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { details } from "@/lib/details";
import Image from "next/image";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future of blockchain technology across innovative
            startups
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400 rounded-full opacity-30" />

          <div className="space-y-6">
            {details.experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-4" : "pl-4"}`}>
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-teal-400/50 transition-all duration-300 backdrop-blur-sm pt-4 pb-4 px-2">
                    <CardHeader className="flex flex-row items-center space-y-0 px-2 pt-0 pb-0">
                      <div className="relative w-10 h-10 mr-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-600 rounded-lg blur-sm opacity-50" />
                        <Image
                          src={experience.image || "/placeholder.svg"}
                          alt={experience.company}
                          fill
                          sizes="40px"
                          className="relative z-10 rounded-lg shadow-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base font-bold text-white mb-0">
                          {experience.designation}
                        </CardTitle>
                        <p className="text-teal-400 font-semibold text-xs">
                          {experience.company}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="px-2 pt-0 pb-0">
                      <div className="flex items-center text-gray-400 text-xs mb-0.5">
                        <FaCalendarAlt className="mr-1" />
                        {experience.timeline}
                      </div>

                      <p className="text-gray-300 leading-tight text-xs mb-0.5">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-0.5 mb-0.5 mt-2">
                        {experience.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-teal-400/50 text-teal-400 hover:bg-teal-400/20 transition-colors text-xs px-1 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {experience.link && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-400 text-teal-200 bg-transparent text-xs px-4 py-2 h-8 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/40 hover:text-black hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500"
                          onClick={() =>
                            window.open(experience.link!, "_blank")
                          }>
                          <FaExternalLinkAlt className="mr-0.5" />
                          Visit Company
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full border-4 border-gray-900 shadow-lg">
                    <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
