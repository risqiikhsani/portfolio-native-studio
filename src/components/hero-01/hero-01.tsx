import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Image from "next/image";
const Hero01 = () => {
  return (
    <div className="flex items-center justify-center px-6">
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/logos/logo2.png"
          alt="Background Logo"
          width={1000}
          height={1000}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 dark:invert z-0"
        />

        <div className="relative z-10 text-center max-w-2xl flex flex-col items-center">
          {/* Foreground Image */}
          <Image
            src="/logos/logo.png"
            alt="Foreground Logo"
            width={500}
            height={500}
            className="dark:invert"
          />

          <p className="mt-2 text-[17px] md:text-lg">
          Interior design studio that creates distinctive spaces by blending materials and forms into immersive narratives.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
