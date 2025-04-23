import React from "react";

import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-6 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-2 md:px-0">
        <div className="col-span-2">
          {/* <Image src={logo} alt="LOgo" className="h-[25px]" /> */}
          <h3 className="text-4xl font-bold">Health-Fin</h3>
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +123 400 123</h3>
          <h3 className="py-2 text-[#6D737A]">
            Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <h3 className="py-2 text-[#363A3D]">Email: example@mail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaDribbble size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaLinkedinIn size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaInstagram size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaBehance size={25} style={{ color: "#4DC39E" }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">lorem</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">lorem</li>
            <li className="py-2">lorem</li>
            <li className="py-2">lorem</li>
            <li className="py-2">lorem</li>
            <li className="py-2">lorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
