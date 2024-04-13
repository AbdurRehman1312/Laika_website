import React from "react";
import Button from "./Button";
import * as images from "../assets";
const Hero = () => {
  return (
    <section id="home">
      <div className="flex justify-center items-center h-[70vh] sm:h-[40vh]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white text-5xl sm:text-4xl md:text-5xl">
            MAKE <span className="text-gradient_sec font-bold">DOGE</span>{" "}
            ASSETS SMARTER
          </h1>
          <h1 className="text-white text-2xl sm:text-lg md:text-xl font-extralight mt-2">
            MAKE (AND WAY MORE COOL) <span className="text-primary">*</span>
          </h1>
          <Button name="Discover Laïka" style="mt-8" />
        </div>
      </div>

      <img src={images.hero} alt="" />
    </section>
  );
};

export default Hero;
