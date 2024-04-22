import React from "react";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Sputnik = () => {
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
            <div className="flex flex-col justify-evenly gap-7 mx-3">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[50px] xl:leading-[70px] ">
                Unlock Rewards with{" "}
                <span className="text-gradient font-extrabold">Sputnik I</span>{" "}
                on Wufiswap
              </h1>
              <p className="text-dimGrey text-base md:text-base lg:text-lg">
                Join the Sputnik I campaign on Wufiswap and turn your DRC20
                assets into valuable points. Engage in various activities like
                swapping, providing liquidity, staking, and referring.
              </p>
              <ButtonImage
                name="Go to Wufiswap"
                style="w-[71%] md:w-[30%] lg:w-[53%] xl:w-[39%] gap-1"
                img="dog2"
                Link="https://wufiswap.com/launch-app.html"
              />
            </div>
            <div className="flex flex-col z-[-10]">
              <div className="bg-[#0f1a27] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center">
                <div className="flex items-center justify-evenly gap-5 px-5 w-full">
                  <div className="bg-dark-gradient flex justify-center py-2 px-[2.2rem] md:w-[20%] rounded-[5px]">
                    <p className="text-white font-semibold text-xs text-center">
                      Swap
                    </p>
                  </div>
                  <h2 className="text-white font-semibold text-sm flex-1">
                    Earn 2 LAIKA points for each DOGE worth swapped.
                  </h2>
                </div>
              <div className="bg-[#0c121f] pt-5 w-full rounded-t-[10px] flex flex-col gap-6 items-center">
                <div className="flex items-center justify-evenly gap-5 px-5 w-full">
                  <div className="bg-dark-gradient flex justify-center py-2 px-[2.2rem] md:w-[20%] rounded-[5px]">
                    <p className="text-white font-semibold text-xs text-center">
                      Providing <br /> liquidity
                    </p>
                  </div>
                  <h2 className="text-white font-semibold text-sm flex-1">
                    Earn 3 LAIKA points for each DOGE worth provided every 6
                    hours.
                  </h2>
                </div>
                <div className="bg-[#090d17] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                  <div className="flex items-center justify-evenly gap-5 px-5 w-full">
                    <div className="bg-dark-gradient flex justify-center py-2 px-[2.2rem] md:w-[20%] rounded-[5px]">
                      <p className="text-white font-semibold text-xs text-center">
                        Staking
                      </p>
                    </div>
                    <h2 className="text-white font-semibold text-sm flex-1">
                      Earn 1 LAIKA point for each DOGE worth staked every 6
                      hours.
                    </h2>
                  </div>
                  <div className="bg-[#060910] py-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                    <div className="flex items-center justify-evenly gap-5 px-5 w-full">
                      <div className="bg-dark-gradient flex justify-center py-2 px-[2.2rem] md:w-[20%] rounded-[5px]">
                        <p className="text-white font-semibold text-xs text-center">
                          Referring
                        </p>
                      </div>
                      <h2 className="text-white font-semibold text-sm flex-1">
                        Earn 10% of your referral's points + an additional 5%
                        from their referrals.
                      </h2>
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
