"use client";

import { motion } from "framer-motion";
import { RocketLaunchIcon, StarIcon, UsersIcon } from "@heroicons/react/24/solid";

export const SponsorHero = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-black/70 via-gray-900/70 to-gray-800/70 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight">
            Partner with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Deakin Rover
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
            Join us in pushing the boundaries of space robotics education and innovation.
            Support the next generation of engineers competing in the Australian Rover Challenge.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-full p-4 mb-4">
                <UsersIcon className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Students Involved</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-full p-4 mb-4">
                <RocketLaunchIcon className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">315+</div>
              <div className="text-gray-400">Target Points</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-green-500/20 border border-green-500/30 rounded-full p-4 mb-4">
                <StarIcon className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-gray-400">Months Development</div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="#sponsorship-tiers"
              className="py-4 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-heading text-lg rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View Sponsorship Packages
            </a>
            <a
              href="#contact-form"
              className="py-4 px-8 border-2 border-purple-500 text-purple-400 font-heading text-lg rounded-lg transition-all hover:bg-purple-500 hover:text-white"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="font-heading text-xl text-white mb-4">Brand Visibility</h3>
            <p className="text-gray-400 leading-relaxed">
              Showcase your brand to the space robotics community, universities, and industry professionals
              through competition coverage and social media presence.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="font-heading text-xl text-white mb-4">Talent Pipeline</h3>
            <p className="text-gray-400 leading-relaxed">
              Connect with bright engineering students and future space industry professionals.
              Build relationships for internships, graduate recruitment, and future partnerships.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="font-heading text-xl text-white mb-4">Innovation Impact</h3>
            <p className="text-gray-400 leading-relaxed">
              Support cutting-edge research and development in space robotics, autonomous systems,
              and engineering education that drives industry innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};