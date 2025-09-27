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
      // Calculate the height of hero + rover technology sections
      // Assuming roughly 2 viewport heights for both sections combined
      const sectionsHeight = window.innerHeight * 2;
      const scrollPosition = window.scrollY;

      // Hide the model when user scrolls past the sections
      setIsVisible(scrollPosition < sectionsHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen z-10 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="w-[400px] h-[400px] xl:w-[480px] xl:h-[480px]">
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
    </motion.div>
  );
};