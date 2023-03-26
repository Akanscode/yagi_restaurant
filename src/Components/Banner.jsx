import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto w-full">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className="block md:flex md:space-x-2 px-2 lg:p-0">
            <div className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-[25em]">
              <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-grey-50 bg-transparent bg-opacity-10"></div>
              <Image
                src="/assets/banner-3.jpg"
                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover transition delay-150 duration-150 ease-in-out"
                alt="bannerimage"
                width={100}
                height={100}
              />
              <div className="p-4 absolute bottom-6 left-5 md:left-10 z-20">
                <span className="px-4 py-1 bg-black text-grey-20 inline-flex items-center justify-center mb-2 space-mono">
                  Burgers
                </span>
                <p className="text-3xl font-semibold text-grey-10 leading-tight capitalize">
                  50% off now!
                </p>
                <p className="max-w-md text-3xl font-semibold text-grey-10 leading-tight capitalize mt-4">
                  discount for
                  <br />
                  Delicious tasty
                  <br />
                  burgers.{" "}
                </p>
                <p className="text-sm font-semibold text-grey-10 leading-tight capitalize mt-5">
                  Sale off 50% only this week
                </p>
                <button className="bg-status-yellow-60 hover:bg-status-yellow-70  text-white font-bold text-xl px-4 py-2 rounded capitalize mt-5 ">
                  order now
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full md:w-1/3">
              <div className="relative rounded h-[12em]  ">
                <div className="absolute left-0 top-0 w-full h-[100%] z-10 bg-grey-50 bg-transparent bg-opacity-10"></div>
                <Image
                  src="/assets/banner-1.jpg"
                  className="absolute left-0 top-0 w-full h-[100%] rounded z-0 object-cover transition delay-150 duration-300 ease-in-out"
                  alt="bannerImage"
                  height={100}
                  width={100}
                />
                <div className="p-4 absolute bottom-4 left-5 z-20">
                  <span className="px-4 py-1 text-2xl bg-black text-grey-10 font-bold inline-flex items-center justify-center mb-2 space-mono">
                    Delicious Pizza
                  </span>
                  <p className="text-sm font-semibold text-grey-10 leading-tight capitalize mt-2">
                    50% off Now
                  </p>
                  <button className="bg-status-yellow-60 hover:bg-status-yellow-70  text-white font-bold text-xl px-4 py-2 rounded capitalize mt-2 ">
                    order now
                  </button>
                </div>
              </div>
              <div className="relative rounded h-[12em] ">
                <div className="absolute left-0 top-0 w-full h-[100%] z-10 bg-grey-50 bg-transparent bg-opacity-10"></div>
                <Image
                  src="/assets/banner-2.jpg"
                  className="absolute left-0 top-0 w-full h-[100%] rounded z-0 object-cover transition delay-150 duration-300 ease-in-out"
                  alt="bannerImage"
                  height={100}
                  width={100}
                />
                <div className="p-4 absolute bottom-2 left-5 z-20">
                  <span className="px-4 py-1 bg-black text-grey-20 inline-flex items-center justify-center mb-2 space-mono">
                    Delicious Pizza
                  </span>
                  <p className="text-sm font-semibold text-grey-10 leading-tight capitalize mt-5">
                    Sale off 50% only this week
                  </p>
                  <button className="bg-status-yellow-60 hover:bg-status-yellow-70  text-white font-bold text-xl px-4 py-2 rounded capitalize mt-5 ">
                    order now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
