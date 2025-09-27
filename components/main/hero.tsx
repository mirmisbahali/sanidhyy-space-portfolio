import { HeroComponentTest } from "@/components/sub/hero-component_test";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video> */}

      <HeroComponentTest />
    </div>
  );
};
