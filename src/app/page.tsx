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
    <div
      className={`min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 bg-[#f6f7f9] ${plusJakartaSans.variable}`}
      style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }} // Use the custom variable
    >
      {/* Ads Images */}
      <section className="w-full justify-center flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8">
        <Image src="/Ads 1.svg" alt="Ads image" width={640} height={360} className="max-w-full" />
        <Image src="/Ads 2.svg" alt="Ads image" width={640} height={360} className="max-w-full" />
      </section>

      <section className="w-full items-center justify-center flex flex-wrap sm:flex-nowrap sm:justify-between gap-4 sm:gap-8">
        <Image src="/Pick - Up.svg" alt="PicUp Image" width={582} height={132} className="max-w-full" />
        <Image src="/Switch.svg" alt="Switch Icons" width={60} height={60} className="max-w-full" />
        <Image src="/Drop - Off.svg" alt="DropOff Image" width={582} height={132} className="max-w-full" />
      </section>

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"./src/app/categories/page.tsx"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
       {/* popular cars cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/Like.svg"} alt="Like Icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/c1.svg"} alt="Car Image" width={220} height={68} />
              <Image src={"/s1.svg"} alt="Spesification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/l2.svg"} alt="Like icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/c2.svg"} alt="car" width={220} height={68} />
              <Image src={"/s2.svg"} alt="specification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href="/payment">
                <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src="/Like.svg" alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src="/c3.svg" alt="car" width={220} height={68} />
              <Image src="/s3.svg" alt="specification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/c4.svg"} alt="car" width={220} height={68} />
              <Image src={"/s4.svg"} alt="speciation" width={256} height={24} />
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

      {/* Recommended cars cards */}
        <section className="popular w-full flex flex-col gap-4">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Rush <Image src="/l2.svg" alt="icon" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src="/r1.svg" alt="car" width={220} height={68} />
                <Image src="/rs1.svg" alt="specification" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p>
                  $99.00/<span className="text-gray-500">day</span>
                </p>
                <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/Like.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/r2.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs2.svg"} alt="speciation" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"r3.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs3.svg"} alt="speciation" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/l1.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/r4.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs4.svg"} alt="specification" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive <Image src={"/l1.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/r5.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs5.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS <Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/r6.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs6.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite <Image src={"/l1.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/r7.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs7.svg"} alt="spe" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                New MG ZS<Image src={"/l2.svg"} alt="icon" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/r8.svg"} alt="car" width={220} height={68} />
              <Image src={"/rs8.svg"} alt="spe" width={256} height={24} />
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
      {/* Button  */}
        <section className="button w-full text-center">
          <Link href="./src/app/categories/page.tsx">
            <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
              Show More Cars
            </button>
          </Link>
        </section>
      
    </div>
  );
};

export default Page;
