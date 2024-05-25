import React, { useState } from "react";
import Button from "./Button";
import * as images from "../assets";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const Quests = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  const [activeTab, setActiveTab] = useState("mainQuest");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case "tweetToEarn":
        return (
          <>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6  mx-7 pb-12">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Follow Laïka on Twitter
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://twitter.com/Laika_Layer2/"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Follow
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Discord Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://discord.com/invite/YTHa4fda5r"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Join
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://twitter.com/Laika_Layer2/status/1768690859673874692"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Engage
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center my-10 ">
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mb-10">
                To discover all the Sputnik 1 quests, explore platforms below.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-7">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[98px] h-[30px]">
                    <img
                      src={images.medium}
                      alt=""
                      className="w-full h-[90%]"
                    />
                  </div>
                  <a href="https://medium.com/@laika-layer2" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[29px] h-[29px]">
                    <img
                      src={images.discord}
                      alt=""
                      className="w-full h-[100%]"
                    />
                  </div>
                  <a href="https://discord.com/invite/YTHa4fda5r" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img
                      src={images.Zealy}
                      alt=""
                      className="w-full h-[100%]"
                    />
                  </div>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
              </div>
            </div> */}
            <div className="lg:w-[60%] mx-auto lg:py-14">
              <h2 className="text-white text-center lg:w-[80%] mx-auto">Participate in the Laika ecosystem by <span className="font-bold">interacting on the Testnet </span>to earn <span className="font-bold">LAIKA Points.</span>Quests are available for 48 hours, so stay tuned! </h2>
              <div className="flex md:flex-row flex-col justify-around mt-20 gap-10">
                <div className="flex flex-col justify-center items-center gap-8">
                  <h2 className="text-white font-bold text-center">
                    Swap DOGE to USDT on <br /> Wufiswap testnet
                  </h2>
                  <a href="" target="_blank" className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                    <ButtonImage
                      name="Go to Wufiswap"
                      img="wufi"
                      style=" px-8 bg_gradient5"
                      imgStyle="w-full h-8"
                      includeHoverEffect={false}
                    />
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                  <h2 className="text-white font-bold text-center">
                    Provide liquidity in the DOGE/ <br />USDT liquidity pool
                  </h2>
                  <a href="" target="_blank" className="flex justify-center lg:w-[80%]" onClick={scrollToTop}>
                    <ButtonImage
                      name="Go to Wufiswap"
                      img="wufi"
                      style=" px-8 bg_gradient5"
                      imgStyle="w-full h-8"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6  mx-7 pb-12">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Follow Laïka on Twitter
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://twitter.com/Laika_Layer2/"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Follow
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Discord Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://discord.com/invite/YTHa4fda5r"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Join
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://twitter.com/Laika_Layer2/status/1768690859673874692"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Engage
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center my-10 ">
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mb-10">
                To discover all the Sputnik 1 quests, explore platforms below.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-7">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[98px] h-[30px]">
                    <img
                      src={images.medium}
                      alt=""
                      className="w-full h-[90%]"
                    />
                  </div>
                  <a href="https://medium.com/@laika-layer2" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[29px] h-[29px]">
                    <img
                      src={images.discord}
                      alt=""
                      className="w-full h-[100%]"
                    />
                  </div>
                  <a href="https://discord.com/invite/YTHa4fda5r" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img
                      src={images.Zealy}
                      alt=""
                      className="w-full h-[100%]"
                    />
                  </div>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
              </div>
            </div>
          </>
        );

        return (

          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6  mx-7 pb-12">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Follow Laïka on Twitter
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://twitter.com/Laika_Layer2/"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Follow
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Discord Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://discord.com/invite/YTHa4fda5r"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Join
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href="https://twitter.com/Laika_Layer2/status/1768690859673874692"
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Engage
                  </a>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center my-10 ">
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mb-10">
                To discover all the Sputnik 1 quests, explore platforms below.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-7">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[98px] h-[30px]">
                    <img
                      src={images.medium}
                      alt=""
                      className="w-full h-[90%]"
                    />
                  </div>
                  <a href="https://medium.com/@laika-layer2" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[29px] h-[29px]">
                    <img
                      src={images.discord}
                      alt=""
                      className="w-full h-[100%]"
                    />
                  </div>
                  <a href="https://discord.com/invite/YTHa4fda5r" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img
                      src={images.Zealy}
                      alt=""
                      className="w-full h-[100%]"
                    />
                  </div>
                  <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank" className="border rounded py-2 px-7 text-white">
                    Join
                  </a>
                </div>
              </div>
            </div>


            {/* <div className="flex flex-col items-center gap-4 py-8">
            <div className="flex items-center gap-1">
              <img src={images.lock} alt="" width={20} />
              <h1 className="text-white text-center">Main quests locked</h1>
            </div>

            <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
            To unlock all Laika quests and collect Meme Points, you must first complete these three steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6  mx-7 pb-12">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-white text-center">
                Follow Laïka on Twitter
              </h1>
              <div className="flex gap-4 items-center justify-center">
                <a
                  href="https://twitter.com/Laika_Layer2/"
                  target="_blank"
                  className="border rounded py-2 px-7 text-white"
                >
                  Follow
                </a>
                <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                  <Button name="Check" style="px-7 " />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-white text-center">
              Join the Laïka Telegram Group
              </h1>
              <div className="flex gap-4 items-center justify-center">
                <a
                  href="https://discord.com/invite/YTHa4fda5r"
                  target="_blank"
                  className="border rounded py-2 px-7 text-white"
                >
                  Join
                </a>
                <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                  <Button name="Check" style="px-7 " />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-white text-center">
                RT & Like the Campaign Tweet
              </h1>
              <div className="flex gap-4 items-center justify-center">
              <a
                  href="https://twitter.com/Laika_Layer2/status/1768690859673874692"
                  target="_blank"
                  className="border rounded py-2 px-7 text-white"
                >
                  See Tweet
                </a>
                <a href="https://zealy.io/cw/laikalayer2/questboard" target="_blank">
                  <Button name="Check" style="px-7 " />
                </a>
              </div>
            </div>
          </div> */}
          </>



        );
    }
  };

  return (
    <>
      <section className="my-8 md:my-32">
        <div className="w-full rounded-[20px]">
          <div className="flex justify-around md:flex-row flex-col  gap-3 md:gap-3 lg:gap-0 xl:gap-0 bg-dark-gradient2 py-10 md:py-5 lg:py-0 h-[40vh] xl:h-[60px] lg:h-[70px] md:h-[90px] text-center items-center rounded-t-[20px]">
            <button
              className={`text-white  ${activeTab === "tweetToEarn"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight "
                }`}
              onClick={() => handleTabClick("tweetToEarn")}
            >
              Testnet Quests
            </button>
            <button
              className={`text-white   ${activeTab === "supportLaika"
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
