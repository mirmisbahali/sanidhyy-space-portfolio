"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/main/3DEarth";

export const Fixed3DModel = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Get precise section heights using intersection observer approach
      const pastAchievementsSection = document.querySelector('#past-achievements');

      let shouldHide = false;

      if (pastAchievementsSection) {
        const pastAchievementsRect = pastAchievementsSection.getBoundingClientRect();
        // Hide when Past Achievements section comes into view (100px buffer)
        shouldHide = pastAchievementsRect.top <= 500;
      } else {
        // Fallback: hide after 2 viewport heights
        shouldHide = scrollPosition > window.innerHeight * 0.1;
      }

      setIsVisible(!shouldHide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop: Fixed 3D Model */}
      <motion.div
        className="hidden lg:block fixed right-0 top-[100px] w-1/2 h-[calc(100vh-65px)] z-10 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-[400px] h-[400px] xl:w-[480px] xl:h-[480px]">
            <Canvas
              camera={{ position: [0, 0, 1300], fov: 45 }}
              onCreated={({ gl }) => {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
              }}
            >
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
      </motion.div>
    </>
  );
};