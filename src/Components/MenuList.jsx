import React, { useState } from "react";
import Image from "next/image";
import { BreakFast, dinnerItems, foodItems } from "./Data";
import { FaStar } from "react-icons/fa";

const MenuList = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="bg-slate-200 bg-cover w-full">
      <div className="container mx-auto w-full">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className="mt-5">
            <h5 className="inline-block px-3 py-px mb-4  tracking-wider rounded-full text-slate-200  bg-status-yellow-60">
              About
            </h5>
            <h3 className="text-grey-80  mb-5">Our Special Dishes</h3>

            <div className="border-status-yellow-70  border-b-4 border-t-4 ">
              <ul
                className="flex flex-row flex-wrap mb-0 list-none space-x-4 md:space-x-8 pt-3 pb-4  "
                role="tablist"
              >
                <li className=" list:mr-0 ">
                  <button
                    className={
                      "  p-lg capitalize   " +
                      (openTab === 1
                        ? "rounded-full p-lg text-status-yellow-50 bg-status-yellow-90 px-2 md:px-4 py-2"
                        : "rounded-full p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    id="#link1"
                    role="tablist"
                  >
                    All
                  </button>
                </li>
                <li className="-mb-px list:mr-0 ">
                  <button
                    className={
                      " p-lg capitalize " +
                      (openTab === 2
                        ? "rounded-full p-lg text-status-yellow-50 bg-status-yellow-90 px-2 md:px-4 py-2"
                        : "rounded-full p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2 ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    id="#link2"
                    role="tablist"
                  >
                    Breakfast
                  </button>
                </li>
                <li className="-mb-px list:mr-0 ">
                  <button
                    className={
                      "  text-black p-lg capitalize" +
                      (openTab === 3
                        ? " rounded-full p-lg text-status-yellow-50 bg-status-yellow-90 px-2 md:px-4 py-2"
                        : " rounded-full p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2 ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    id="#link3"
                    role="tablist"
                  >
                    Dinner
                  </button>
                </li>
                <li className="-mb-px list:mr-0 ">
                  <button
                    className={
                      "  text-black capitalize  " +
                      (openTab === 4
                        ? "rounded-full p-lg text-status-yellow-50 bg-status-yellow-90  px-2 md:px-4 py-2 "
                        : "rounded-full p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    id="#link4"
                    role="tablist"
                  >
                    Lunch
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative flex flex-col  w-full my-10 ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space ">
                  {/**==============tab one========== */}
                  <div
                    className={openTab === 1 ? "block " : "hidden"}
                    id="link1"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:-w-screen-lg md:gap-4 mx-auto">
                      {foodItems.map((val, id) => (
                        <div
                          key={id}
                          className="relative flex-shrink-0 px-4 md:max-w-full max-w-xl mx-auto md:px-2"
                        >
                          <div className="absolute h-[310px] md:w-[200px] inset-0 gradient-200 shadow-lg transform -skew-y-6 rotate-3 rounded-2xl"></div>
                          <div className="relative py-4 px-6 md:px-4 mb-12 bg-white shadow-2xl">
                            <div className="flex justify-center  mb-4">
                              <Image
                                src={val.cover}
                                className="h-[8rem] w-[8rem] object-cover rounded-full"
                                alt={val.foodName}
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="">
                              <h4 className=" mb-2 text-black">
                                {val.foodName}
                              </h4>
                              <p className="text-grey-50  mb-2">
                                {val.foodDescription}
                              </p>
                              <div className="flex gap-1 md:gap-2 mb-2">
                                <div className="flex ">
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-grey-50" />
                                </div>
                                <p className="font-bold text-sm md:text-md text-slate-500">
                                  {val.foodnView}
                                </p>
                              </div>
                              <div className="flex gap-2 md:gap-5 ">
                                <p className="font-bold text-md text-slate-500">
                                  {val.foodPrice}
                                </p>
                                <button className="bg-white font-bold text-sm px-4 py-2 rounded-md border-2 border-status-yellow-60 shadow-lg">
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-5">
                      <button className="bg-status-yellow-60  px-4 py-3 font-semibold text-md rounded-lg shadow-2xl">
                        Explore More
                      </button>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:-w-screen-lg md:gap-4 mx-auto">
                      {BreakFast.map((val, id) => (
                        <div
                          key={id}
                          className="relative flex-shrink-0 px-4 md:max-w-full max-w-xl mx-auto md:px-2"
                        >
                          <div className="absolute h-[310px] md:w-[200px] inset-0 gradient-200 shadow-lg transform -skew-y-6 rotate-3 rounded-2xl"></div>
                          <div className="relative py-4 px-6 md:px-4 mb-12 bg-white shadow-2xl">
                            <div className="flex justify-center  mb-4">
                              <Image
                                src={val.cover}
                                className="h-[8rem] w-[8rem] object-cover rounded-full"
                                alt={val.foodName}
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="">
                              <h4 className=" mb-2 text-black">
                                {val.foodName}
                              </h4>
                              <p className="text-grey-50  mb-2">
                                {val.foodDescription}
                              </p>
                              <div className="flex gap-1 md:gap-2 mb-2">
                                <div className="flex ">
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-grey-50" />
                                </div>
                                <p className="font-bold text-sm md:text-md text-slate-500">
                                  {val.foodnView}
                                </p>
                              </div>
                              <div className="flex gap-2 md:gap-5 ">
                                <p className="font-bold text-md text-slate-500">
                                  {val.foodPrice}
                                </p>
                                <button className="bg-white font-bold text-sm px-4 py-2 rounded-md border-2 border-status-yellow-60 shadow-lg">
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-5">
                      <button className="bg-status-yellow-60  px-4 py-3 font-semibold text-md rounded-lg shadow-2xl">
                        Explore More
                      </button>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:-w-screen-lg md:gap-4 mx-auto">
                      {dinnerItems.map((val, id) => (
                        <div
                          key={id}
                          className="relative flex-shrink-0 px-4 md:max-w-full max-w-xl mx-auto md:px-2"
                        >
                          <div className="absolute h-[310px] md:w-[200px] inset-0 gradient-200 shadow-lg transform -skew-y-6 rotate-3 rounded-2xl"></div>
                          <div className="relative py-4 px-6 md:px-4 mb-12 bg-white shadow-2xl">
                            <div className="flex justify-center  mb-4">
                              <Image
                                src={val.cover}
                                className="h-[8rem] w-[8rem] object-cover rounded-full"
                                alt={val.foodName}
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="">
                              <h4 className=" mb-2 text-black">
                                {val.foodName}
                              </h4>
                              <p className="text-grey-50  mb-2">
                                {val.foodDescription}
                              </p>
                              <div className="flex gap-1 md:gap-2 mb-2">
                                <div className="flex ">
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-status-yellow-40" />
                                  <FaStar className="w-4 h-4 text-grey-50" />
                                </div>
                                <p className="font-bold text-sm md:text-md text-slate-500">
                                  {val.foodnView}
                                </p>
                              </div>
                              <div className="flex gap-2 md:gap-5 ">
                                <p className="font-bold text-md text-slate-500">
                                  {val.foodPrice}
                                </p>
                                <button className="bg-white font-bold text-sm px-4 py-2 rounded-md border-2 border-status-yellow-60 shadow-lg">
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-5">
                      <button className="bg-status-yellow-60 px-4 py-3 font-semibold text-md rounded-lg shadow-2xl">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
