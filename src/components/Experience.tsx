
import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems(prev => new Set([...prev, id]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(itemRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              ref={el => itemRefs.current[experience.id] = el}
              data-id={experience.id}
              className={`relative bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-500 hover:scale-[1.02] ${
                visibleItems.has(experience.id) 
                  ? 'animate-fade-in-up opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-full w-px h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {experience.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0 group">
                  <Calendar className="w-4 h-4 group-hover:animate-pulse" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {experience.description.map((item, idx) => (
                  <li 
                    key={idx} 
                    className={`text-gray-600 dark:text-gray-300 flex items-start transition-all duration-300 ${
                      visibleItems.has(experience.id) ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150 + idx * 100}ms` }}
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600 hover:scale-105 transition-all duration-200 cursor-default ${
                      visibleItems.has(experience.id) ? 'animate-scale-in' : 'opacity-0 scale-90'
                    }`}
                    style={{ animationDelay: `${index * 150 + techIndex * 50 + 300}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
