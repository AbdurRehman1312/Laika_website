import React, { useState, useEffect } from "react";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Sputnik = () => {
  const scrollToTop = () => window.scrollTo({ top: 0 });
  // Helper to get current UTC time in milliseconds
  // const getUTCTime = () => new Date().getTime();

  // // Retrieve or set the end time in localStorage
  // const getEndTime = () => {
  //   const savedEndTime = localStorage.getItem('endTime');
  //   const currentTime = getUTCTime();

  //   if (savedEndTime && parseInt(savedEndTime, 10) > currentTime) {
  //     return parseInt(savedEndTime, 10);
  //   } else {
  //     const endTime = currentTime + 48 * 60 * 60 * 1000; // Adds exactly 48 hours to the current time
  //     localStorage.setItem('endTime', endTime.toString());
  //     return endTime;
  //   }
  // };

  // const [endTime, setEndTime] = useState(getEndTime());

  // // Calculate the time left in seconds
  // const calculateTimeLeft = () => {
  //   const currentTime = getUTCTime();
  //   const difference = endTime - currentTime;
  //   return Math.floor(difference / 1000);
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   // Set up an interval to decrement the time left every second
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   // Clear the interval on component unmount
  //   return () => clearInterval(timer);
  // }, [endTime]);

  // // Function to format time in HH:MM:SS
  // const formatTime = (time) => {
  //   const hours = Math.floor(time / 3600);
  //   const minutes = Math.floor((time % 3600) / 60);
  //   const seconds = time % 60;
  //   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // };

  return (
    <>
      <section className="">
        <div className="flex justify-start mt-20 ml-2">
          <Link className="text-primary hover:opacity-65">
            {">"} Sputnik 1 Program
          </Link>
        </div>
        <div className="my-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
            <div className="flex flex-col justify-evenly gap-10 mx-3">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[50px] xl:leading-[50px] ">
                Explore Laïka through
                <br />
                <span className="text-gradient font-extrabold">Sputnik I</span>{" "}
                Incentive <br />
                Campaign
              </h1>
              <p className="text-dimGrey text-base md:text-base xl:text-lg">
                Join the Sputnik I Campaign by completing Testnet and Social Tasks to become an early adopter of the Laïka Network. Engage in various activities such as swapping, providing liqui dity, minting NFTs, voting and much more. Tasks will be released gradually; visit this page regularly to ensure you don't miss out LAIKA Points.
              </p>
              <Link to={"/faucets"} className="flex lg:w-[80%]" onClick={scrollToTop}>
                <ButtonImage
                  name="Go to Faucets"
                  img="faucetdrop"
                  style="py-3"
                  imgStyle="w-5 h-5"
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="bg-[#0f1a27] w-full pt-5 rounded-t-[10px] flex flex-col gap-6 items-center">
                <div className="flex items-center justify-between px-3 sm:gap-2  w-full">
                  <div className="flex items-center gap-5">
                    <div className="bg_gradient5  flex justify-center items-center md:w-[36px] md:h-[30px] w-[30px] p-2 flex-shrink-0 h-[30px] md:p-3 rounded-[5px]">
                      <img src={images.arrow2} alt="" className="w-full object-contain" />
                    </div>
                    <div className="text-white tracking-wider font-thin text-sm">
                      <span className="font-bold"> Claim 5 DOGE  </span> by using {" "}<a href="http://laikachain.dog/faucets" className="underline cursor-pointer">faucet</a>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0c121f] pt-5 w-full rounded-t-[10px] flex flex-col gap-6 items-center">
                  <div className="flex items-center justify-between px-3 sm:gap-2 w-full">
                    <div className="flex items-center gap-5">
                      <div className="bg_gradient5  flex justify-center items-center md:w-[36px] md:h-[30px] w-[30px] p-1 flex-shrink-0 h-[30px] md:p-1 rounded-[5px]">
                        <img src={images.undoredo} alt="" className="h-[100%] w-full object-contain" />
                      </div>
                      <div className="text-white flex flex-col gap-1 font-normal text-sm">
                        <span className="font-thin"> Wow! Now, go to <a href="http://testnet.wufiswap.com/" className="underline cursor-pointer">Wufiswap</a> and <span className="font-bold">swap 1 DOGE to MOG </span></span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#090d17] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                    <div className="flex items-center justify-between px-3 sm:gap-2 w-full">
                      <div className="flex items-center gap-5">
                        <div className="bg_gradient5 flex justify-center items-center md:w-[36px] md:h-[30px] w-[30px] p-2 flex-shrink-0 h-[30px] md:p-3 rounded-[5px]">
                          <img src={images.swapVertical} alt="" className="w-full object-contain" />
                        </div>
                        <div className="text-white tracking-wider font-thin text-sm">
                          <span className="font-bold"> Provide liquidity <span className="font-thin">in the DOGE/ MOG liquidity pool</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#060910] py-2 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                      <div className="flex items-center justify-between py-3 w-full">
                        <div className="text-white tracking-wider pl-4 sm:pl-5 font-thin text-sm  w-[70%] sm:w-full text-left sm:text-base">
                          <span className="font-bold"> Earn <span className="text-gradient font-extrabold">Laika points</span> with new quests every 48 hours</span>
                        </div>
                        <div className="flex flex-col items-center text-white pr-5 md:pr-7">
                          <p className="font-thin text-center text-xs md:text-lg text-nowrap">Ends On</p>
                          <p className="timer text-base text-nowrap">29 <sup>th</sup> June, 4pm UTC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sputnik;
