"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { details } from "@/lib/details"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt, FaPlay, FaStar } from "react-icons/fa"
export function ProjectsSection() {

  const featuredProjects = details.projects.filter((project) => project.featured)
  const otherProjects = details.projects.filter((project) => !project.featured)

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateX: 5 }}
      className="group"
    >
      <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-purple-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden relative">
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <FaStar className="mr-1" />
              Featured
            </Badge>
          </div>
        )}

        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </CardTitle>
          <p className="text-gray-400 leading-relaxed">{project.description}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-blue-400/50 text-blue-400 hover:bg-blue-400/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 relative z-10">
            {project.link && (
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white relative z-20 cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </Button>
            )}
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent relative z-20 cursor-pointer"
                onClick={() => window.open(project.github, "_blank")}
              >
                <FaGithub className="mr-2" />
                Code
              </Button>
            )}
            {project.demo && (
              <Button
                size="sm"
                variant="outline"
                className="border-amber-400 text-amber-400 hover:bg-amber-400/20 bg-transparent relative z-20 cursor-pointer"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <FaPlay className="mr-2" />
                Demo
              </Button>
            )}
          </div>
        </CardContent>

        <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative blockchain solutions and decentralized applications that push the boundaries of Web3
          </p>
        </motion.div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-800/50 border border-gray-700">
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white cursor-pointer"
            >
              <FaStar className="mr-2" />
              Featured ({featuredProjects.length})
            </TabsTrigger>
            <TabsTrigger
              value="others"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white cursor-pointer"
            >
              Others ({otherProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="others" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
