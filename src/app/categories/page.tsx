"use client";

{/* Made BY Fizza Jawed */}
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { Plus_Jakarta_Sans } from "next/font/google";

// Configure the font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans", // Define a custom CSS variable for the font
});

{/* Toggles Show Section */}
export default function Page() {
  const [showMore, setShowMore] = useState(false); 
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="w-full flex">
      <div className="w-[20%] hidden sm:flex">
        {/* SideBar Section */}
        <Image
          src={"/NavBarSide.svg"}
          alt="side bar"
          width={360}
          height={1600}
        />
      </div>
      {/* Font */}
      <div
        className={`w-full sm:w-[80%] sm:p-6 flex flex-col bg-[#f6f7f9] p-4 gap-10 ${plusJakartaSans.variable}`}
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }} // Use the custom variable
      >
        {/* PicUp , Switch , Drop Off (Icon/Images) */}
        <section className="w-full items-center justify-center sm:justify-between flex flex-col sm:flex-row">
          <Image
            src={"/Pick - Up.svg"}
            alt="pic up image"
            width={582}
            height={132}
            className="w-[200px] md:w-[270px] lg:w-[582px]"
          />
          <Image
            src={"/Switch.svg"}
            alt="icon"
            width={60}
            height={60}
            className="w-[80px]"
          />
          <Image
            src={"/Drop - Off.svg"}
            alt="Drop off image"
            width={582}
            height={132}
            className=" w-[200px] md:w-[270px] lg:w-[582px]"
          />
        </section>

        {/* Cars Cards Categories with Map Method  */}
        <section className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Koenigsegg", image: "/Car1.svg", desc: "Sport" },
              { title: "Nissan GT - R", image: "/Car2.svg", desc: "Luxury" },
              { title: "Rolls-Royce", image: "/Car3.svg", desc: "Sport" },
              { title: "All New Rush", image: "/Car4.svg", desc: "Luxury" },
              { title: "CR - V", image: "/Car5.svg", desc: "Luxury" },
              { title: "ALLNEW TERIOS", image: "/Car6.svg", desc: "SUV" },
              {title: "MGZX Exclusive", image: "/Car7.svg", desc: "Luxury",},
              { title: "NEW MGZS", image: "/Car8.svg", desc: "SUV" },
            ].map((car, index) => (
              <Card
                key={index}
                className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between"
              >
             {/* Cards likes and specifications */}
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title}{""}
                    <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="car image" width={220} height={68} />
                  <Image
                    src={"/Spe1.svg"}
                    alt="specification image"
                    width={256}
                    height={24}
                    className="hidden md:flex"
                  />
                  <Image
                    src={"/Spe2.svg"}
                    alt="specification image"
                    width={256}
                    height={24}
                    className="md:hidden"
                  />
                </CardContent>
                {/* Details and Button Section */}
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={"./src/app/details/page.tsx"}>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* show more categories cards for cars with specifications */}
          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "MG ZX Exclusive", image: "/Car9.svg", desc: "SUV" },
                { title: "NEW MG ZS", image: "/Car2.svg", desc: "Sedan" },
                { title: "New MG ZX Excite", image: "/Car1.svg", desc: "Sport" },
                { title: "NEW MG ZS", image: "/Car5.svg", desc: "Sedan" },
              ].map((car, index) => (
                <Card
                  key={index}
                  className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between"
                >
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title}{" "}
                      <Image src={"/l1.svg"} alt="icon" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="Car Images" width={220} height={68} />
                    <Image
                      src={"/Spe3.svg"}
                      alt=""
                      width={256}
                      height={24}
                      className="hidden md:flex"
                    />
                    <Image
                      src={"/Spe7.svg"}
                      alt=""
                      width={256}
                      height={24}
                      className="md:hidden"
                    />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $100.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Toggles ShowMore/ShowLess Section */}
        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
