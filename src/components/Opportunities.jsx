import React, {useRef, useEffect} from "react";
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

  useEffect(() => {
    if (intersection && intersection.intersectionRatio >= 0.5) {
      gsap.to(".pop-up", {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        ease: "elastic.out(4.7)",
      });
    } else {
      gsap.to(".pop-up", {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        ease: "elastic.in(4.7)",
      });
    }
  }, [intersection]);
  return (
    <section id="airdrop" className="my-28 lg:mt-[275px] xl:mt-[360px]">
      <Link className="text-primary hover:opacity-65">{">"} Solving the Dogechain problem</Link>
      <div className="flex flex-col justify-center items-center text-center h-[50vh] sm:h-[40vh]">
        <h1 className="text-white text-5xl sm:text-4xl md:text-5xl">
          Turning <span className="text-gradient_sec font-extrabold">Doge</span>{" "}
          obstacles <br />
          into opportunities with{" "}
          <span className="text-gradient font-extrabold">Laïka</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12 lg:gap-6 mt-3" ref={sectionRef}>
        <OpportunitiesCard
          img="scalibilty"
          name="Scalability"
          desc="The DRC20 protocol has surged DOGE's transaction activity, underscoring the network's scalability challenges and the pressing need for efficient transaction processing solutions."
        />
        <OpportunitiesCard
          img="setting"
          name="Programmability"
          desc="DRC20's growth on DOGE is hampered by its technical challenges, requiring simpler development solutions to unleash its full potential."
        />
        <OpportunitiesCard
          img="thumb"
          style="h-[50px] w-[35px] rotate-[180deg] "
          name="Infinite meme potential"
          desc="Laïka is your gateway to endless meme possibilities, fostering a sustainable memecoin ecosystem."
        />
      </div>
      <div className="w-full rounded-[20px] bg-dark-gradient sm:h-[300px] h-[700px] mt-16">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 h-full gap-7">
    <div className="flex justify-center items-center md:order-last lg:order-first">
      <img
        src={images.text1}
        alt=""
        className="mix-blend-screen sm:w-[70%] sm:h-[50%] h-[100%] w-full"
      />
    </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white m-auto text-4xl md:text-4xl lg:text-7xl font-semibold text-center lg:leading-[70px]">
        Make the Dogechain{" "}
        <span className="text-gradient font-extrabold">universal</span>
      </h1>
    </div>
    <div className="flex justify-center items-center md:order-first lg:order-last">
      <img
        src={images.text2}
        alt=""
        className="mix-blend-screen sm:w-[70%] sm:h-[50%] h-[100%] w-full"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default Opportunities;
