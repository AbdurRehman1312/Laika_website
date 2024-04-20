import React, { useState, useEffect } from "react";
import Button from "./Button";
import * as images from "../assets";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Set showVideo to true after a short delay to allow the transition effect to be visible
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 50); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);
  return (
    <section id="home">
      <div className="flex justify-center items-center h-[70vh] sm:h-[40vh]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white text-6xl sm:text-4xl md:text-5xl">
            MAKE <span className="text-gradient_sec font-extrabold">DOGE</span>{" "}
            ASSETS SMARTER
          </h1>
          <h1 className="text-white text-xl sm:text-lg md:text-xl font-extralight mt-3 tracking-wider">
            (AND MUCH COOLER){" "}
            <span className="text-primary font-extrabold">*</span>
          </h1>
          <Button name="Discover Laïka" style="mt-8 px-6" />
        </div>
      </div>
      <div className="flex justify-center w-full">
      <div className={`video-container ${showVideo ? 'show' : ''}`}>
        <video
          src={images.herovid}
          autoPlay
          loop
          muted
          controls={false}
          className="w-full mix-blend-screen"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    </section>
  );
};

export default Hero;
