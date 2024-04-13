import React, { useState } from "react";
import * as images from "../assets";
import Button from "./Button";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "laikatoken",
    title: "$LAIKA Token",
  },
  {
    id: "developers",
    title: "Developers",
  },
  {
    id: "airdrop",
    title: "Airdrop",
  },
  {
    desc: "coming soon",
    id: "bridge",
    title: "Bridge",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={images.logo} alt="Hoobank" className="w-[64px] h-[64px]" />
      <div className="flex-1 justify-center items-center hidden sm:flex">
        <div className="bg-blue-700 h-[70px] z-[-1] filter_blur rounded-[10px] w-[700px] absolute" />
        <ul className="list-none flex justify-center items-center gap-14">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-normal cursor-pointer text-[16px] text-white"
            >
              <p className="text-gradient text-xs text-center">{nav.desc}</p>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <Button name="Whitepaper" />

      {/* For mobile screen */}

      <div className="sm:hidden flex justify-end items-center">
        
        <img
          src={toggle ? images.close : images.menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {toggle && (
        <div className="sm:hidden absolute top-[90px] right-0 w-full">
          <div className="p-6 bg-dark-gradient mx-4 my-2 rounded-xl sidebar">
            
            <ul className="list-none flex flex-col justify-end items-center">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-normal cursor-pointer text-[16px] mb-4 text-white"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
