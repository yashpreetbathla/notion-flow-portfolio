
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through technical writing and mentoring.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            
            {skills.map((skillCategory, categoryIndex) => (
              <div 
                key={skillCategory.category} 
                className={`space-y-3 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
                style={{ animationDelay: `${600 + categoryIndex * 100}ms` }}
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700 hover:scale-105 transition-all duration-200 cursor-default ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
                      style={{ animationDelay: `${800 + categoryIndex * 100 + skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
