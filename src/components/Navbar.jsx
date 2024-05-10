import React, { useState, useEffect } from "react";
import * as images from "../assets";
import Button from "./Button";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "#laikatoken",
    title: "$LAIKA Token",
  },
  {
    id: "sputnik",
    title: "Sputnik I",
  },
  {
    desc: "coming soon",
    id: "docs",
    title: "Docs",
  },
  {
    id: "bridge",
    title: "Bridge",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current route is the airdrop route
  const isAirdropRoute = location.pathname === "/sputnik";
  const isWaitListRoute = location.pathname === "/waitlist";
  const isBridgeRoute = location.pathname === "/bridge";
  const isFaucetRoute = location.pathname === "/faucets";

  // Function to scroll to section
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile menu
    setToggle(false);
  };
  return (
    <>
      {!isAirdropRoute && !isWaitListRoute && !isBridgeRoute && !isFaucetRoute && (
        <nav
          className={`hidden lg:flex bg-black w-full  justify-center items-center trans py-3 ${
            isFixed ? "fixed top-0 w-full z-[40] left-0" : ""
          }`}
        >
          <h2 className="text-white text-center md:text-left">
            Stay informed about{" "}
            <span className="text-gradient font-extrabold">$LAIKA</span>
          </h2>
          <Link
            to="/waitlist"
            className="bg-transparent py-1 px-8 mt-3 md:mt-0 md:ml-4 text-white border border-white rounded-[5px] text-sm"
            onClick={scrollToTop}
          >
            Join Waitlist
          </Link>
        </nav>
      )}

      <nav className={`w-full flex py-6 justify-between items-center navbar`}>
        <Link to="/">
          <img src={images.logo} alt="Hoobank" className="w-[64px] h-[64px]" />
        </Link>
        <div className="flex-1 justify-center items-center hidden lg:flex">
          <div className="bg-blue-700 h-[70px] z-[-1] filter_blur rounded-[10px] w-[700px] absolute" />
          {isWaitListRoute && (
            <div className="bg-blue-600 h-[200px] z-[-1] filter_blur rounded-[10px] w-[85%] absolute" />
          )}
          <ul className="list-none flex justify-center items-end gap-14">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-white navlink ${
                  nav.id === "docs" ? "coming-soon" : ""
                }`}
              >
                {(nav.id === "docs") && (
                  <p className="text-gradient text-[55%]">{nav.desc}</p>
                )}
                {nav.id === "#laikatoken" ? (
                  <a onClick={() => scrollToSection(nav.id)}>{nav.title}</a>
                ) : (
                  <NavLink
                    to={nav.id}
                    className={
                      nav.id === "docs"
                        ? "disabled-link font-medium tracking-wide"
                        : ""
                    }
                  >
                    {nav.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Button
          name="Whitepaper"
          style="px-6 hidden lg:flex"
          desc="coming soon"
          descStyle=" hidden sm:hidden md:hidden lg:block"
        />

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
            <div className="p-6 bg-dark-gradient z-[100] mx-4 my-2 rounded-xl sidebar">
              <ul className="list-none flex flex-col justify-end items-center">
                {navLinks.map((nav) => (
                  <li
                    key={nav.title}
                    className="font-normal cursor-pointer text-[16px] mb-4 text-white"
                  >
                    {nav.id === "#laikatoken" ? (
                      <a onClick={() => scrollToSection(nav.id)}>{nav.title}</a>
                    ) : (
                      <NavLink
                        to={nav.id}
                        className={
                          nav.id === "docs"
                            ? "disabled-link font-medium tracking-wide"
                            : ""
                        }
                        onClick={scrollToTop}
                      >
                        {nav.title}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li>
                  <Button
                    name="Whitepaper"
                    style="px-6 mt-3"
                    desc="coming soon"
                  />{" "}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
