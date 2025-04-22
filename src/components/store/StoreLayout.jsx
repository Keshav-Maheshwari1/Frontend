"use client";
import { useState } from "react";

export default function StoreLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#20B486]">
        Medicine Store
      </h1>
      {children}
    </div>
  );
}
