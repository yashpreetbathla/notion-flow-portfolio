
import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { achievements } from "../data/portfolioData";

export const Achievements: React.FC = () => {
  const talks = achievements.filter(achievement => achievement.type === 'talk');
  const awards = achievements.filter(achievement => achievement.type === 'award');
  const competitions = achievements.filter(achievement => achievement.type === 'competition');

  const renderAchievementCard = (achievement: typeof achievements[0]) => (
    <div
      key={achievement.id}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="text-3xl">{achievement.icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {achievement.title}
            </h4>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          
          {achievement.event && (
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {achievement.event}
                {achievement.year && ` • ${achievement.year}`}
              </span>
            </div>
          )}
          
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {achievement.description}
          </p>
          
          {achievement.details && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              {achievement.details}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Talks
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge through speaking engagements, recognition for technical excellence, 
            and competitive programming achievements.
          </p>
        </div>

        <div className="space-y-12">
          {/* Speaking Engagements */}
          {talks.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🎤</span>
                Speaking Engagements
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {talks.map(renderAchievementCard)}
              </div>
            </div>
          )}

          {/* Awards & Recognition */}
          {awards.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🏆</span>
                Awards & Recognition
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {awards.map(renderAchievementCard)}
              </div>
            </div>
          )}

          {/* Competitive Programming */}
          {competitions.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-3">🧠</span>
                Competitive Programming
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {competitions.map(renderAchievementCard)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
