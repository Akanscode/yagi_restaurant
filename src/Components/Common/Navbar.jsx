import React, { useState } from "react";
import { HiBars3, HiShoppingCart } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 z-50 bg-slate-200">
      <div className="flex flex-wrap items-center py-2 shadow-sm">
        <div className="container w-full mx-auto px-4 flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/**==========website logo=========== */}
            <Link href="/" className=" inline-block mr-4 py-2 ">
              <Image src="/assets/logo.png" alt="logo" width={80} height={60} />
            </Link>
            {/** ========= search bar on a mobile view ========= */}
            <div className="flex lg:hidden">
              <div className="flex justify-between items-center">
                <div className="p-2">
                  <button className="">
                    {" "}
                    <FaUserCircle className="w-6 h-6 text-black hover:text-status-yellow-60 " />
                  </button>
                </div>
                <div className="bg-status-yellow-60 rounded-full p-2 ml-3">
                  <HiShoppingCart size={20} className="text-grey-100  " />
                </div>
              </div>
            </div>
            {/**==========mobile menu button========= */}
            <button
              className="grey-90 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden  outline-none focus:outline-none"
              type="button"
              onClick={() => setNavBarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <HiBars3 size={25} />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col items-center justify-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/**=============search bar and add to cart on disktop */}
          <div className="lg:flex hidden">
            <div className="flex justify-between items-center">
              <form className="relative z-10">
                <button
                  type="submit"
                  id="searchsubmit"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <svg
                    className="h-5 w-5 text-grey-60"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-status-yellow-60 text-grey-30 placeholder-grey-40 focus:outline-none focus:bg-white focus:text-grey-90 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                />
              </form>
              <div className="mx-3">
                <button className="p-2">
                  {" "}
                  <FaUserCircle className="w-6 h-6 text-black hover:text-status-yellow-60 " />
                </button>
              </div>
              <div className="bg-status-yellow-60 rounded-full p-2 ml-3">
                <HiShoppingCart size={20} className="text-grey-100  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
