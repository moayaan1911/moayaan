"use client";

import { motion } from "framer-motion";
import { details } from "@/lib/details";
import Image from "next/image";

export function SkillsSection() {
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
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineering to technical leadership across the web3 stack.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 max-w-5xl mx-auto">
          {details.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center w-32">
              <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
                <Image
                  src={skill.image || "/placeholder.svg"}
                  alt={skill.name}
                  width={96}
                  height={96}
                  className="rounded-lg shadow-lg object-contain"
                />
              </div>

              <h3 className="text-sm font-bold text-white text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
