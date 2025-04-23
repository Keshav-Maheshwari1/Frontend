"use client";

import { close, hamburgerMenu, lock } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { logout } from "@/actions/logout";
const Navbar = ({ isLoggedIn }) => {
  const [toggle, setToggle] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://i.pravatar.cc/300");
  const router = useRouter();

  const handleClick = () => setToggle(!toggle);

  const handleLoginClick = () => router.push("/login");

  const handleLogoutClick = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <h1 className="text-2xl font-bold text-green-500">Health Fin</h1>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/scheme">Schemes</Link>
            </li>
            <li>
              <Link href="/near">Aushadhi</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
          </ul>
        </div>

        {!isLoggedIn ? (
          <div className="hidden md:flex gap-4">
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-2 bg-transparent px-6"
            >
              <Image src={lock} alt="lock icon" />
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold"
            >
              Sign Up For Free
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <Link href="/profile">
              <Image
                src={photoURL}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </Link>
            <button
              onClick={handleLogoutClick}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        )}

        <div className="md:hidden" onClick={handleClick}>
          <Image src={toggle ? close : hamburgerMenu} alt="menu toggle" />
        </div>
      </div>

      {toggle && (
        <div className="absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b">
          <ul>
            <li className="p-4 hover:bg-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link href="/scheme">Schemes</Link>
            </li>
            <li>
              <Link href="/near">Aushadhi</Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link href="/store">Store</Link>
            </li>
            {!isLoggedIn ? (
              <div className="flex flex-col my-4 gap-4">
                <button
                  onClick={handleLoginClick}
                  className="border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4"
                >
                  <Image src={lock} alt="lock icon" />
                  Login
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold"
                >
                  Sign Up For Free
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/profile" className="flex items-center gap-2">
                  <Image
                    src={photoURL}
                    alt="profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-semibold">My Profile</span>
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
