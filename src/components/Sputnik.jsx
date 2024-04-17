import React, {useRef, useEffect} from "react";
import * as images from  "../assets"
import ButtonImage from "./ButtonImage";
const Sputnik = () => {

  return (
    <>
      <section className="my-10">
        <div className="flex justify-center">
          <button className="text-primary border border-gray-800 py-3 px-6 rounded-[9px]">
            Sputnik 1 Program
          </button>
        </div>
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-28">
            <div className="flex flex-col justify-evenly gap-6  mx-3">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-[70px] ">
                Unlock Rewards with{" "}
                <span className="text-gradient font-extrabold">Sputnik I</span>{" "}
                on Wufiswap
              </h1>
              <p className="text-dimGrey text-lg md:text-base lg:text-lg xl:text-xl">
                Join the Sputnik I campaign on Wufiswap and turn your DRC20
                assets into valuable Meme Points. Engage in various activities
                like swapping, providing liquidity, staking, referring, and
                participating in the Zealy campaign to earn points. These points
                are your ticket to a share of the $LAIKA airdrop.
              </p>
              <ButtonImage
                name="Join the ecosystem"
                style="w-[57%] md:w-[48%] lg:w-[55%] xl:w-[41%] gap-1"
                img="dog2"
              />
            </div>
            <div className="flex flex-col relative z-[-10]">
              <div className="bg-[#0f1a27] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-6 rounded-[5px]">
                  <span className="text-white font-semibold text-sm">Swap</span>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 2 LAIKA points for each DOGE worth swapped.
                </h2>
              </div>
              <div className="bg-[#0c121f] absolute w-full md:top-[21%] lg:top-[14%] xl:top-[19%] top-[85%] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-4 md:px-4 lg:px-4 xl:px-0 text-center rounded-[5px]">
                  <span className="text-white font-semibold text-sm">
                    Providing liquidity
                  </span>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 3 LAIKA points for each DOGE worth provided every 6
                  hours.
                </h2>
              </div>
              <div className="bg-[#090d17] absolute w-full md:top-[45%] lg:top-[32%] xl:top-[42%] top-[188%] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-6 rounded-[5px]">
                  <span className="text-white font-semibold text-sm">Staking</span>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 1 LAIKA point for each DOGE worth staked every 6 hours.
                </h2>
              </div>
              <div className="bg-[#060910] absolute w-full md:top-[69%] lg:top-[47%] xl:top-[61%] top-[289%] p-5 rounded-t-[10px] flex gap-6 items-center">
                <div className="bg-dark-gradient py-2 px-6 rounded-[5px]">
                  <span className="text-white font-semibold text-sm">Referring</span>
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Earn 10% of your referral's points + an additional 5% from
                  their referrals.
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
