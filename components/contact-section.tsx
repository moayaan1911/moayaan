"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { details } from "@/lib/details";
import { FaEnvelope, FaDownload } from "react-icons/fa";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {details.connect.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  onClick={() =>
                    window.open(`mailto:${details.connect.email}`, "_blank")
                  }>
                  <FaEnvelope className="mr-3 text-xl" />
                  Get in Touch
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 bg-transparent"
                  onClick={() => {
                    window.open("/AyaanResume.pdf", "_blank");
                  }}>
                  <FaDownload className="mr-3 text-xl" />
                  View Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center space-y-6">
                {/* <div className="flex items-center justify-center gap-4 text-gray-300">
                  <FaEnvelope className="text-purple-400" />
                  <span className="text-lg">{details.connect.email}</span>
                </div>

                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <FaRocket className="text-blue-400" />
                  <span className="text-lg">{details.connect.location}</span>
                </div> */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-8 border-t border-gray-700">
                  <p className="text-2xl text-center text-gray-300 mb-4">
                    {details.connect.thankYouMessage}
                  </p>

                  <div className="flex justify-center">
                    <img
                      src={details.connect.celebrationGif || "/placeholder.svg"}
                      alt="Celebration"
                      className="w-32 h-32 rounded-lg shadow-lg"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
