import React from "react";
import { teamMember } from "./Data";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const TeamMember = () => {
  return (
    <div className="gradient-100 w-full">
      <div className="container mx-auto w-full">
        <div className="relative py-16 md:py-20 mx-auto">
          <div className=" mb-10  text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-slate-200 uppercase rounded-full bg-status-yellow-60 space-mono">
              Discover Our Chef
            </p>
            <h5 className="font-bold text-md text-grey-90 tracking-wider capitalize  ">
              meet our super amazing chefs
            </h5>
            <p className="text-grey-70 text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. <br /> Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Magnam, nihil.
            </p>
          </div>
          <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:-w-screen-lg">
            {teamMember.map((val, id) => (
              <div key={id} className="mb-6 lg:mb-0">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <Image
                      src={val.cover}
                      className="w-full rounded-t-lg  h-48"
                      alt="teamImage"
                      width={100}
                      height={50}
                    />
                    <Link href="#">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </Link>
                    <svg
                      className="absolute left-0 bottom-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#fff"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col sm:text-center">
                      <p className="text-lg font-bold">{val.chefName}</p>
                      <div className="flex items-center space-x-3 sm:justify-center">
                        <Link
                          href="/"
                          className="text-grey-60 transition-colors duration-300 hover:text-status-yellow-90"
                        >
                          <FaFacebookF className="h-5 w-5" />
                        </Link>
                        <Link
                          href="/"
                          className="text-grey-60 transition-colors duration-300 hover:text-status-yellow-90"
                        >
                          <FaTwitter className="h-5 w-5" />
                        </Link>
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

export default TeamMember;
