"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { details } from "@/lib/details";
import Image from "next/image";
import {
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCertificate,
  FaUserGraduate,
} from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and academic achievements in blockchain
            technology and computer science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {details.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}>
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-green-400/50 transition-all duration-500 backdrop-blur-sm p-3">
                <CardHeader className="text-center pb-0 px-1.5 pt-1.5">
                  <div className="relative mx-auto w-14 h-14 mb-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse" />
                    <Image
                      src={edu.image || "/placeholder.svg"}
                      alt={edu.university}
                      width={56}
                      height={56}
                      className="relative z-10 rounded-full shadow-2xl border-2 border-green-400/50"
                    />
                  </div>

                  <CardTitle className="text-sm font-bold text-white mb-0.5">
                    {edu.degree}
                  </CardTitle>

                  <p className="text-green-400 font-semibold text-xs">
                    {edu.university}
                  </p>

                  <div className="flex items-center justify-center text-gray-400 text-xs mt-0.5">
                    <FaCalendarAlt className="mr-1.5 text-sm" />
                    {edu.timeline}
                  </div>

                  <p className="text-gray-300 leading-tight text-xs text-center mt-1">
                    {edu.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-2 px-3 pb-3 pt-0">
                  <div className="flex flex-col sm:flex-row gap-1 justify-center">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white cursor-neon transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/40"
                      onClick={() => window.open(edu.universityLink, "_blank")}>
                      <FaExternalLinkAlt className="mr-2 text-sm" />
                      Visit University
                    </Button>

                    {edu.degreeLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-fuchsia-400 text-fuchsia-200 bg-transparent cursor-neon transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/40 hover:text-black hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
                        onClick={() => window.open(edu.degreeLink!, "_blank")}>
                        <FaUserGraduate className="mr-2 text-sm" />
                        View Degree
                      </Button>
                    )}

                    {(edu as any).pgDiplomaLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-fuchsia-400 text-fuchsia-200 bg-transparent cursor-neon transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/40 hover:text-black hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
                        onClick={() =>
                          window.open((edu as any).pgDiplomaLink!, "_blank")
                        }>
                        <FaCertificate className="mr-2 text-sm" />
                        View PG Diploma
                      </Button>
                    )}

                    {edu.degree.includes("MBA") && (
                      <div className="relative group">
                        <Button
                          size="sm"
                          variant="outline"
                          disabled
                          className="border-gray-600 text-gray-500 bg-transparent cursor-not-allowed opacity-50">
                          <FaUserGraduate className="mr-2 text-sm" />
                          View Degree
                        </Button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                          Ongoing - Degree not received yet
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Animated graduation cap */}
                  <div className="flex justify-center mt-1">
                    <motion.div
                      animate={{
                        rotateZ: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}>
                      <FaGraduationCap className="text-4xl text-green-400 opacity-50" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Professional Certifications
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {details.certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}>
                <Card className="h-56 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-2 text-center space-y-3 h-full flex flex-col justify-center">
                    <div className="relative mx-auto w-14 h-14">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-lg blur-sm opacity-50" />
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.provider}
                        width={56}
                        height={56}
                        className="relative z-10 rounded-lg shadow-lg"
                      />
                    </div>

                    <h4 className="text-xs font-bold text-white">
                      {cert.title}
                    </h4>

                    <p className="text-cyan-400 font-medium text-xs">
                      {cert.provider}
                    </p>

                    <p className="text-gray-400 text-xs">{cert.date}</p>

                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-400 text-cyan-200 bg-transparent cursor-neon text-xs px-4 py-2 h-8 w-auto max-w-36 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 hover:text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500"
                        onClick={() =>
                          window.open(cert.certificateLink, "_blank")
                        }>
                        <PiCertificate className="mr-1.5 text-sm" />
                        View Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
