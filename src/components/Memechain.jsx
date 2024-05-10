import React, { useRef, useEffect } from "react";
import Button from "./Button";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { Link } from "react-router-dom";
const Memechain = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
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
    <>
      <section className="my-20">
        <div className="flex flex-col gap-10 lg:gap-14 items-center " ref={sectionRef}>
          <h1 className="text-white m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-center">
            REAL
          </h1>
          <span className="text-gradient m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center">
            MEMECOINS
          </span>
          <h1 className="text-white m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-center">
            ARE ON
          </h1>
          <h1 className="text-white m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-center">
            THE LEADING
          </h1>
          <span className="text-gradient font-extrabold m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
            MEMECHAIN
          </span>
          <Link to={"/bridge"} onClick={scrollToTop}>
          <Button name="Bridge to Laïka now" style="px-6"/>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Memechain;
