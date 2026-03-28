import React from "react";
import { Heart, Github, ExternalLink, Mail, X } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const socialLinks = [
  { Icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
  { Icon: Github, label: "GitHub", href: personalInfo.github },
  { Icon: ExternalLink, label: "LinkedIn", href: personalInfo.linkedin },
  { Icon: X, label: "X", href: "https://x.com/yashpreetOnX" },
];

const navLinks = ["Home", "About", "Experience", "Projects", "Contact"];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{personalInfo.title}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: "#2563eb" }}
                  transition={{
                    default: { type: "spring", stiffness: 400, damping: 25 },
                    opacity: { delay: i * 0.07, duration: 0.3 },
                    x: { delay: i * 0.07, duration: 0.3 },
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map(({ Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: "#2563eb" }}
                  transition={{
                    default: { type: "spring", stiffness: 400, damping: 25 },
                    opacity: { delay: i * 0.07, duration: 0.3 },
                    x: { delay: i * 0.07, duration: 0.3 },
                  }}
                >
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.span>
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 {personalInfo.name}. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
