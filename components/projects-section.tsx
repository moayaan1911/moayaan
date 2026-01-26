"use client";

import { motion } from "framer-motion";
import { details } from "@/lib/details";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaStar } from "react-icons/fa";
import { useState } from "react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"featured" | "others">("featured");
  const featuredProjects = details.projects.filter((project) => project.featured);
  const otherProjects = details.projects.filter((project) => !project.featured);
  const activeProjects = activeTab === "featured" ? featuredProjects : otherProjects;

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-8">
            Projects
          </h2>

          {/* Toggle Pills */}
          <div className="inline-flex p-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700">
            <button
              onClick={() => setActiveTab("featured")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "featured"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaStar className={activeTab === "featured" ? "text-white" : "text-amber-400"} />
              Featured
            </button>
            <button
              onClick={() => setActiveTab("others")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "others"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Others
            </button>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {activeProjects.map((project, index) => {
            // First item in featured gets special large treatment
            const isLarge = activeTab === "featured" && index === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group ${isLarge ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 ${
                    isLarge ? "h-[500px]" : "h-[280px]"
                  }`}
                >
                  {/* Background Image */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/70 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top - Featured Badge */}
                    {project.featured && (
                      <div className="self-end">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          <FaStar className="text-[10px]" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Bottom - Info */}
                    <div className="space-y-3">
                      <h3 className={`font-bold text-white group-hover:text-purple-300 transition-colors ${
                        isLarge ? "text-3xl" : "text-xl"
                      }`}>
                        {project.title}
                      </h3>

                      <p className={`text-gray-300 ${isLarge ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all border border-white/10 hover:border-white/30 hover:scale-110 inline-flex items-center justify-center"
                          >
                            <FaExternalLinkAlt className="text-sm" />
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all border border-white/10 hover:border-white/30 hover:scale-110 inline-flex items-center justify-center"
                          >
                            <FaGithub className="text-sm" />
                          </Link>
                        )}
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-red-500/80 backdrop-blur-sm rounded-xl text-white hover:bg-red-500 transition-all hover:scale-110 inline-flex items-center justify-center"
                          >
                            <FaPlay className="text-sm" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
