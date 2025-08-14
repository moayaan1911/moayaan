"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { details } from "@/lib/details"
import Image from "next/image"
import { FaGraduationCap, FaExternalLinkAlt, FaDownload, FaCalendarAlt } from "react-icons/fa"

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and academic achievements in blockchain technology and computer science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {details.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-green-400/50 transition-all duration-500 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse" />
                    <Image
                      src={edu.image || "/placeholder.svg"}
                      alt={edu.university}
                      width={96}
                      height={96}
                      className="relative z-10 rounded-full shadow-2xl border-2 border-green-400/50"
                    />
                  </div>

                  <CardTitle className="text-2xl font-bold text-white mb-2">{edu.degree}</CardTitle>

                  <p className="text-green-400 font-semibold text-lg">{edu.university}</p>

                  <div className="flex items-center justify-center text-gray-400 text-sm mt-2">
                    <FaCalendarAlt className="mr-2" />
                    {edu.timeline}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-center">{edu.description}</p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white cursor-pointer"
                      onClick={() => window.open(edu.universityLink, "_blank")}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Visit University
                    </Button>

                    {edu.degreeLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-amber-400 text-amber-400 hover:bg-amber-400/20 bg-transparent cursor-pointer"
                        onClick={() => window.open(edu.degreeLink!, "_blank")}
                      >
                        <FaDownload className="mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </div>

                  {/* Animated graduation cap */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{
                        rotateZ: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
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
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Professional Certifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {details.certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-700 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative mx-auto w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 rounded-lg blur-sm opacity-50" />
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.provider}
                        width={64}
                        height={64}
                        className="relative z-10 rounded-lg shadow-lg"
                      />
                    </div>

                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>

                    <p className="text-amber-400 font-semibold">{cert.provider}</p>

                    <p className="text-gray-400 text-sm">{cert.date}</p>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-400 text-amber-400 hover:bg-amber-400/20 bg-transparent cursor-pointer"
                      onClick={() => window.open(cert.certificateLink, "_blank")}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
