import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { AnimatedText } from "./AnimatedText";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Featured Projects"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A showcase of my recent work and personal projects that demonstrate my skills and passion.
          </motion.p>

          {/* Filter pills — shared layoutId background */}
          <div className="flex justify-center space-x-4">
            {(["all", "featured"] as const).map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-4 py-2 rounded-lg font-medium flex items-center space-x-2 overflow-hidden ${
                  filter === f ? "text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: filter === f ? 1 : 1.04 }}
              >
                {filter === f && (
                  <motion.div
                    layoutId="filter-bg"
                    className="absolute inset-0 bg-blue-600 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>{f === "all" ? "All Projects" : "Featured Only"}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div className="grid md:grid-cols-2 gap-8" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.93, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: -16 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                transition={{ duration: 0.35, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image with zoom */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 overflow-hidden rounded-full">
                      {/* Shimmer badge */}
                      <div className="relative px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full overflow-hidden">
                        Featured
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                          animate={{ x: ["-120%", "200%"] }}
                          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1.5, ease: "easeInOut" }}
                        />
                      </div>
                    </div>
                  )}
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700"
                        whileHover={{ scale: 1.12, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
