import React from "react";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Sputnik = () => {
  return (
    <>
      <section className="mt-[2.5rem] mb-80 md:mb-56 lg:mb-0">
        <div className="flex justify-start mt-20 ml-2">
          <Link className="text-primary hover:opacity-65">{">"} Sputnik 1 Program</Link>
        </div>
        <div className="my-24">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-28">
            <div className="flex flex-col justify-evenly gap-7 mx-3">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[50px] xl:leading-[70px] ">
                Unlock Rewards with{" "}
                <span className="text-gradient font-extrabold">Sputnik I</span>{" "}
                on Wufiswap
              </h1>
              <p className="text-dimGrey text-base md:text-base lg:text-lg">
                Join the Sputnik I campaign on Wufiswap and turn your DRC20 assets into valuable points. Engage in various activities like swapping, providing liquidity, staking, and referring.
              </p>
              <ButtonImage
                name="Go to Wufiswap"
                style="w-[71%] md:w-[34%] lg:w-[53%] xl:w-[39%] gap-1"
                img="dog2"
                Link="https://wufiswap.com/launch-app.html"
              />
            </div>
            <div className="flex flex-col relative z-[-10]">
              <div className="bg-[#0f1a27] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-[2.2rem] rounded-[5px]">
                  <p className="text-white font-semibold text-xs text-center">Swap</p>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 2 LAIKA points for each DOGE worth swapped.
                </h2>
              </div>
              <div className="bg-[#0c121f] absolute w-full md:top-[83%] lg:top-[17%] xl:top-[19%] top-[85%] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient px-[1.5rem] md:px-0  py-2 md:flex  md:justify-center lg:block lg:px-[1.5rem] xl:px-0 xl:flex  xl:justify-center rounded-[5px]">
                  <p className="text-white font-semibold text-xs text-center w-1/2">
                    Providing liquidity
                  </p>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 3 LAIKA points for each DOGE worth provided every 6 hours.
                </h2>
              </div>
              <div className="bg-[#090d17] absolute w-full md:top-[195%] lg:top-[39%] xl:top-[43%] top-[185%] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-[1.7rem] rounded-[5px]">
                  <p className="text-white font-semibold text-xs text-center">Staking</p>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 1 LAIKA point for each DOGE worth staked every 6 hours.
                </h2>
              </div>
              <div className="bg-[#060910] absolute w-full md:top-[280%] lg:top-[57%] xl:top-[62%] top-[283%] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-[1.4rem] rounded-[5px]">
                  <p className="text-white font-semibold text-xs text-center">Referring</p>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 10% of your referral's points + an additional 5% from their referrals.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sputnik;
