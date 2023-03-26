import React from "react";
import { blog } from "./Data";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto w-full">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className="mx-auto mb-10 lg:-w-xl text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-slate-200 uppercase rounded-full bg-status-yellow-60 space-mono">
              Lastest Blog Post
            </p>
            <h4 className="font-bold text-md text-grey-90 tracking-wider capitalize  ">
              this is all about our foods
            </h4>
            <p className="text-base text-grey-70 md:text-lg ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
              <br /> Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row space-x-4">
            {blog.map((val, id) => (
              <div
                key={id}
                className="relative w-full bg-white mb-6 shadow-lg rounded-xl mt-16"
              >
                <div className="px-2 mx-auto">
                  <div className=" mx-4 -mt-6">
                    <Link href="#">
                      <Image
                        className="object-cover object-center w-full rounded-lg shadow-md h-36 md:h-36"
                        src={val.cover}
                        alt="card-image"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </div>
                  <div className="pb-4 md:p-4 mt-5 ">
                    <div className="flex flex-row justify-between p-2">
                      <div className="inline-flex space-x-px md:space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-status-yellow-60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className=" text-[0.50rem] md:text-md font-bold text-status-yellow-60 uppercase tracking-wider">
                          {val.postDate}
                        </span>
                      </div>
                      <div className="inline-flex space-x-px md:space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-status-yellow-60"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-bold text-[0.50rem] md:text-md text-status-yellow-60 uppercase tracking-wider">
                          {val.posterName}
                        </span>
                      </div>
                    </div>
                    <Link href="#">
                      <h5 className=" max-w-md hover:underline hover:decoration-solid  mt-5">
                        {val.blogTitle}
                      </h5>
                    </Link>
                    <p className="opcacity-60 my-5">{val.blogText}</p>
                    <div className="flex items-center justify-between">
                      <button className="inline-flex items-center text-md font-bold text-grey-80 hover:text-status-yellow-60 hover:transition hover:delay-150 hover:ease-in-out">
                        Read More
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="flex items-center justify-between">
                        <span className="text-status-yellow-40 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-grey-20">
                          <svg
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          {val.blogLink}
                        </span>
                        <span className="text-status-yellow-40 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          {val.blogComment}
                        </span>
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

export default Blog;
