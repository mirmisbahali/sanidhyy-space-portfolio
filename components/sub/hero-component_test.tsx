"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  zoomIn,
  zoomInFromCenter,
} from "@/lib/motion";

export const HeroComponentTest = () => {
  return (
    <div className="min-h-screen w-full z-[20] pt-[65px]">
      {/* Hero Content */}
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-8 xl:px-12 py-8 lg:py-0 min-h-screen">
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
    </div>
  );
};