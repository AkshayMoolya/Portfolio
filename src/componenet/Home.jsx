import React from "react";
import { Link } from "react-scroll";

import { BiRightArrowAlt } from "react-icons/bi";
const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className=" mt-[75px] h-[600px] w-full sm:pt-0 sm:h-[600px] bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-lg font-bold">
            I'm a full-stack web developer from India named Akshay Moolya . My
            interests are coding, open source, and the online platform. I've
            worked with a variety of technologies, including MongoDB, React, and
            Node.js
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrowAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
