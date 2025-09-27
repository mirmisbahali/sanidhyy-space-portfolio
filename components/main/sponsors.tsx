"use client";

import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const sponsors2025 = [
  {
    name: "DUSA",
    logoUrl: "/DUSA.png"
  },
  {
    name: "IISRI",
    logoUrl: "/iisri.png"
  },
];

export const Sponsors = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-black/70 to-gray-900/70 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
            Our 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Supporters</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Thank you to the organizations and individuals who made our first competition possible.
            Your support helped us turn an ambitious idea into reality.
          </p>
        </motion.div>

        {/* Sponsors Display */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 mb-16">
          {sponsors2025.map((sponsor, index) => (
            <div key={index} className={`${sponsor.name === 'IISRI' ? 'bg-white p-1 rounded-lg' : ''}`}>
              {sponsor.name === 'IISRI' ? (<Image
                src={sponsor.logoUrl}
                alt={`${sponsor.name} Logo`}
                width={400}
                height={400}
                className="object-contain"
                priority
              />):(
                <Image
                src={sponsor.logoUrl}
                alt={`${sponsor.name} Logo`}
                width={200}
                height={200}
                className="object-contain"
                priority
              />
              )}
              
            </div>
          ))}
        </div>


        {/* Call to Action for New Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 rounded-xl p-8 lg:p-12">
            <HeartIcon className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="font-heading text-2xl lg:text-3xl text-white mb-4">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">2026 Mission</span>
            </h3>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              Partner with us to advance space robotics education and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sponsor"
                className="py-3 px-6 bg-purple-500 hover:bg-purple-600 text-white cursor-pointer rounded-lg font-heading text-sm transition-all hover:scale-105 text-center"
              >
                Become a Sponsor
              </a>
              <a
                href="/sponsor#sponsorship-tiers"
                className="py-3 px-6 border border-purple-500 text-purple-400 cursor-pointer rounded-lg font-heading text-sm transition-all hover:bg-purple-500 hover:text-white text-center"
              >
                Partnership Info
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};