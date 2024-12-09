{/* Made BY Fizza Jawed */}

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-6 px-5 py-6 bg-white ">
      <div className="first flex flex-wrap items-start w-full  justify-between gap-6">
        {/* Intro Section with Logo */}
        <div className="intro w-full flex flex-col lg:w-auto gap-2 ">
          <div className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">
            <Image
              alt="Logo"
              src={"/Logo.svg"}
              width={118}
              height={24}
              className="className='text-[#3563e9] text-4xl font-bold'"
            />
          </div>
          <p className="w-[300px] text-center text-gray-500 lg:text-left">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
         {/* About */}
        <div className="w-full flex flex-wrap justify-center lg:justify-between lg:w-auto lg:mr-10 gap-6">
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg cursor-pointer">About</li>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          {/* Community */}
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg cursor-pointer">Community</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          {/* Socials*/}
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg cursor-pointer">Socials</li>
              <li className="cursor-pointer">Discord</li>
              <li className="cursor-pointer">Instagram</li>
              <li className="cursor-pointer">Facebook</li>
              <li className="cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>
      </div>
        {/* Footer Ending Section For Privacy , Terms/Conditions*/}
      <div className="line border-t w-full border-[#e7eef6]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first w-full text-center lg:text-left lg:w-auto">
          <h1 className="font-bold text-sm">
            ©2022 MORENT. All rights reserved
          </h1>
        </div>
        <div className="second w-full flex flex-wrap justify-center lg:justify-end lg:w-auto items-center gap-4 ml-4 mr-4">
          <h1 className="font-bold text-sm cursor-pointer">Privacy & Policy</h1>
          <h1 className="font-bold text-sm cursor-pointer">
            Terms & Conditions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
