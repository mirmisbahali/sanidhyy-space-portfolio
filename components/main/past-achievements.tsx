"use client";

import { motion } from "framer-motion";
import { TrophyIcon, StarIcon, NewspaperIcon, UsersIcon } from "@heroicons/react/24/solid";

const achievements = {
  competitions: [
    {
      year: "2025",
      event: "Critical Design Review",
      // rank: "3rd Place",
      score: "85/100",
      description: "Exceptional performance in navigation and sample collection tasks"
    },
    {
      year: "2025",
      event: "Systems Acceptance Review",
      // rank: "5th Place",
      score: "78/100",
      description: "Strong showing in autonomous operations and equipment deployment"
    },
    {
      year: "2025",
      event: "Post-Landing Task",
      // rank: "8th Place",
      score: "71/100",
      description: "First-time participation with solid foundational performance"
    },
    {
      year: "2025",
      event: "Space Resources Task",
      // rank: "8th Place",
      score: "71/100",
      description: "First-time participation with solid foundational performance"
    }
  ],
  // awards: [
  //   {
  //     title: "Innovation Excellence Award",
  //     organization: "Deakin University Engineering Faculty",
  //     year: "2024",
  //     description: "Outstanding innovation in rover suspension system design"
  //   },
  //   {
  //     title: "Best Student Project",
  //     organization: "Victorian Space Industry Awards",
  //     year: "2023",
  //     description: "Recognition for exceptional student-led space technology development"
  //   },
  //   {
  //     title: "STEM Education Impact Award",
  //     organization: "Australian Space Agency",
  //     year: "2023",
  //     description: "Excellence in inspiring next generation of space engineers"
  //   }
  // ],
  // media: [
  //   {
  //     title: "Local Students Reach for the Stars",
  //     outlet: "Geelong Advertiser",
  //     date: "March 2024",
  //     type: "Feature Article"
  //   },
  //   {
  //     title: "Deakin Rover Team Interview",
  //     outlet: "ABC Radio Melbourne",
  //     date: "September 2023",
  //     type: "Radio Interview"
  //   },
  //   {
  //     title: "Space Technology Showcase",
  //     outlet: "Channel 7 News",
  //     date: "August 2023",
  //     type: "TV Feature"
  //   }
  // ],
  // impact: [
  //   {
  //     metric: "150+",
  //     label: "Students Engaged",
  //     description: "Through workshops and demonstrations"
  //   },
  //   {
  //     metric: "25",
  //     label: "Schools Visited",
  //     description: "STEM outreach programs delivered"
  //   },
  //   {
  //     metric: "5,000+",
  //     label: "Community Members",
  //     description: "Reached through public events"
  //   },
  //   {
  //     metric: "3",
  //     label: "Research Papers",
  //     description: "Published in peer-reviewed journals"
  //   }
  // ]
};

export const PastAchievements = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900 to-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Building trust through a proven track record of excellence in rover development,
            competition success, and community impact.
          </p>
        </motion.div>

        {/* Competition Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <TrophyIcon className="h-8 w-8 text-yellow-500 mr-4" />
            <h3 className="font-heading text-2xl lg:text-3xl text-white">Competition Results</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl font-bold text-purple-400">{comp.year}</span>
                  {/* <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {comp.rank}
                  </span> */}
                </div>
                <h4 className="font-heading text-lg text-white mb-2">{comp.event}</h4>
                <p className="text-gray-400 text-sm mb-3">{comp.description}</p>
                <div className="text-cyan-400 font-semibold">Score: {comp.score}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* 
        Awards & Recognition
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <StarIcon className="h-8 w-8 text-yellow-500 mr-4" />
            <h3 className="font-heading text-2xl lg:text-3xl text-white">Awards & Recognition</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {achievements.awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-lg p-6 hover:border-purple-400 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <StarIcon className="h-6 w-6 text-yellow-500" />
                  <span className="text-purple-300 text-sm">{award.year}</span>
                </div>
                <h4 className="font-heading text-lg text-white mb-2">{award.title}</h4>
                <p className="text-cyan-300 text-sm mb-3">{award.organization}</p>
                <p className="text-gray-400 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        Media Coverage
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <NewspaperIcon className="h-8 w-8 text-cyan-500 mr-4" />
            <h3 className="font-heading text-2xl lg:text-3xl text-white">Media Coverage</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.media.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/40 border border-gray-600 rounded-lg p-6 hover:border-cyan-400 hover:bg-gray-800/60 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                    {media.type}
                  </span>
                  <span className="text-gray-400 text-sm">{media.date}</span>
                </div>
                <h4 className="font-heading text-white mb-2">{media.title}</h4>
                <p className="text-cyan-400 text-sm">{media.outlet}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        Impact Metrics
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <UsersIcon className="h-8 w-8 text-green-500 mr-4" />
            <h3 className="font-heading text-2xl lg:text-3xl text-white">Impact Metrics</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.impact.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-b from-green-900/20 to-transparent border border-green-500/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                  {metric.metric}
                </div>
                <div className="font-heading text-white mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
         */}
      </div>
    </div>
  );
};