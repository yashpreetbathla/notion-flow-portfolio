import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";
import { AnimatedText } from "./AnimatedText";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: "easeOut" },
  }),
};

const renderAchievementCard = (
  achievement: (typeof achievements)[0],
  index: number
) => (
  <motion.div
    key={achievement.id}
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    whileHover={{ y: -5, boxShadow: "0 16px 40px -8px rgba(0,0,0,0.12)" }}
    transition={{ hover: { type: "spring", stiffness: 300, damping: 22 } }}
    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-shadow duration-300"
  >
    <div className="flex items-start space-x-4">
      <motion.div
        className="text-3xl"
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: "spring", stiffness: 400, damping: 14 }}
      >
        {achievement.icon}
      </motion.div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {achievement.title}
          </h4>
          {achievement.link && (
            <motion.a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.2, rotate: -12 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
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
  </motion.div>
);

export const Achievements: React.FC = () => {
  const talks = achievements.filter((a) => a.type === "talk");
  const awards = achievements.filter((a) => a.type === "award");
  const competitions = achievements.filter((a) => a.type === "competition");

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Achievements & Talks"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 justify-center"
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Sharing knowledge through speaking engagements, recognition for
            technical excellence, and competitive programming achievements.
          </motion.p>
        </div>

        <div className="space-y-12">
          {talks.length > 0 && (
            <div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="mr-3">🎤</span>Speaking Engagements
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {talks.map((a, i) => renderAchievementCard(a, i))}
              </div>
            </div>
          )}

          {awards.length > 0 && (
            <div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="mr-3">🏆</span>Awards & Recognition
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {awards.map((a, i) => renderAchievementCard(a, i))}
              </div>
            </div>
          )}

          {competitions.length > 0 && (
            <div>
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="mr-3">🧠</span>Competitive Programming
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {competitions.map((a, i) => renderAchievementCard(a, i))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
