
import React from 'react';
import { Heart, Github, ExternalLink, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {personalInfo.title}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2024 {personalInfo.name}. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
