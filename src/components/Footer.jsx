import React from "react";
import * as images from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLink = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/sputnik", // Directly specifying the URL of the Sputnik page
      title: "Sputnik 1",
    },
    // Disabled Docs and Bridge links
    {
      title: "Docs",
      comingSoon: true, // Add a flag to indicate "coming soon"
    },
    {
      id: "/bridge",
      title: "Bridge",
      comingSoon: false, // Add a flag to indicate "coming soon"
    },
  ];
  
  const community = [
    {
      href: "http://twitter.com/Laika_Layer2/",
      title: "Twitter",
    },
    {
      href: "https://discord.com/invite/YTHa4fda5r",
      title: "Discord",
    },
    {
      href: "https://medium.com/@laika-layer2",
      title: "Medium",
    },
  ];

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="my-10">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row ">
        <div className="flex flex-col gap-2 ">
          <div className="w-[53%] md:w-[31%] lg:w-[23%] xl:w-[19%]">
            <img src={images.footerLogo} alt="logo" className="w-full" />
          </div>
          <p className="text-dimGrey text-[1rem] w-full md:w-72 md:ml-3 lg:ml-4">
            Pioneering the Infrastructure that elevates memecoins to new
            height.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20 xl:gap-12">
          <div className="flex flex-col md:items-end">
            <h1 className="text-[1rem] text-white font-medium text-nowrap">
              Quick Links
            </h1>
            <div className="mt-4 md:mt-9">
              <ul className="list-none md:text-right">
                {quickLink.map((nav) => (
                  <li
                    key={nav.title}
                    className="font-normal cursor-pointer text-[0.8rem]  mb-4 text-dimGrey text-nowrap"
                  >
                    {/* Render link only if id is provided */}
                    {nav.id ? (
                      <Link to={nav.id} onClick={scrollToTop}>
                        {nav.title}
                      </Link>
                    ) : (
                      <span>
                        {nav.comingSoon && (
                          <p className="text-gradient text-[100%]">Coming soon</p>
                        )}
                        {nav.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <h1 className="text-[1rem] text-white font-medium">Community</h1>
            <div className="mt-4 md:mt-9">
              <ul className="list-none md:text-right">
                {community.map((nav) => (
                  <li
                    key={nav.title}
                    className="font-normal cursor-pointer text-[0.8rem]  mb-4 text-dimGrey text-nowrap"
                  >
                    <a href={nav.href} target="_blank">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
