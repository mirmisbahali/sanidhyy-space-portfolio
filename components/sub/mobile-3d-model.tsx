"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/main/3DEarth";

export const Mobile3DModel = () => {
  return (
    <div className="lg:hidden w-full py-8">
      <div className="flex items-center justify-center">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
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
    </div>
  );
};