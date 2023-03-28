import React from "react";
import Image from "next/image";
import Link from "next/link";

const CustomerRating = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto w-full">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className="flex lg:flex-row flex-col items-center justify-between space-y-20">
            <div className="w-full md:max-w-md">
              <div className="relative ">
                <Image
                  className="absolute object-cover h-[20.5rem] md:h-[26rem] w-[40rem] md:w-[100%] shadow-2xl"
                  src="/assets/banner1.avif"
                  alt="aboutimg"
                  width={500}
                  height={500}
                />

                <div
                  className="relative bg-slate-200 drop-shadow-lg left-auto md:left-32 -top-10 md:-top-20 h-[12rem] md:h-64 w-[16rem] md:w-72  
                "
                >
                  <div className="py-2 md:py-8 px-4">
                    <div className=" flex flex-row justify-between mb-2">
                      <Image
                        src="/assets/customerImage1.avif"
                        alt="deliveryImage"
                        className=" object-cover rounded-full  h-[4rem] w-[4rem]"
                        width={50}
                        height={50}
                      />
                      <Link
                        href="#"
                        className="font-bold text-sm leading-none text-status-yellow-40  italic"
                      >
                        See All
                      </Link>
                    </div>
                    <h3 className="leading-normal mb-2 font-bold text-black">
                      Drike Mark
                    </h3>

                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <p className="text-grey-50 text-sm font-bold">
                      We have on our menu the offer you can get anywhere.
                    </p>
                  </div>
                </div>
                <div className="relative bg-slate-200 drop-shadow-lg left-auto -top-0 md:-top-0 h-[6rem] md:h-[8rem] w-[15rem] md:w-62">
                  <div className="py-2 md:py-4 px-5">
                    <h5 className="text-grey-60 tracking-wide">
                      Customer Rating Review
                    </h5>
                    <div className="flex items-center my-px">
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-status-yellow-40"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        className="w-5 h-5 text-grey-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>

                    <div className="flex cursor-pointer">
                      <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                        <Image
                          className="rounded-full object-cover"
                          src="/assets/customerImage2.avif"
                          width={40}
                          height={40}
                          alt="customerImage"
                        />
                      </span>
                      <span className="-ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                        <Image
                          className="rounded-full object-cover "
                          src="/assets/customerImage3.avif"
                          width={40}
                          height={40}
                          alt="customerImage"
                        />
                      </span>
                      <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                        <Image
                          className="rounded-full object-cover"
                          src="/assets/customerImage4.avif"
                          width={40}
                          height={40}
                          alt="customerImage"
                        />
                      </span>
                      <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                        <Image
                          className="rounded-full object-cover"
                          src="/assets/customerImage4.avif"
                          width={40}
                          height={40}
                          alt="customerImage"
                        />
                      </span>
                      <span className=" -ml-3 h-9 w-9 border-2 rounded-full flex border-white">
                        <Image
                          className="rounded-full object-cover"
                          src="/assets/customerImage4.avif"
                          width={40}
                          height={40}
                          alt="customerImage"
                        />
                      </span>
                      <span className=" -ml-3 h-9 w-9 bg-status-yellow-60 justify-center items-center rounded-full flex border ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-grey-50"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-md">
              <h6 className="text-status-yellow-40 uppercase space-mono ">
                About Us
              </h6>
              <h3 className=" text-slate-500 ">
                Healthy Tasty and delicacies to
              </h3>
              <h3 className=" text-slate-600 ">spice your life</h3>

              <p className="mt-8 text-grey-70 text-sm">
                Sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officiis, suscipit
                necessitatibus. Voluptate iusto necessitatibus earum quidem
                iure.
              </p>
              <ul className="mb-4 -ml-1 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-status-yellow-60"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Fastest Food Home Delivery
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-status-yellow-60"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Spacific Family And Kids Zone
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-status-yellow-60"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                  Delicious & Healthy Foods
                </li>
              </ul>

              <button className="bg-status-yellow-60 text-md font-bold rounded-md shadow-lg px-4 py-3 mt-6">
                Explore Food Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
