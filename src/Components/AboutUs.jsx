import React from "react";
import { aboutUS } from "./Data";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white w-full">
      <div className="container w-full mx-auto">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:-w-screen-lg gap-6 mx-auto ">
            {aboutUS.map((val, id) => (
              <div
                className="flex-shrink px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6"
                key={id}
              >
                <div className="relative mx-auto">
                  <div className=" w-64 h-[250px] lg:w-[270px] lg:h-[270px] bg-status-yellow-60 rounded-tr-[40px] rounded-bl-[40px] absolute -top-2 -left-1 "></div>
                  <div className="relative left-1">
                    <div className="w-[258px] h-[240px] lg:w-62 lg:h-[250px] rotate-3 bg-slate-200 shadow-lg relative rounded-tr-[40px] rounded-bl-[40px] ">
                      <div className="py-8 px-8 mb-12 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block mb-4">
                          <Image
                            src={val.cover}
                            className=" object-cover"
                            alt={val.title}
                            width={100}
                            height={100}
                          />
                        </div>
                        <h4 className="text-black leading-normal mb-2 ">
                          {val.title}
                        </h4>
                        <p className="text-grey-50 font-bold text-sm">
                          {val.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
