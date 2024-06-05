import React, { useState } from "react";
import Button from "./Button";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Quests = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const [activeTab, setActiveTab] = useState("tweetToEarn");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case "tweetToEarn":
        return (
          <>
            <div className="lg:w-[60%] mx-auto lg:py-14">
              <h2 className="text-white text-center lg:w-[80%] mx-auto px-2">Participate in the Laika ecosystem by <span className="font-bold">interacting on the Testnet </span>to earn <span className="font-bold">LAIKA Points.</span>Quests are available for 48 hours, so stay tuned! </h2>
              <div className="flex md:flex-row flex-col justify-around mt-20 gap-10">
                <div className="flex flex-col justify-center items-center gap-8 px-2">
                  <h2 className="text-white font-bold text-center">
                    Swap DOGE to HUB, WEN, DNLD, DFAT, DBIT on <br /> Wufiswap testnet
                  </h2>
                  <a href="http://testnet.wufiswap.com/" target="_blank" className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                    <ButtonImage
                      name="Go to Wufiswap"
                      img="wufi"
                      style=" px-8 bg_gradient5"
                      imgStyle="w-8 h-8"
                      includeHoverEffect={false}
                    />
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h2 className="text-white font-bold text-center">
                    Provide liquidity in the DOGE/ <br />HUB, WEN, DNLD, DFAT, DBIT  liquidity pool
                  </h2>
                  <a href="http://testnet.wufiswap.com/" target="_blank" className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                    <ButtonImage
                      name="Go to Wufiswap"
                      img="wufi"
                      style=" px-8 bg_gradient5"
                      imgStyle="w-8 h-8"
                      includeHoverEffect={false}
                    />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      case "supportLaika":
        return (
          <>
            <div className="py-0 sm:py-10">
              <div className="flex flex-col md:flex-row gap-10 lg:gap-0 justify-between mx-auto w-[90%] sm:w-[80%]">
                <div className="lg:w-[50%] md:w-[100%] w-full">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-white text-xl font-semibold">
                      Join the Laïka Discord and climb Roles
                    </h2>
                    <p className="text-dimGrey">
                      The Laïka Discord server serves as the central hub for community engagement and interaction. You can join discussions, participate in events, and collaborate with fellow community members. By actively engaging on Discord and completing specific tasks, you'll be able to earn XP and level up their roles, unlocking access to exclusive channels and perks.
                    </p>
                    <div className="xl:w-[35%] lg:w-[55%] md:w-[77%] w-[60%]">
                      <a href="https://discord.com/invite/YTHa4fda5r" target="_blank">
                        <ButtonImage
                          name="Join Laïka Discord"
                          img="discord"
                          style="bg_gradient5 cursor-pointer"
                          imgStyle="w-7"
                          includeHoverEffect={false}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[40%] md:w-[100%] w-full mt-5 lg:mt-0 ">
                  <div className="bg-[#0e131c] p-6 rounded-[20px] ">
                    <div>
                      <img src={images.laikaDiscord} alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 bg-[#161616] items-center text-white font-semibold justify-between p-3 rounded-b-[20px]">
                      <h1>Laïka Discord Community</h1>
                      <a href="https://discord.com/invite/YTHa4fda5r" className="py-2 px-9 rounded-[5px] text-white bg-[#2544a7] hidden sm:block" target="_blank">Join</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-6 lg:gap-0 items-center flex-col-reverse md:flex-row mx-auto lg:w-[80%] w-full mt-7 sm:mt-20 px-4">
                <div className="lg:w-[40%] md:w-[60%] w-full">
                  <div className="bg-[#0e131c] p-6 py-10 rounded-[20px]">
                    <div className="flex flex-col gap-3 justify-center items-center">
                      <div>
                        <img src={images.logolaika} alt="" className="w-[40%] lg:w-[30%] mx-auto" />
                      </div>
                      <h2 className="text-white font-semibold text-xl">X</h2>
                      <div>
                        <img src={images.logozealy} alt="" className="w-[40%] lg:w-[30%] mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[40%] md:w-[60%] w-full my-7 lg:my-0 ">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-white text-xl font-semibold">
                      Explore our Zealy Quests
                    </h2>
                    <p className="text-dimGrey ">
                      Discord Sputnik 1 Zealy Quests, a series of challenges designed to encourage community participation and engagement. Quests range from inviting friends to join the Laïka community to completing daily tasks on X.
                    </p>
                    <div className="lg:w-[50%] md:w-[70%] w-[80%]">
                      <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                      <Button
                        name="Go to Zealy "
                        style="w-[50%] bg_gradient5 cursor-pointer"
                        imgStyle=" h-8"
                        includeHoverEffect={false}
                      />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        );
    }
  };
  return (
    <>
      <section className="my-8 md:my-32">
        <div className="w-full rounded-[20px]">
          <div className="flex justify-around gap-0 py-0 h-[7vh] xl:h-[60px] md:h-[70px] text-center items-center rounded-t-[20px]">
            <button
              className={`text-white w-[50%] bg_gradient5 h-[100%]  rounded-tl-[20px]  ${activeTab === "tweetToEarn"
                ? "opacity-100 font-semibold "
                : "opacity-25 font-extralight "
                }`}
              onClick={() => handleTabClick("tweetToEarn")}
            >
              Testnet Quests
            </button>
            <button
              className={`text-white w-[50%] bg_gradient5 h-[100%]   rounded-tr-[20px]   ${activeTab === "supportLaika"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("supportLaika")}
            >
              Social Interactions
            </button>
          </div>
          <div className="bg-dark-gradient py-12 rounded-b-[20px]">
            {renderContent()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quests;
