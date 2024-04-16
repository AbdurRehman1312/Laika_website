import React, { useRef, useEffect } from "react";
import * as images from "../assets";
import gsap from "gsap";
import { useIntersection } from "react-use";
import FeaturesCard from "./FeaturesCard";
import { Link } from "react-router-dom";

const Features = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Adjust the threshold value as needed
  });
  

  useEffect(() => {
    const textElements = Array.from(sectionRef.current.children);

    const fadeIn = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 1,
        x: () => {
          // Starting position for the animation
          return 0;
        },
        ease: "power4.out",
        stagger: {
          // Delay between each line animation
          amount: 0.3,
        },
      });
    };
    const fadeOut = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 0,
        x: () => {
          // Starting position for the animation
          return "-100%";
        },
        ease: "power4.out",
        stagger: {
          // Delay between each line animation
          amount: 0.3,
        },
      });
    };

    if (intersection && intersection.intersectionRatio >= 0.5) {
      fadeIn();
    }
    else{
      fadeOut();
    }
  }, [intersection]); // Add intersection to the dependency array
  return (
    <section id="developers" className="my-8 md:my-16 lg:my-24">
      <Link className="text-primary hover:opacity-65">
        {">"} Our Core Features
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 md:my-10 lg:my-12">
        <div
          className="col-span-1 md:col-span-4 flex flex-col gap-3"
          ref={sectionRef}
        >
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Laïka is{" "}
            <span className="text-gradient_sec font-bold">innovative</span>
          </h1>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Laïka is{" "}
            <span className="text-gradient_sec font-bold">scalable</span>
          </h1>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Laïka is <span className="text-gradient_sec font-bold">fast</span>
          </h1>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center">
            Laïka is{" "}
            <img
              src={images.line}
              alt=""
              className="w-1/2 ml-4 md:ml-8 lg:ml-12"
            />
          </h1>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <FeaturesCard
                img="check"
                name="Native DOGE assets"
                desc="Harness the full potential of Dogecoin with Laïka's DOGE protocol, designed for enhanced functionality and integration."
              />
              <FeaturesCard
                img="rench"
                name="Built for developers"
                desc="Laika offers a developer-centric environment, providing the tools and support needed to innovate and create seamlessly."
              />
            </div>
            <div className="flex flex-col gap-6">
              <FeaturesCard
                img="shield"
                name="EVM Compatible & AA"
                desc="Enjoy broad compatibility and simplified account management with Laïka's EVM compatibility and innovative account abstraction feature."
              />
              <FeaturesCard
                img="trophy"
                name="Low Fees, High Scalability"
                desc="Experience the benefits of low transaction fees and high scalability, ensuring efficient and cost-effective operations on the Laïka Layer 2."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
