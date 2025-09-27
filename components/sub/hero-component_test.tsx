"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import {
  slideInFromLeft,
  slideInFromTop,
  zoomIn,
  zoomInFromCenter,
} from "@/lib/motion";
import { Model } from "@/components/main/3DEarth";

export const HeroComponentTest = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full z-[20] pt-[65px]">
      {/* Left Column - Text Content */}
      <div className="flex flex-col justify-center px-20 py-8 lg:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start justify-center text-left max-w-[600px]"
        >
          <motion.div
            variants={zoomInFromCenter}
            className="Welcome-box py-2 px-3 sm:py-[8px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4 sm:mb-6"
          >
            <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
            <h1 className="Welcome-text text-xs sm:text-sm md:text-[13px]">
              Deakin Rover Project
            </h1>
          </motion.div>

          <motion.div
            variants={zoomIn(0.3)}
            className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 w-auto h-auto"
          >
            <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white leading-tight">
              Building the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Future of Lunar
              </span>{" "}
              Exploration
            </span>
          </motion.div>

          <motion.p
            variants={zoomIn(0.5)}
            className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-400 my-4 sm:my-6 max-w-[90%] leading-relaxed"
          >
            Deakin University&apos;s student-led rover team competing in the Australian Rover Challenge.
            Join us as we push the boundaries of space robotics and lunar exploration technology.
          </motion.p>

          <motion.div
            variants={zoomIn(0.7)}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <motion.a
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-heading text-xs transition-all hover:scale-105"
            >
              Support Our Mission
            </motion.a>
            <motion.a
              className="py-3 px-6 border border-purple-500 text-center text-purple-400 cursor-pointer rounded-lg font-heading text-xs transition-all hover:bg-purple-500 hover:text-white"
            >
              About The Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - 3D Model */}
      <div className="flex items-center justify-center min-h-[400px] lg:min-h-[600px] py-8 lg:py-12">
        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] max-w-[90vw] max-h-[90vw]">
          <Canvas camera={{ position: [0, 0, 1300], fov: 45 }}>
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
            <ambientLight intensity={3} />
            <directionalLight position={[0, 0, 1300]} intensity={2} />
            <Model />
          </Canvas>
        </div>
      </div>
    </div>
  );
};