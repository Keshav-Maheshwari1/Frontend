"use client"
import { heroImg } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";


const Hero = () => {
  const router = useRouter()
  const handleSchemeClick = ()=>{
    router.push('/scheme')
  }
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-[1480px] mx-auto grid md:grid-cols-2 items-center px-4 md:px-0 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="leading-tight md:text-6xl text-4xl font-semibold">
            Transforming Healthcare with{" "}
            <span className="text-[#20B486]">Smart Fintech Solutions</span>
          </h1>
          <p className="text-lg text-gray-600">
            Building secure, scalable platforms to power government-led
            healthcare services for millions.
          </p>

          {/* CTA Button */}
          <button className="bg-[#20B486] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1ca275] transition-all duration-300 w-fit" onClick={handleSchemeClick}>
            Explore All Schemes
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center">
          <Image
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
