import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { RoverTechnologySection } from "@/components/main/rover-technology";
import { PastAchievements } from "@/components/main/past-achievements";
import { Fixed3DModel } from "@/components/sub/fixed-3d-model";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Hero + Rover Technology Section with Fixed 3D Model */}
      <div className="relative">
        {/* Fixed 3D Model - Desktop Only, scoped to this section */}
        <Fixed3DModel />

        {/* Left Content Column - Desktop: w-1/2, Mobile: full width */}
        <div className="lg:w-1/2 w-full">
          <Hero />
          <RoverTechnologySection />
        </div>
      </div>

      {/* Normal Full-Width Sections */}
      <div className="w-full">
        <PastAchievements />
        {/* <Skills /> */}
        {/* <Encryption /> */}
        {/* <Projects /> */}
      </div>
    </main>
  );
}
