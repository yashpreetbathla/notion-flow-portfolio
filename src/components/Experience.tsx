
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              className="relative bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-full w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
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
