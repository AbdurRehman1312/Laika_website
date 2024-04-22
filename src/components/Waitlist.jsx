import React from "react";
import { Link } from "react-router-dom";
import * as images from "../assets";

const Waitlist = () => {
  return (
    <section className="my-10">
      <div className="mt-12">
      <Link className="text-primary hover:opacity-65">
        {">"} Laika Waitlist
      </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[55%] mt-9">
          <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[40px] xl:leading-[50px] ">
            Join the{" "}
            <span className="text-gradient font-extrabold">Laïka Waitlist</span>{" "}
            and be among the first to{" "}
            <span className="text-gradient font-extrabold">
              unleash DOGE's potential
            </span>
          </h1>
          <p className="text-dimGrey text-center mt-8 text-lg">
            Make DOGE assets smarter.
          </p>
          <div className="flex items-center justify-center gap-5 mt-8">
            <a href="https://twitter.com/Laika_Layer2/" target="_blank" className="rounded-[30px] bg-white text-black font-extrabold py-3 px-6">
              Follow Us
            </a>
            <a href="https://twitter.com/Laika_Layer2/" target="_blank">
            <img src={images.x} alt="" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://discord.com/invite/YTHa4fda5r" target="_blank">
            <img src={images.discord} alt="" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://medium.com/@laika-layer2" target="_blank">
            <img src={images.digoicon} alt="" className="w-[20px] h-[20px]" />
            </a>
          </div>
          <div className="bg-[#191919] w-[90%] lg:w-[60%] xl:w-[60%] mx-auto rounded-[20px] my-14 p-8 border border-white border-opacity-30 flex flex-col justify-between gap-6">
            <h2 className="text-white font-bold text-xl">Join the waitlist</h2>
            <p className="text-dimGrey text-lg">
              Sign up to stay informed about Laïka.
            </p>
            <form className="relative">
              <input
                className="bg-[#303030] text-white px-6 h-[35px] rounded-[5px] w-full focus:outline-none border border-white border-opacity-30"
                type="text"
                placeholder="Email address"
              />
              <button className="absolute right-[10px] top-[30%]">
                <img src={images.sendarrow} alt="" className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
