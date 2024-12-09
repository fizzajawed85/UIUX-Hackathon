{/* Made BY Fizza Jawed */}

import React from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-auto bg-white flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      {/* Logo */}
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16">
        <Image
          alt="Logo"
          src={"/Logo.svg"}
          width={118}
          height={24}
          className="className='text-[#3563e9] text-4xl font-bold'"
        />
      </div>
      {/* Search Bar Input Field */}
      <div className="w-full input relative md:w-auto">
        <Image
          src={"/search-normal.svg"}
          alt="search icon"
          width={24}
          height={24}
          className="absolute top-1/2 left-3 transform -translate-y-1/2"
        />
        <input
          type="text"
          title="search"
          placeholder="Say something here"
          className="w-full border-2 border-[#e7eef6] md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
        />
        {/* Search Bar Filter Icon */}
        <Image
          src={"/filter.svg"}
          alt="filter icon"
          width={24}
          height={24}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        />
      </div>
      {/* Icon of Notification Bell, Settings and Profile Image */}
      <div className="icons mt-4 md:mt-0">
        <Image
          src={"/Profil & Notification.svg"}
          alt=""
          width={236}
          height={44}
          className=" cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default NavBar;
