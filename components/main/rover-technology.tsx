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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient for seamless space transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-purple-900/15 to-blue-900/25 -z-10" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Rover <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Technology</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the advanced systems that make our lunar rover capable of navigating the challenging lunar environment.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column - Controls (Mobile: Top) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1"
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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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

          {/* Right Column - 3D Rover Model (Mobile: Bottom) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-2 flex items-center justify-center"
          >
            <div className="w-full max-w-[500px] aspect-square">
              <Canvas camera={{ position: [0, 0, 1000], fov: 50 }}>
                <OrbitControls
                  enableZoom={false}
                  autoRotate={true}
                  autoRotateSpeed={0.3}
                  enablePan={false}
                />
                <ambientLight intensity={2} />
                <directionalLight position={[0, 5, 5]} intensity={1.5} />
                <pointLight position={[-5, 5, 5]} intensity={1} />
                {/* Temporary Earth model - will be replaced with rover */}
                <Model />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};