import React, {useRef} from "react";
import Button from "./Button";
import * as images from "../assets";
const Hero = () => {
  return (
    <section id="home">
      <div className="flex justify-center items-center h-[70vh] sm:h-[40vh]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white text-6xl sm:text-4xl md:text-5xl">
            MAKE <span className="text-gradient_sec font-extrabold">DOGE</span>{" "}
            ASSETS SMARTER
          </h1>
          <h1 className="text-white text-xl sm:text-lg md:text-xl font-extralight mt-2">
            MAKE (AND MUCH COOLER) <span className="text-primary font-extrabold">*</span>
          </h1>
          <Button name="Discover Laïka" style="mt-8 px-6" />
        </div>
      </div>

      <img src={images.hero} alt="" />
    </section>
  );
};

export default Hero;
