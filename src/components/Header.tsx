import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import YPBDark from "../assets/YPB-Dark.png";
import YPBLight from "../assets/YPB-Light.png";

const navItems = [
  { icon: Home, label: "Home", href: "#home", id: "home" },
  { icon: User, label: "About", href: "#about", id: "about" },
  { icon: Briefcase, label: "Experience", href: "#experience", id: "experience" },
  { icon: Code, label: "Projects", href: "#projects", id: "projects" },
  { icon: Mail, label: "Contact", href: "#contact", id: "contact" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Find the section closest to top of viewport
      const sectionIds = navItems.map((n) => n.id);
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50"
      animate={{
        boxShadow: scrolled
          ? "0 4px 24px -4px rgba(0,0,0,0.10)"
          : "0 0px 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="h-16 w-16"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <img
              src={theme === "dark" ? YPBDark : YPBLight}
              alt="Yashpreet Bathla"
              className="w-16 h-16 object-cover"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-1"
                >
                  <motion.span
                    animate={{ color: isActive ? "#2563eb" : undefined }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-1"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.span>

                  {/* Sliding underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <nav className="bg-white dark:bg-gray-900 py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
