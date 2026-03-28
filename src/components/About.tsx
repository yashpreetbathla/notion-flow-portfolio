import React from "react";
import { Mail, ExternalLink, MapPin, X } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, skills } from "../data/portfolioData";
import { AnimatedText } from "./AnimatedText";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedText
            text="About Me"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            Get to know more about my background, skills, and what drives my passion for development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio + contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{personalInfo.bio}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { Icon: MapPin, text: personalInfo.location, href: undefined },
                { Icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: ExternalLink, text: "LinkedIn Profile", href: personalInfo.linkedin },
                { Icon: X, text: "X Profile", href: "https://x.com/yashpreetOnX" },
              ].map(({ Icon, text, href }, i) => (
                <motion.div
                  key={text}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6, color: "#2563eb" }}
                  transition={{
                    default: { type: "spring", stiffness: 350, damping: 25 },
                    opacity: { delay: i * 0.08, duration: 0.35 },
                    x: { delay: i * 0.08, duration: 0.35 },
                  }}
                >
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {text}
                    </a>
                  ) : <span>{text}</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>

            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.1 }}
              >
                {/* Category name with animated underline */}
                <div className="relative inline-block">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {skillCategory.category}
                  </h4>
                  <motion.div
                    className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2, ease: "easeOut" }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700 cursor-default"
                      initial={{ opacity: 0, scale: 0.75, y: 8 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.14, y: -3, boxShadow: "0 4px 12px -2px rgba(37,99,235,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        default: { type: "spring", stiffness: 400, damping: 18 },
                        opacity: { delay: categoryIndex * 0.1 + skillIndex * 0.04 + 0.1, duration: 0.3 },
                        scale: { delay: categoryIndex * 0.1 + skillIndex * 0.04 + 0.1, duration: 0.3 },
                        y: { delay: categoryIndex * 0.1 + skillIndex * 0.04 + 0.1, duration: 0.3 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
