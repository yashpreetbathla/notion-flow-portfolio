
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>All Projects</span>
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Featured Only</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 hover-scale"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
