import React from "react";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Sputnik = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
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
                on testnet
              </h1>
              <p className="text-dimGrey text-base md:text-base xl:text-lg">
                Join the Sputnik I campaign by completing testnet tasks to become an early adopter of the Laïka network. Engage in various activities such as swapping, providing liquidity, minting NFTs, voting, etc. Tasks will be released gradually; visit this page regularly to ensure you don't miss out.
              </p>
              <Link to={"/faucets"} className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                <ButtonImage
                  name="Go to Faucets"
                  img="faucetdrop"
                  style="py-3"
                  imgStyle="w-5 h-5"
                />
              </Link>
              {/* <ButtonImage
                name="Go to Wufiswap"
                style="w-[71%] md:w-[30%] lg:w-[53%] xl:w-[39%] gap-1"
                img="dog2"
                Link="https://wufiswap.com/launch-app.html"
              /> */}
            </div>
            <div className="flex flex-col z-[-10]">
              <div className="bg-[#0f1a27] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center">
                <div className="flex items-center flex-col sm:flex-row gap-5 justify-between px-3 sm:gap-2  w-full">

                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-0  items-center">
                    <div className="bg-dark-gradient flex justify-center py-2 px-8 rounded-[5px]">
                      <p className="text-white font-semibold text-xs text-center  text-nowrap">
                        Task 1
                      </p>
                    </div>
                    <h2 className="text-white pl-0 sm:pl-6  font-semibold text-sm text-center sm:text-left  ">
                      Swap DOGE to USDT on Wufiswap testnet
                    </h2>
                  </div>

                  <ButtonImage
                    name="Go to task"
                    style="text-sm px-2 py-0 md:w-[90%] "
                    img="dog2"
                    Link="https://wufiswap.com/launch-app.html"
                    imgStyle="w-5 h-5"
                  />
                </div>
                <div className="bg-[#0c121f] pt-5 w-full rounded-t-[10px] flex flex-col gap-6 items-center">
                  <div className="flex items-center flex-col sm:flex-row gap-5 justify-between px-3 sm:gap-2 w-full">

                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-0  items-center">
                      <div className="bg-dark-gradient flex justify-center py-2  px-8 rounded-[5px]">
                        <p className="text-white font-semibold text-xs text-center text-nowrap">
                          Task 2
                        </p>
                      </div>

                      <h2 className="text-white pl-0 sm:pl-6  font-semibold text-sm text-center sm:text-left ">
                        Provide liquidity in the DOGE/USDT liquidity pool
                      </h2>
                    </div>


                    <ButtonImage
                      name="Go to task"
                      style="text-sm px-2 py-0 w-full md:w-[90%] "
                      img="dog2"
                      Link="https://wufiswap.com/launch-app.html"
                      imgStyle="w-5 h-5"
                    />

                  </div>
                  <div className="bg-[#090d17] pt-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                    <div className="flex items-center justify-start gap-6 px-3  w-full">
                      <div className="bg-dark-gradient flex justify-center py-2  px-8  rounded-[5px]">
                        <p className="text-white font-semibold text-xs text-center  text-nowrap">
                          Task 3
                        </p>
                      </div>
                      <div className="flex  gap-2 items-center">
                        <img src={images.lock} alt="" width={20} />
                        <h2 className="text-white font-semibold text-sm flex-1 text-center">
                          Tesnet quest locked
                        </h2>
                      </div>

                    </div>
                    <div className="bg-[#060910] py-5 rounded-t-[10px] flex flex-col gap-6 items-center w-full">
                      <div className="flex items-center justify-start gap-6 px-3  w-full">
                        <div className="bg-dark-gradient flex justify-center py-2  px-8 rounded-[5px]">
                          <p className="text-white font-semibold text-xs text-center  text-nowrap">
                            Task 4
                          </p>
                        </div>
                        <div className="flex  gap-2 items-center">
                          <img src={images.lock} alt="" width={20} />
                          <h2 className="text-white font-semibold text-sm flex-1 text-center">
                            Tesnet quest locked
                          </h2>
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
