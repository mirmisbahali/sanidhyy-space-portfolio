"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/main/3DEarth"; // Temporary - will replace with rover model

const roverFeatures = [
  {
    id: "suspension",
    name: "Suspension",
    description: "Advanced suspension system designed for lunar terrain navigation with independent wheel control and shock absorption."
  },
  {
    id: "wheels",
    name: "Wheels",
    description: "Six-wheel rocker-bogie system providing superior traction and stability on uneven lunar surfaces."
  },
  {
    id: "communication",
    name: "Communication",
    description: "High-gain antenna system for reliable data transmission and real-time control from ground stations."
  },
  {
    id: "cameras",
    name: "Cameras",
    description: "Multi-spectral imaging system with panoramic and microscopic capabilities for scientific analysis."
  }
];

export const RoverTechnologySection = () => {
  const [activeFeature, setActiveFeature] = useState("suspension");

  return (
    <div data-section="rover-tech" className="relative min-h-screen w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-8 xl:px-12 py-16 lg:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Rover <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Technology</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the advanced systems that make our lunar rover capable of navigating the challenging lunar environment.
          </p>
        </motion.div>

        {/* Rover Technology Content */}
        <div className="w-full max-w-[600px]">

          {/* Controls Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Feature Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
              {roverFeatures.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`relative p-4 rounded-lg border transition-all duration-500 text-left overflow-hidden ${
                    activeFeature === feature.id
                      ? "border-purple-500 bg-purple-500/20 text-white shadow-lg shadow-purple-500/25"
                      : "border-gray-700 bg-gray-900/50 text-gray-300 hover:border-purple-400 hover:bg-purple-500/10"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: activeFeature === feature.id
                      ? "0 20px 25px -5px rgba(168, 85, 247, 0.4)"
                      : "0 10px 15px -3px rgba(168, 85, 247, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active button glow effect */}
                  {activeFeature === feature.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg"
                      layoutId="activeButton"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <span className="relative font-heading text-sm sm:text-base lg:text-lg">
                    {feature.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Feature Description */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/30 border border-gray-700 rounded-lg p-6"
            >
              <h3 className="font-heading text-xl lg:text-2xl text-white mb-4">
                {roverFeatures.find(f => f.id === activeFeature)?.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {roverFeatures.find(f => f.id === activeFeature)?.description}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};