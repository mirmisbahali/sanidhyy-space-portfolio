import Link from "next/link";

import { LogoSection } from "./logo-section";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <LogoSection />

      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full grid grid-cols-3 gap-4 md:gap-8 max-w-4xl">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-sm md:text-[2px] lg:text-[16px] mb-4">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-2 md:my-[15px] hover:text-purple-400 transition-colors"
                >
                  {Icon && <Icon className="text-sm md:text-base" />}
                  <span className="text-xs md:text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 mb-[20px] text-xs md:text-[15px] text-center">
          Deakin Rover {new Date().getFullYear()} | All rights reserved.
        </div>
      </div>
    </div>
  );
};
