{/* Made BY Fizza Jawed */}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Configure the font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans', // Define a custom CSS variable for the font
});

const Page = () => {
  return (
    <div className='w-full flex'>
     <div className="sm:flex w-[25%] hidden">
      {/* Side Bar*/}
        <Image src={'/NavBarSide.svg'} alt='sidebar' width={360} height={1600}/>
      </div>
      <div className={`w-full sm:w-[75%] p-4 sm:p-6 flex flex-col gap-10 bg-[#f6f7f9] ${plusJakartaSans.variable}`}
      style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}// Use the custom variable 
      >
        {/* View Images */}
        <section className='w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='w-full flex flex-col gap-4  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div>
                    <Image src={'/Look.svg'} alt='' width={492} height={360}/>

                </div>
                <div className=' flex items-center justify-between gap-2 lg:gap-0'>
                <Image src={'/Look 1.svg'} alt='car look' width={148} height={124}/>
                <Image src={'/Look 2.svg'} alt='car look' width={148} height={124}/>
                <Image src={'/Look 3.svg'} alt='car look' width={148} height={124}/>
                </div>
            </div>
            <div className="w-full h-auto justify-between flex flex-col lg:max-w-[492px] lg:max-h-[508px] bg-white rounded-xl shadow-md">
           {/* Car Details Images */}
            <Image
              src={"/CarDetails.svg"}
              alt="Car Details"
              width={492}
              height={392}
              className="w-full h-auto object-cover rounded-t-xl"/>

  <div className="flex items-center p-4 gap-4">
    <div className=" w-full flex items-center justify-between">
      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-sm lg:text-base text-gray-500">day $100.00</span>
      </h1>
    </div>
    {/* Button */}
    <Link href={"./src/app/payment/page.tsx"}>
      <button className="w-full max-w-[180px] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap bg-[#3563e9] hover:bg-[#264ac6] text-white rounded-md text-center">
        Rent Now
      </button>
    </Link>
   </div>
   </div>
  </section>
  {/* Review Section */}
     <section className='w-full flex items-center justify-center'>
            <Image src={'/Review 1.svg'} alt='reviews' width={1010} height={452} className=' hidden md:flex'/>
            <Image src={'/Review 2.svg'} alt='reviews' width={492} height={384} className=' md:hidden'/>
        </section>
        <section className="w-full flex flex-col gap-5">
        <div className="w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-lg sm:text-xl text-gray-500">Recent Car</h1>
          <Link href={"./src/app/categories/page.tsx"}>
            <h1 className="font-bold text-[#3563e9] decoration-[#3563e9] hover:underline">
              View All
            </h1>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:px-5 ">
       {/* Car Details Cards */}
        <Card className="w-full h-auto max-w-[304px] mx-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/Like.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/dc1.svg"} alt="car" width={220} height={68} />
              <Image src={"/ds1.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/dc2.svg"} alt="car" width={220} height={68} />
              <Image src={"/ds2.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'./src/app/payment/page.tsx'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/dc3.svg"} alt="car" width={220} height={68} />
              <Image src={"/ds3.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>
      {/* Recomended car section cards */}
      <section className="w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
          <Link href={"./src/app/categories/page.tsx"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
        <Card className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/rc1.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs1.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/l1.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/rc2.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs2.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full mx-auto h-auto max-w-[304px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/l1.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/rc3.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs3.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

        </div>
      </section>
      </div>
    </div>
  )
};

export default Page;
