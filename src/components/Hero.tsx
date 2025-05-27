import React, { useState, useEffect } from "react";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { BackForthTyping } from "./BackForthTyping";
import profileImage from "../assets/CAM00614_Original.jpeg";
import { ViewIndicator } from "./ViewIndicator";

interface HeroProps {
  className?: string;
  showViews?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  className = "",
  showViews = import.meta.env.VITE_FIREBASE_ENABLE_VIEW_COUNTER === "true",
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="relative animate-fade-in">
            <div className="animate-float">
              <img
                src={personalInfo.profileImageUrl || profileImage}
                alt={personalInfo.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-xl object-cover transition-transform duration-300 hover:scale-105"
              />
              {showViews && (
                <div className="absolute -bottom-2 -right-2">
                  <ViewIndicator />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <h1
                className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-700 ${
                  showContent ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
              >
                {personalInfo.name}
              </h1>
            </div>

            <div
              className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-all duration-700 delay-300 ${
                showContent ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              <BackForthTyping
                text={personalInfo.title}
                speed={100}
                pauseDuration={3000}
                className="font-medium"
              />
            </div>

            <p
              className={`text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
                showContent ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
            >
              {personalInfo.bio}
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-700 ${
              showContent ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToAbout}
              className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg transform"
            >
              <span>Learn More</span>
              <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
            </button>

            {/* <a
              href="/resume.pdf"
              className="group px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg transform"
            >
              <Download className="w-4 h-4 group-hover:animate-pulse" />
              <span>Download CV</span>
            </a> */}

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg transform"
            >
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
