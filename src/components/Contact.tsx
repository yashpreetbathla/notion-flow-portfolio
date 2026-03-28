import React from "react";
import { Mail, MapPin, Send, Github, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { AnimatedText } from "./AnimatedText";

const contactItems = [
  { Icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { Icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
  { Icon: ExternalLink, label: "LinkedIn", value: "Connect with me", href: personalInfo.linkedin },
  { Icon: X, label: "X", value: "Follow me", href: "https://x.com/yashpreetOnX" },
  { Icon: Github, label: "GitHub", value: "View my work", href: personalInfo.github },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Get In Touch"
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
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Let's Connect
          </motion.h3>

          <div className="space-y-4">
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 350, damping: 25 } }}
                className="flex items-center space-x-4"
              >
                {/* Animated icon box */}
                <motion.div
                  className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg shrink-0"
                  whileHover={{
                    scale: 1.18,
                    rotate: 8,
                    backgroundColor: "rgba(37,99,235,0.15)",
                    boxShadow: "0 0 0 6px rgba(37,99,235,0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                >
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>

                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{label}</p>
                  {href ? (
                    <motion.a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ color: "#2563eb" }}
                    >
                      {value}
                    </motion.a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA pulse */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 32px -8px rgba(37,99,235,0.55)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ["-120%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2, ease: "easeInOut" }}
              />
              <Send className="w-4 h-4 relative" />
              <span className="relative">Send me an email</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
