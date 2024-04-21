import React, {useRef, useEffect} from "react";
import * as images from "../assets";
import Button from "./Button";
import gsap from "gsap";
import { useIntersection } from "react-use";

const Ecosystem = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust the threshold value as needed
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
    <>
      <section className="mb-6 mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-0">
          <div className="flex flex-col justify-evenly gap-4 mx-4" ref={sectionRef}>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold lg:leading-[60px]">
              Built for developers and meme enjoyers
            </h1>
            <p className="text-dimGrey text-lg md:text-base lg:text-lg xl:text-xl">
            Laika is offering developers a robust and dynamic infrastructure to build, innovate, and scale their projects on the Dogecoin network. Whether you're developing the next groundbreaking dApp or integrating DOGE into your existing projects, Laika provides the speed, scalability, and security you need.
            </p>
            <Button
              name="Join the ecosystem"
              style="w-[65%] md:w-[56%] lg:w-[39%] xl:w-[27%]"
            />
          </div>
          <div className="flex justify-end">
          <div className="relative ">
            <img
              className="w-auto z-10 absolute top-0"
              src={images.revealloading}
              alt=""
            />
            <img className="" src={images.shiners} alt="" />
          </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Ecosystem;
