import React from "react";
import { blogImg1, heroImg } from "@/assets";
import Image from "next/image";

const SchemeCard = ({ scheme }) => {
  return (
    <div className="relative z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4 w-80 h-[380px] flex flex-col">
      <Image
        src={heroImg || blogImg1}
        alt={scheme.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-5 ">
        <h1 className="font-semibold text-lg truncate mb-3">{scheme.name}</h1>
        <p className="text-sm  text-gray-600 line-clamp-2">
          {scheme.description}
        </p>
      </div>

      <div className="mt-auto px-5 py-3 text-sm text-gray-700 font-medium border-t">
        Department: <span className="text-[#20B486]">{scheme.department}</span>
      </div>

      <div className="absolute top-0 left-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold text-sm shadow">
        {scheme.eligibility || "Eligibility Info"}
      </div>
    </div>
  );
};

export default SchemeCard;
