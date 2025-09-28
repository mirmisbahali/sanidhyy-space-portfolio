"use client";

import { motion } from "framer-motion";
import { TrophyIcon, StarIcon, NewspaperIcon, UsersIcon } from "@heroicons/react/24/solid";

const achievements = {
  competitions: [
    {
      year: "2026",
      event: "Critical Design Review",
      score: "20",
      description: ""
    },
    {
      year: "2026",
      event: "Systems Acceptance Review",
      score: "50",
      description: ""
    },
    {
      year: "2026",
      event: "Post-Landing",
      score: "80",
      description: ""
    },
    {
      year: "2026",
      event: "Space Resources",
      score: "25",
      description: ""
    },
    {
      year: "2026",
      event: "Excavation and Construction",
      score: "70",
      description: ""
    },
    {
      year: "2026",
      event: "Mapping and Autonomous",
      score: "70",
      description: ""
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
    <div data-section="past-achievements" id="past-achievements" className="relative w-full bg-gradient-to-b from-gray-900/70 to-black/70 py-20 lg:py-25 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Goals</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            Our 25+ student team will spend 6 months developing systems to achieve 315+ points across all competition tasks.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2">
              <div className="text-2xl font-bold text-purple-400">315+</div>
              <div className="text-sm text-gray-300">Total Points</div>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
              <div className="text-2xl font-bold text-green-400">25+</div>
              <div className="text-sm text-gray-300">Students</div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
              <div className="text-2xl font-bold text-cyan-400">6</div>
              <div className="text-sm text-gray-300">Months</div>
            </div>
          </div>
        </motion.div>

        {/* Competition Results */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <TrophyIcon className="h-8 w-8 text-yellow-500 mr-4" />
            <h3 className="font-heading text-2xl lg:text-3xl text-white">Competition Tasks</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300"
              >
                <div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{comp.year}</span>
                </div>
                <h4 className="font-heading text-lg text-white mb-2">{comp.event}</h4>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{comp.description}</p>
                </div>
                <div className="text-cyan-400 font-semibold">{comp.score} pts</div>
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