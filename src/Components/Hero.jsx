import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="bg-slate-50 w-full">
        <div className="container mx-auto w-full">
          <div className="px-0 mx-auto">
            <div className=" pt-32 md:pt-20">
              <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                  <p className="text-status-red-70 font-bold text-sm animate__animated animate__zoomIn space-mono">
                    Get 25% of your first order
                  </p>
                  <h3 className=" text-grey-60 lg:w-10/12 uppercase ">
                    Welcome to our
                  </h3>
                  <h1 className="text-grey-60 lg:w-10/12 animate__animated animate__zoomIn">
                    Yagi Restaurant
                  </h1>

                  <p className="mt-8 text-grey-70 lg:w-10/12 mx-w-md">
                    Sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Officiis, suscipit
                    necessitatibus. Voluptate iusto necessitatibus earum quidem
                    iure.
                  </p>
                  <button className="bg-status-yellow-60 hover:bg-status-yellow-70 text-md font-bold rounded-md shadow-lg px-4 py-3 mt-4">
                    Explore Food Menu
                  </button>
                </div>
                <div className="ml-auto -mb-16 lg:-mb-32 lg:w-6/12 relative">
                  <Image
                    src="/assets/hero_image.webp"
                    className=" mx-auto "
                    alt="hero_image"
                    object-fit="contain"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
