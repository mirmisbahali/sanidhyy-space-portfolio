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

export const HeroContent = () => {
  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 w-full h-full z-[20] overflow-hidden pt-[65px]">
      {/* Text Content - Centered in First Grid Row */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center max-w-[800px] justify-self-center"
      >
        <motion.div
          variants={zoomInFromCenter}
          className="Welcome-box py-2 px-3 sm:py-[8px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4 sm:mb-6"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-xs sm:text-sm md:text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={zoomIn(0.3)}
          className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-center w-auto h-auto"
        >
          <span className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        <motion.p
          variants={zoomIn(0.5)}
          className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-400 my-4 sm:my-6 max-w-[90%] sm:max-w-[600px] leading-relaxed"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={zoomIn(0.7)}
          className="py-3 px-6 sm:py-2 sm:px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-heading text-sm sm:text-base transition-all hover:scale-105"
        >
          Learn more
        </motion.a>
      </motion.div>

      {/* 3D Earth - Second Grid Row, Half Hidden with Negative Margin */}
      <div className="justify-self-center w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] xl:w-[750px] xl:h-[750px] -mb-[150px] sm:-mb-[200px]">
        <Canvas camera={{ position: [0, 0, 1300], fov: 45 }}>
          <OrbitControls enableZoom={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[0, 0, 1300]} intensity={2} />
            <Model  />
        </Canvas>
      </div>
    </div>
  );
};