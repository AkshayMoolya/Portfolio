import React from "react";
import youtube from "../assets/portfolio/youtube.png";
import weatherapp from "../assets/portfolio/Weather app.png";
import crypto from "../assets/portfolio/CryptoTracker.png";
import Moviehub from "../assets/portfolio/MovieHub.png";

const Projects = () => {
  const portfolio = [
    {
      id: 1,
      src: youtube,
      demo: "https://youtube-clone-five-omega.vercel.app/",
      code: "https://github.com/AkshayMoolya/youtube-clone",
      name: "youtube clone",
    },
    {
      id: 2,
      src: weatherapp,
      demo: "https://weather-app-theta-amber.vercel.app/",
      code: "https://github.com/AkshayMoolya/Weather-app",
      name: "weather app",
    },
    {
      id: 3,
      src: Moviehub,
      demo: "https://movie-hub-tau.vercel.app/",
      code: "https://github.com/AkshayMoolya/MovieHub",
      name: "moviehub",
    },
    {
      id: 4,
      src: crypto,
      demo: "https://crypto-tracker-ten-iota.vercel.app/",
      code: "https://github.com/AkshayMoolya/Crypto-tracker",
      name: "crypto tracker app",
    },
  ];
  return (
    <div
      name="Projects"
      className="bg-black  from-black to-gray-900 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="py-6">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Projects
          </p>
          <p className="py-6 ">Check out some of my work right her</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0 justify-center ">
          {portfolio.map(({ id, src, demo, code, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <div className="h-[150px]">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-300  h-full "
                />
              </div>

              <div className="w-full flex justify-center font-bold capitalize pt-4">
                <span>{name}</span>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(`${demo}`, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-600 font-semibold "
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(`${code}`, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-600 font-semibold "
                >
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
