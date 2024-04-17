import React, {useRef, useEffect} from 'react'
import gsap from "gsap";
import { useIntersection } from "react-use";
const Engage = () => {
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
            <section className='lg:my-20 md:my-20 mt-96 pt-20 mb-[20px]'>
                <div className='flex flex-col items-center gap-6' ref={sectionRef}>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-[70px] w-[55%] text-center'>Engage with Laïka Ecosystem
                        & Earn <span className='text-gradient_sec font-extrabold'>Meme Points</span></h1>
                    <p className="text-dimGrey text-lg md:text-base lg:text-lg xl:text-base text-center w-[70%]"> Your active engagement through various interactions and contributions is rewarded with Meme Points. Whether you're trading, staking, or simply being an active community member, every action counts. Accumulate these points and unlock exclusive benefits, enhancing your experience within the Laïka Layer 2. Join us, get involved, and earn rewards as you contribute to our growing ecosystem.</p>
                </div>

            </section>
        </>
    )
}

export default Engage