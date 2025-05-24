
import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-gray-900 dark:text-white">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
