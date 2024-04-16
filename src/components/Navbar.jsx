import React, { useState } from "react";
import * as images from "../assets";
import Button from "./Button";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  {
    id: "/",
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
  const location = useLocation();

  // Check if the current route is the airdrop route
  const isAirdropRoute = location.pathname === "/airdrop";

  return (
    <>
      {!isAirdropRoute && (
        <nav className="hidden lg:flex bg-black flex-col md:flex-row justify-center items-center py-3">
          <h2 className="text-white text-center md:text-left">
            Stay informed about{" "}
            <span className="text-gradient font-semibold">$LAIKA</span>
          </h2>
          <button className="bg-transparent py-1 px-8 mt-3 md:mt-0 md:ml-4 text-white border border-white rounded-[5px] text-sm">
            Join Waitlist
          </button>
        </nav>
      )}

      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={images.logo} alt="Hoobank" className="w-[64px] h-[64px]" />
        <div className="flex-1 justify-center items-center hidden lg:flex">
          <div className="bg-blue-700 h-[70px] z-[-1] filter_blur rounded-[10px] w-[700px] absolute" />
          <ul className="list-none flex justify-center items-end gap-14">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-white navlink ${nav.id === 'bridge' ? 'coming-soon' : ''
                  }`}
              >
                {nav.id === 'bridge' && <p className="text-gradient text-[55%]">{nav.desc}</p>}
                <NavLink to={nav.id} className={nav.id === 'bridge' ? 'disabled-link font-medium tracking-wide' : ''}>
                  {nav.title}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>
        <Button name="Whitepaper" style="px-6" />

        {/* For mobile screen */}

        <div className="lg:hidden flex justify-end items-center">
          <img
            src={toggle ? images.close : images.menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        {toggle && (
          <div className="lg:hidden absolute top-[90px] right-0 w-full">
            <div className="p-6 bg-dark-gradient mx-4 my-2 rounded-xl sidebar">
              <ul className="list-none flex flex-col justify-end items-center">
                {navLinks.map((nav) => (
                  <li
                    key={nav.title}
                    className="font-normal cursor-pointer text-[16px] mb-4 text-white"
                  >
                    <NavLink to={nav.id}>{nav.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
