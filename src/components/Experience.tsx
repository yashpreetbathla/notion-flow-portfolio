import React, { useRef } from "react";
import { Calendar } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { AnimatedText } from "./AnimatedText";

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.3"],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Work Experience"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My professional journey and the companies I've had the privilege to work with.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Self-drawing vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 origin-top"
              style={{ scaleY: lineScaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-8 pl-12 md:pl-20">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.012, transition: { duration: 0.2 } }}
                className="relative bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-[2.9rem] md:-left-[4.6rem] top-7 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-gray-50 dark:ring-gray-800"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 18, delay: index * 0.08 + 0.2 }}
                />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <motion.p
                      className="text-lg text-blue-600 dark:text-blue-400 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.25 }}
                    >
                      {experience.company}
                    </motion.p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {experience.description.map((desc, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.15 + idx * 0.06, duration: 0.35 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                        animate={{ scale: [1, 1.35, 1] }}
                        transition={{ repeat: Infinity, duration: 2.8, delay: idx * 0.5, ease: "easeInOut" }}
                      />
                      {desc}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600 cursor-default"
                      initial={{ opacity: 0, scale: 0.75 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{
                        default: { type: "spring", stiffness: 400, damping: 18 },
                        opacity: { delay: index * 0.08 + techIdx * 0.04 + 0.3, duration: 0.25 },
                        scale: { delay: index * 0.08 + techIdx * 0.04 + 0.3, duration: 0.25 },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
