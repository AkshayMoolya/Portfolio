import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex top-0 justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">Akshay</h1>
      </div>
      <ul className="flex hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            <Link to={link} spy={true} smooth={true} offset={50} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => {
          setmenu(!menu);
        }}
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {menu && (
        <ul className="flex flex-col justify-center absolute top-0 right-0 w-[60%] h-[350px] bg-gradient-to-b rounded-bl-lg rounded-tl-lg from-black to-gray-800 text-gray-500 ">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-2xl hover:text-white duration-300"
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
