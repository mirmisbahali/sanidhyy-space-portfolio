"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogoSection = () => {
  return (
    <div className="relative w-full  py-2 lg:py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Deakin Rover Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex justify-center">
            <div className="rounded-2xl">
              <Image
                src="/deakin_rover_logo_white.svg"
                alt="Deakin Rover Main Logo"
                width={300}
                height={200}
                className="object-contain"
                onError={(e) => {
                  // Fallback if main logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              {/* Fallback text if main logo fails to load */}
              <div className="hidden text-gray-800 text-2xl lg:text-3xl font-bold text-center">
                DEAKIN ROVER
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24"
        >

          {/* Left: Deakin Competitive Robotics Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-lg">
              <Image
                src="/DCR.webp"
                alt="Deakin Competitive Robotics Logo"
                width={100}
                height={50}
                className="object-contain"
                onError={(e) => {
                  // Fallback if DCR logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              {/* Fallback text */}
              <div className="hidden text-gray-800 text-sm font-medium text-center py-4 px-2">
                Deakin Competitive<br />Robotics
              </div>
            </div>
          </motion.div>

          {/* Right: DUSA Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-lg">
              <Image
                src="/DUSA.png"
                alt="DUSA Logo"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* Optional: Divider or spacing */}
        <div className="mt-16 lg:mt-20">
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

      </div>
    </div>
  );
};