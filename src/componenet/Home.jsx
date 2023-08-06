import React from "react";
import { Link } from "react-scroll";

import { BiRightArrowAlt } from "react-icons/bi";
const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="min-h-screen w-full sm:pt-0 sm:min-h-screen flex items-center justify-center bg-black from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full  ">
          <h2 className="font-heading text-4xl sm:text-7xl font-bold text-white ">
            Hello, this is Akshay moolya.
            <br />
            <span className="text-green-600">a full stack developer.</span>
          </h2>

          <p className="text-gray-500 py-4 max-w-lg font-bold">
            I'm an experienced full stack developer with proficiency in React,
            Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Firebase.🧑‍💻
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
