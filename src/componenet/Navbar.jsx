import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  const Links = [
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "TechStacks",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex top-0 justify-between items-center w-full h-20 text-white backdrop-blur-sm bg-neutral-800/50 px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">Akshay</h1>
      </div>
      <ul className="flex hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold text-white hover:scale-105 hover:text-green-500 duration-200"
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
        <FaBars size={30} />
      </div>
      {menu && (
        <ul className="flex flex-col justify-center  absolute top-20 right-5 w-[35%] h-[150px] rounded-xl border-gray-500 border bg-black text-white rounded-bl-lg rounded-tl-lg  text-gray-500  ">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 py-1 text-sm font-semibold cursor-pointer capitalize py-2 text-2xl hover:text-white duration-300"
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
