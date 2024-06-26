import React, { useRef, useEffect } from "react";
import OpportunitiesCard from "./OpportunitiesCard";
import * as images from "../assets";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { Link } from "react-router-dom";
const Opportunities = () => {
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
        scale: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    const fadeOut = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 0,
        y: "100%",
        scale: 0.1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    if (intersection && intersection.intersectionRatio >= 0.5) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [intersection]);
  return (
    <section id="opportunities" className="md:my-28 mt-48 mb-[7rem] md:mb-0 md:mt-0">
      <Link className="text-primary hover:opacity-65">
        {">"} Solving the Dogecoin network problems
      </Link>
      <div className="flex flex-col justify-center items-center text-center h-[33vh] sm:h-[40vh]">
        <h1 className="text-white text-3xl  md:text-5xl">
          Turning <span className="text-gradient_sec font-extrabold">Doge</span>{" "}
          limits <br />
          into opportunities with{" "}
          <span className="text-gradient font-extrabold">Laïka</span>
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12 lg:gap-6 mt-3 overflow-hidden"
        ref={sectionRef}
      >
        <OpportunitiesCard
          img="scalibilty"
          name="Scalability, Programmability"
          desc="The new protocols on Doge have exposed limitations in transaction processing capacity and a notable lack of asset programmability."
        />
        <OpportunitiesCard
          img="setting"
          name="Users Adoption"
          desc="The absence of dApps on the Dogecoin network, resulting from its original design, leads to minimal on-chain activity and limited user engagement."
        />
        <OpportunitiesCard
          img="thumb"
          style="h-[50px] w-[35px] rotate-[180deg] "
          name="Infinite meme potential"
          desc="Laïka leverages Dogecoin to become your gateway to endless meme possibilities, nurturing a sustainable memecoin ecosystem within the Dogecoin network."
        />
      </div>
      <div className="w-full rounded-[20px] bg-dark-gradient sm:h-[270px] h-[700px] mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 h-full  md:gap-7">
          <div className="flex justify-center items-center  ">
            <img
              src={images.text1}
              alt=""
              className="mix-blend-screen xl:w-[70%] lg:w-[70%] sm:h-[50%] h-[70%] w-[80%]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white m-auto text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center w-64 md:w-full lg:leading-[60px]">
              Make the <br /> Doge network{" "}
              <span className="text-gradient font-extrabold">competitive</span>
            </h1>
          </div>
          <div className="flex justify-center items-center  ">
            <img
              src={images.text2}
              alt=""
              className="mix-blend-screen xl:w-[70%] lg:w-[70%] sm:h-[50%] h-[70%] w-[80%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
