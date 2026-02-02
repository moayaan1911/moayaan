"use client";

import { motion } from "framer-motion";
import { details } from "@/lib/details";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

export function ExperienceEducationSection() {
  return (
    <section
      id="experience"
      className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Professional Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-teal-400 mb-8 italic">
              Professional Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 w-0.5 h-[calc(100%-16px)] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-50" />

              <div className="space-y-6">
                {details.experiences.map((experience, index) => (
                  <motion.div
                    key={experience.company}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className="relative z-10 mt-1.5 flex-shrink-0">
                      <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-bold text-teal-400">
                          {experience.designation}
                        </h4>
                        {experience.link && (
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-500/20 text-teal-400 text-sm rounded hover:bg-teal-500/30 transition-colors flex-shrink-0">
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            Website
                          </a>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">
                        {experience.company}
                      </p>
                      <p className="text-gray-500 text-xs mb-2">
                        {experience.timeline}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-8 italic">
              Certifications
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 w-0.5 h-[calc(100%-16px)] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-50" />

              <div className="space-y-6">
                {details.certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className="relative z-10 mt-1.5 flex-shrink-0">
                      <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <a
                          href={cert.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/20 text-purple-400 text-sm rounded hover:bg-purple-500/30 transition-colors flex-shrink-0">
                          <PiCertificate className="w-4 h-4" />
                          Certificate
                        </a>
                      </div>
                      <p className="text-gray-400 text-sm">{cert.provider}</p>
                      <p className="text-gray-500 text-xs">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
