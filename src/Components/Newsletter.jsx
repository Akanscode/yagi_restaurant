import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="bg-slate-50 w-full">
      <div className="container w-full mx-auto">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className="w-full relative flex items-center justify-center">
            <Image
              src="/assets/image011.avif"
              alt="restaurant"
              className="w-full h-full absolute z-0 "
              width={200}
              height={200}
            />
            <div className="bg-grey-80 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex-col items-center justify-center relative ">
              <h3 className=" leading-9 text-white text-center">
                Don’t miss out the 50% discount!
              </h3>
              <p className=" text-base leading-normal text-center text-white mt-6">
                Subscribe to your newsletter to stay in the loop. Our newsletter
                is sent once in <br className="hidden lg:block" />a week on
                every friday so subscribe to get latest news and updates.
              </p>
              <div className="sm:border border-white flex-col md:flex-row flex items-center justify-center  w-full mt-12 space-y-4 sm:space-y-0">
                <input
                  type="email"
                  className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                  placeholder="Email Address"
                />
                <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-status-yellow-60 py-4 px-6 hover:bg-opacity-75">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
