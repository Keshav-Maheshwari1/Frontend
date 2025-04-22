"use client";

import { close, hamburgerMenu, lock, logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        {/* <Image alt="loca" src={logo} className="h-[25px]" /> */}
         <h1 className="text-2xl font-bold text-green-500">
             Health Fin
         </h1>
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/scheme">Schemes</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex" onClick={handleLoginClick}>
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            <Image src={lock} alt="loca" />
            Login
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <Image src={toggle ? close : hamburgerMenu} alt="loca" />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">
            <Link href="/scheme">Schemes</Link>
          </li>

          <li className="p-4 hover:bg-gray-100">Store</li>

          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              <Image src={lock} alt="loca" />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
