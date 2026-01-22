"use client";

import { motion } from "framer-motion";
import { details } from "@/lib/details";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCertificate,
  FaUserGraduate,
} from "react-icons/fa";

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-2">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {details.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group">
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/30 transition-all duration-500">
                {/* University Logo */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                    <Image
                      src={edu.image || "/placeholder.svg"}
                      alt={edu.university}
                      width={96}
                      height={96}
                      className="relative z-10 rounded-full border-2 border-white/20 group-hover:border-green-400/50 transition-all"
                    />
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-lg font-bold text-white text-center mb-2">
                  {edu.degree}
                </h3>

                {/* University Name */}
                <p className="text-green-400 font-medium text-sm text-center mb-2">
                  {edu.university}
                </p>

                {/* Timeline */}
                <div className="flex items-center justify-center text-gray-400 text-xs mb-4">
                  <FaCalendarAlt className="mr-1.5" />
                  {edu.timeline}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm text-center leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Action Links - Icon buttons */}
                <div className="flex justify-center gap-3">
                  <a
                    href={edu.universityLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-medium rounded-lg hover:scale-105 transition-transform">
                    <FaExternalLinkAlt className="text-xs" />
                    University
                  </a>

                  {edu.degreeLink && (
                    <a
                      href={edu.degreeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-medium rounded-lg hover:bg-white/20 hover:scale-105 transition-all">
                      <FaUserGraduate className="text-xs" />
                      Degree
                    </a>
                  )}

                  {(edu as any).pgDiplomaLink && (
                    <a
                      href={(edu as any).pgDiplomaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-medium rounded-lg hover:bg-white/20 hover:scale-105 transition-all">
                      <FaCertificate className="text-xs" />
                      PG Diploma
                    </a>
                  )}

                  {edu.degree.includes("MBA") && !edu.degreeLink && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-500 text-xs font-medium rounded-lg cursor-not-allowed">
                      <FaUserGraduate className="text-xs" />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
