import React, { useRef, useEffect } from "react";
import Button from "./Button";
import Canvas from "./Canvas"; // Import the Canvas component
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
          <Button name="Discover Laïka" style="mt-8 px-6"  />
        </div>
      </div>
      {/* Replace the img tag with the Canvas component */}
      <div className="flex justify-center relative h-[500px] w-full"> {/* Add relative positioning */}
        <Canvas
          count={50}
          speed={0.1}
          radius={13}
          width={window.innerWidth}
          height={window.innerHeight}
          size={5}
          color="rgba(10, 130, 150, 0.8)"
          maxDistance={120}
          background={["0, 0, 0", "0, 0, 0"]}
          className="absolute inset-0 rounded-[100px] " 
        />
        <img src={images.logo} alt="" className="lg:w-[8%] xl:w-[12%] md:w-[15%] w-[30%]  z-10 absolute top-[50%]" />
      </div>
    </section>
  );
};

export default Hero;
