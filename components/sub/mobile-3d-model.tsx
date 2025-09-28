"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
// import { Model } from "@/components/main/3DEarth";
import { Model } from "@/components/main/Rover2025";
import { Suspense, useRef } from "react";

export const Mobile3DModel = () => {
  const ref = useRef<any>();
  return (
    <div className="lg:hidden w-full py-8">
      <div className="flex items-center justify-center">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
          <Canvas shadows dpr={[1, 2]} camera={{ fov: 15, position: [0, 0, 15] }}>
            <Suspense fallback={null}>
              <Stage controls={ref} preset="rembrandt" intensity={0.5} environment="city">
                false
                <Model />
                false
              </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate />
          </Canvas>
          {/* <Canvas
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
          </Canvas> */}
        </div>
      </div>
    </div>
  );
};