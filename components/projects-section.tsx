"use client";

import { motion, AnimatePresence } from "framer-motion";
import { details } from "@/lib/details";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaPlay, FaStar, FaFolderOpen } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useState } from "react";
import "./orbit.css";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"featured" | "others">("featured");
  const [selectedOtherIndex, setSelectedOtherIndex] = useState(0);
  const featuredProjects = details.projects.filter((project) => project.featured);
  const otherProjects = details.projects.filter((project) => !project.featured);

  const handleTabChange = (tab: "featured" | "others") => {
    setActiveTab(tab);
    setSelectedOtherIndex(0);
  };

  // Get orbiting projects (excluding selected)
  const orbitingProjects = otherProjects.filter((_, i) => i !== selectedOtherIndex);

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-8 pb-1">
            Projects
          </h2>

          {/* Toggle Pills */}
          <div className="inline-flex p-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700">
            <button
              onClick={() => handleTabChange("featured")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "featured"
                  ? "bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaStar className={activeTab === "featured" ? "text-white" : "text-amber-400"} />
              Featured
            </button>
            <button
              onClick={() => handleTabChange("others")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "others"
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaFolderOpen className={activeTab === "others" ? "text-white" : "text-purple-400"} />
              Others
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "featured" ? (
            /* Featured - Bento Grid Layout */
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
            >
              {featuredProjects.map((project, index) => {
                const isLarge = index === 0;

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`group ${
                      isLarge
                        ? "md:col-span-3 lg:col-span-3 md:row-span-2 self-center"
                        : "md:col-span-3 lg:col-span-2"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                        isLarge ? "h-[500px]" : "h-[280px]"
                      } border-2 border-amber-500/50 hover:border-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20 group-hover:via-black/70 transition-all duration-300" />

                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="self-end">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                            <FaStar className="text-[10px]" />
                            {(project as any).tag || "Featured"}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <h3 className={`font-bold text-white group-hover:text-purple-300 transition-colors ${
                            isLarge ? "text-3xl" : "text-xl"
                          }`}>
                            {project.title}
                          </h3>

                          <p className={`text-gray-300 ${isLarge ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
                            {project.description}
                          </p>

                          <div className="flex gap-3 pt-2">
                            {project.link && (
                              <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all border border-white/10 hover:border-white/30 hover:scale-110 inline-flex items-center justify-center"
                              >
                                <HiOutlineGlobeAlt className="text-2xl" />
                              </Link>
                            )}
                            {project.github && (
                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all border border-white/10 hover:border-white/30 hover:scale-110 inline-flex items-center justify-center"
                              >
                                <FaGithub className="text-2xl" />
                              </Link>
                            )}
                            {project.demo && (
                              <Link
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3.5 bg-red-500/80 backdrop-blur-sm rounded-xl text-white hover:bg-red-500 transition-all hover:scale-110 inline-flex items-center justify-center"
                              >
                                <FaPlay className="text-2xl" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-linear-to-t from-purple-500/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Others - Planetary Orbit Layout */
            <motion.div
              key="others"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-6xl mx-auto h-[600px] md:h-[650px] flex items-center justify-center"
            >
              {/* Orbit Ring - Static - exactly matching orbit path */}
              <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-purple-500/40" />

              {/* Center Project - Big Circle */}
              <div className="relative z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`center-${selectedOtherIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 relative"
                  >
                    <Image
                      src={otherProjects[selectedOtherIndex]?.image || "/placeholder.svg"}
                      alt={otherProjects[selectedOtherIndex]?.title || "Project"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                      <div className="text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-medium text-white mb-1.5">
                          <FaFolderOpen className="text-[8px] md:text-[10px]" />
                          {(otherProjects[selectedOtherIndex] as any)?.tag || "Project"}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-tight">
                          {otherProjects[selectedOtherIndex]?.title}
                        </h3>
                        <p className="text-gray-300 text-[10px] md:text-xs line-clamp-2 mb-3">
                          {otherProjects[selectedOtherIndex]?.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-2.5 justify-center">
                          {otherProjects[selectedOtherIndex]?.link && (
                            <Link
                              href={otherProjects[selectedOtherIndex].link!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110"
                            >
                              <HiOutlineGlobeAlt className="text-lg" />
                            </Link>
                          )}
                          {otherProjects[selectedOtherIndex]?.github && (
                            <Link
                              href={otherProjects[selectedOtherIndex].github!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110"
                            >
                              <FaGithub className="text-lg" />
                            </Link>
                          )}
                          {otherProjects[selectedOtherIndex]?.demo && (
                            <Link
                              href={otherProjects[selectedOtherIndex].demo!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-red-500/80 backdrop-blur-sm rounded-full text-white hover:bg-red-500 transition-all hover:scale-110"
                            >
                              <FaPlay className="text-base" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Glow behind center */}
                <div className="absolute inset-0 -z-10 rounded-full bg-purple-500/30 blur-2xl" />
              </div>

              {/* Orbiting Planets - Container rotates, planets counter-rotate */}
              <div className="absolute w-[400px] h-[400px] animate-orbit">
                {orbitingProjects.map((project, orbitIndex) => {
                  const total = orbitingProjects.length;
                  const angleDeg = (orbitIndex * 360) / total;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  // Position on circle: radius = 200px (half of 400px container)
                  const x = Math.cos(angleRad) * 200;
                  const y = Math.sin(angleRad) * 200;

                  return (
                    <div
                      key={`orbit-${orbitIndex}`}
                      className="absolute cursor-pointer group"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() => {
                        const idx = otherProjects.findIndex(p => p === project);
                        if (idx !== -1) setSelectedOtherIndex(idx);
                      }}
                    >
                      <div className="animate-counter-orbit">
                        <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-purple-400/60 hover:border-purple-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/60 relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                        </div>

                        {/* Title - directly below planet, minimal gap */}
                        <div className="text-center mt-1 pointer-events-none">
                          <span className="bg-gray-900/90 text-white text-[9px] px-1.5 py-0.5 rounded-full border border-purple-500/30 whitespace-nowrap">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
