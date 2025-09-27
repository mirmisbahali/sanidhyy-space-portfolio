"use client";

import { motion } from "framer-motion";
import {
  CogIcon,
  TruckIcon,
  DocumentTextIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";

const budgetItems = [
  {
    category: "Components & Materials",
    icon: CogIcon,
    percentage: 40,
    amount: "$8,000",
    color: "purple",
    description: "Motors, sensors, electronics, chassis materials, wheels, and specialized components for rover construction"
  },
  {
    category: "Competition & Travel",
    icon: TruckIcon,
    percentage: 25,
    amount: "$5,000",
    color: "cyan",
    description: "Transportation, accommodation, registration fees, and logistics for Australian Rover Challenge"
  },
  {
    category: "Tools & Equipment",
    icon: WrenchScrewdriverIcon,
    percentage: 15,
    amount: "$3,000",
    color: "green",
    description: "Specialized tools, testing equipment, 3D printing materials, and workshop supplies"
  },
  {
    category: "Documentation & Media",
    icon: DocumentTextIcon,
    percentage: 10,
    amount: "$2,000",
    color: "orange",
    description: "Technical documentation, video production, website development, and marketing materials"
  },
  {
    category: "Training & Development",
    icon: AcademicCapIcon,
    percentage: 7,
    amount: "$1,400",
    color: "blue",
    description: "Workshops, certifications, online courses, and skill development for team members"
  },
  {
    category: "Operations & Contingency",
    icon: UsersIcon,
    percentage: 3,
    amount: "$600",
    color: "red",
    description: "Administrative costs, insurance, emergency funds, and unexpected expenses"
  }
];

export const BudgetBreakdown = () => {
  const totalBudget = 20000;

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900/70 to-black/70 py-20 lg:py-32">
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
            Fund <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Allocation</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Transparency is important to us. Here's exactly how your sponsorship contribution
            will be used to advance our mission and develop the rover.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Total Budget Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-8">
              <h3 className="font-heading text-2xl text-white mb-2">Total Project Budget</h3>
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                ${totalBudget.toLocaleString()}
              </div>
              <p className="text-gray-300">
                Complete funding needed to compete in the 2026 Australian Rover Challenge
              </p>
            </div>
          </motion.div>

          {/* Budget Breakdown Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {budgetItems.map((item, index) => {
              const colorClasses = {
                purple: "text-purple-400 bg-purple-500/20 border-purple-500/30 from-purple-500",
                cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30 from-cyan-500",
                green: "text-green-400 bg-green-500/20 border-green-500/30 from-green-500",
                orange: "text-orange-400 bg-orange-500/20 border-orange-500/30 from-orange-500",
                blue: "text-blue-400 bg-blue-500/20 border-blue-500/30 from-blue-500",
                red: "text-red-400 bg-red-500/20 border-red-500/30 from-red-500"
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon and Percentage */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-3 ${colorClasses[item.color as keyof typeof colorClasses].split(' ').slice(1, 3).join(' ')}`}>
                        <item.icon className="h-8 w-8" />
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]}`}>
                          {item.percentage}%
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-heading text-xl text-white">{item.category}</h3>
                        <div className={`text-xl font-bold ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]}`}>
                          {item.amount}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[4]} to-transparent`}
                        />
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Funding Status and Impact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Current Funding Status */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="font-heading text-2xl text-white mb-6">Current Funding Status</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Funds Secured</span>
                  <span className="text-green-400 font-semibold">$3,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Still Needed</span>
                  <span className="text-orange-400 font-semibold">$16,800</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '16%' }} />
                </div>
                <div className="text-center">
                  <span className="text-green-400 font-bold">16% Funded</span>
                </div>
              </div>
            </div>

            {/* Accountability Promise */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="font-heading text-2xl text-white mb-6">Our Accountability Promise</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Quarterly financial reports to all sponsors</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Detailed receipts and expense tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Progress updates with photos and videos</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">Open communication channel with team</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-8">
              <h3 className="font-heading text-2xl text-white mb-4">
                Every Dollar Makes a Difference
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Whether you're interested in a full sponsorship package or supporting a specific budget category,
                your contribution directly advances space robotics education and student innovation.
              </p>
              <a
                href="#contact-form"
                className="inline-block py-3 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-heading text-lg rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Discuss Your Contribution
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};