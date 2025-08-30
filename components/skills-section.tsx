"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { details } from "@/lib/details";
import Image from "next/image";
import { useState } from "react";

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineering to technical leadership across the web3 stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {details.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="cursor-pointer">
              <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-4 text-center space-y-3">
                  <div className="relative mx-auto w-12 h-12 mb-2">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-600 rounded-lg transition-all duration-300 ${
                        hoveredSkill === index
                          ? "blur-md opacity-75 scale-110"
                          : "blur-sm opacity-50"
                      }`}
                    />
                    <Image
                      src={skill.image || "/placeholder.svg"}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="relative z-10 rounded-lg shadow-lg"
                    />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-white leading-snug">
                    {skill.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredSkill === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}>
                    <Badge
                      variant="outline"
                      className="mt-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors cursor-pointer"
                      onClick={() => window.open(skill.url, "_blank")}>
                      Learn More
                    </Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
