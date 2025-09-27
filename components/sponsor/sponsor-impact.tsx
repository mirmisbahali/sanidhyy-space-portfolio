"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  TrophyIcon,
  UsersIcon,
  RocketLaunchIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  LightBulbIcon,
  HeartIcon
} from "@heroicons/react/24/solid";

const impactStats = [
  {
    icon: UsersIcon,
    number: "25+",
    label: "Students Engaged",
    description: "Passionate engineering students developing cutting-edge robotics",
    color: "purple"
  },
  {
    icon: AcademicCapIcon,
    number: "6",
    label: "Disciplines",
    description: "Mechanical, Electrical, Software, Systems, Aerospace Engineering",
    color: "cyan"
  },
  {
    icon: TrophyIcon,
    number: "1st",
    label: "Competition Year",
    description: "Ambitious debut in the Australian Rover Challenge 2025",
    color: "green"
  },
  {
    icon: RocketLaunchIcon,
    number: "315+",
    label: "Target Points",
    description: "Comprehensive scoring across all competition categories",
    color: "orange"
  }
];

const whySponsorPoints = [
  {
    icon: BuildingOffice2Icon,
    title: "Industry Exposure",
    description: "Your brand reaches engineering students, faculty, and industry professionals at competitions and through our media presence.",
    color: "purple"
  },
  {
    icon: GlobeAltIcon,
    title: "Future Workforce",
    description: "Connect with talented engineers who will be tomorrow's space industry leaders and innovators.",
    color: "cyan"
  },
  {
    icon: LightBulbIcon,
    title: "Innovation Support",
    description: "Contribute to advancing space robotics research and autonomous systems technology development.",
    color: "green"
  },
  {
    icon: HeartIcon,
    title: "Education Impact",
    description: "Support STEM education and inspire the next generation of engineers to reach for the stars.",
    color: "red"
  }
];

export const SponsorImpact = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900/70 to-black/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Our Impact Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Join us in creating measurable impact in space robotics education and innovation.
            Your sponsorship directly contributes to developing the next generation of space engineers.
          </p>
        </motion.div> */}

        {/* Impact Statistics */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => {
            const colorClasses = {
              purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
              cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
              green: "text-green-400 bg-green-500/20 border-green-500/30",
              orange: "text-orange-400 bg-orange-500/20 border-orange-500/30"
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${colorClasses[stat.color as keyof typeof colorClasses].split(' ')[0]}`}>
                  {stat.number}
                </div>
                <div className="font-heading text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{stat.description}</div>
              </motion.div>
            );
          })}
        </div> */}

        {/* Why Sponsor Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Partner</span> with Us?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Your sponsorship creates lasting value for both your organization and the future of space exploration.
          </p>
        </motion.div>

        {/* Why Sponsor Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {whySponsorPoints.map((point, index) => {
            const colorClasses = {
              purple: "text-purple-400 bg-purple-500/20 border-purple-500/30 hover:border-purple-400",
              cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30 hover:border-cyan-400",
              green: "text-green-400 bg-green-500/20 border-green-500/30 hover:border-green-400",
              red: "text-red-400 bg-red-500/20 border-red-500/30 hover:border-red-400"
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${colorClasses[point.color as keyof typeof colorClasses].split(' ').slice(2).join(' ')}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[point.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')}`}>
                    <point.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-white mb-3">{point.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-8 lg:p-12">
            <h3 className="font-heading text-2xl lg:text-3xl text-white mb-6">
              Your Investment, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Our Mission</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Every dollar you invest goes directly toward advancing space robotics education, supporting student innovation,
              and building the future workforce for the space industry. Join us in making space exploration more accessible
              and inspiring the next generation of engineers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Direct Impact</div>
                <div className="text-gray-400 text-sm">Funds go straight to rover development and competition costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">Transparent Use</div>
                <div className="text-gray-400 text-sm">Detailed reports on how your sponsorship is utilized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">Lasting Legacy</div>
                <div className="text-gray-400 text-sm">Building foundation for future space exploration efforts</div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};