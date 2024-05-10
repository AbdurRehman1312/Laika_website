import React, { useState } from "react";
import Button from "./Button";
import * as images from "../assets";
import ProgressBar from "./ProgressBar";

const Quests = () => {
  const [activeTab, setActiveTab] = useState("mainQuest");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case "tweetToEarn":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-20 md:gap-6 items-center mx-7 py-12">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Post a Tweet about Laïka
                </h1>
                <div className="w-[80%]">
                  <p className="text-dimGrey text-sm text-center ">
                    Create your own tweet with @Laika_Layer2 and $LAIKA included in the content to get  XXX points!
                  </p>
                </div>
                <p className="text-[#616D9A] text-sm text-center">Limit: 3 tweets/day, reset at 00:00 UTC</p>
                <div className="flex  items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Write a tweet
                  </a>

                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Quote Laïka Posts
                </h1>
                <div className="w-[80%]">
                  <p className="text-dimGrey text-sm text-center ">
                    Create your own tweet with @Laika_Layer2 and $LAIKA included in the content to get  XXX points!
                  </p>
                </div>
                <p className="text-[#616D9A] text-sm text-center">Limit: 2 tweets/day, reset at 00:00 UTC </p>
                <div className="flex  items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Quote
                  </a>

                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Earn through Replies
                </h1>
                <div className="w-[80%]">
                  <p className="text-dimGrey text-sm text-center ">
                    Reply others' tweet with @Laika_Layer2  to get XXX points!
                  </p>
                </div>
                <div className="flex  items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Reply
                  </a>

                </div>
              </div>
            </div>
          </>
        );
      case "inviteToEarn":
        return (
          <>
            <div className="flex flex-col items-center gap-8 md:gap-4 py-8 ">
              <div className="flex items-center gap-2">
                <img src={images.chain} alt="" width={18} />
                <h1 className="text-white text-center">Your referral link</h1>
              </div>
              <div className="sm:w-[30%] flex justify-center ">
                <a href="" target="_blank" className="text-white font-extralight text-center sm:text-base text-sm block underline underline-offset-2 opacity-75">
                  https://www.sample.info/?soda=punishment&suggestion=number
                </a>
              </div>
              
            </div>
              <div className="flex justify-center mt-2 md:0">
              <ProgressBar progress={12}/>
              </div>

          </>
        );
      case "dailyTasks":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-0 gap-12 md:gap-0 justify-center mx-7 md:mx-48 md:py-12">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Daily GM on discord
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-10 text-white"
                  >
                    Go
                  </a>
                  <a href="" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Daily connection on Laïka
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-7 text-white"
                  >
                    Connect
                  </a>
                  <a href="" target="_blank">
                    <Button name="Check" style="px-7 " />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      case "🦴🦴🦴":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-0 gap-16 md:gap-6 items-end justify-center mx-7  py-12">

              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Put “🦴” in your Twitter name
                </h1>
                <div className="lg:w-[40%] ">
                  <p className="text-dimGrey text-base text-center ">
                    We will take a random Snapshot
                    about this.
                  </p>
                </div>
                <div className="flex  items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-10 text-white"
                  >
                    Go
                  </a>

                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Make Doge bigger
                </h1>
                <div className="lg:w-[50%]">
                  <p className="text-dimGrey text-sm text-center ">
                    Make a post that tells your story with the biggest memecoin of them all, Dogecoin (don’t forget to tag @Billym2k & @Laika_Layer2)
                  </p>
                </div>
                <div className="flex  items-center justify-center">
                  <a
                    href=""
                    target="_blank"
                    className="border rounded py-2 px-10 text-white"
                  >
                    Post
                  </a>

                </div>
              </div>
            </div>
          </>
        );
      case "supportLaika":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-0 gap-14 md:gap-6 items-end mx-7 md:py-12">
            <div className="flex flex-col items-center gap-2">
              <div>
                <img src={images.dog4} alt="" width={70} />
              </div>
              <h1 className="text-white text-center">
                Follow Wufiswap on Twitter
              </h1>

              <div className="flex  items-center mt-4 justify-center">
                <a
                  href=""
                  target="_blank"
                  className="border rounded py-2 px-10 text-white"
                >
                  Follow
                </a>

              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <img src={images.dog5} alt="" width={73} />
              </div>
              <h1 className="text-white text-center">
                Join Wufiswap on Telegram
              </h1>

              <div className="flex  items-center mt-4 justify-center">
                <a
                  href=""
                  target="_blank"
                  className="border rounded py-2 px-10 text-white"
                >
                  Join
                </a>

              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <img src={images.bone} alt="" width={85} />
              </div>
              <h1 className="text-white text-center">
                Follow WIWW on Twitter
              </h1>

              <div className="flex  items-center mt-4 justify-center">
                <a
                  href=""
                  target="_blank"
                  className="border rounded py-2 px-10 text-white"
                >
                  Follow
                </a>

              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <img src={images.bone1} alt="" width={68} />
              </div>
              <h1 className="text-white text-center">
                Download WIWW Wallet
              </h1>

              <div className="flex  items-center mt-4 justify-center">
                <a
                  href=""
                  target="_blank"
                  className="border rounded py-2 px-7 text-white"
                >
                  Download
                </a>

              </div>
            </div>
          </div>
        );
      case "mainQuest":
        return(
          <>
           {/* <>
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="flex items-center gap-1">
                <img src={images.lock} alt="" width={20} />
                <h1 className="text-white text-center">Tesnet quests locked</h1>
              </div>

              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
                Tesnet interaction quests coming soon.
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
          </> */}

          <div className="flex flex-col items-center gap-4 py-8">
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
          </div>
        </>
          

         
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className="my-8 md:my-32">
        <div className="w-full rounded-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-0 xl:gap-0 bg-dark-gradient2 py-10 md:py-5 lg:py-0 h-[40vh] xl:h-[60px] lg:h-[70px] md:h-[90px] text-center items-center rounded-t-[20px]">
            <button
              className={`text-white  ${activeTab === "tweetToEarn"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight "
                }`}
              onClick={() => handleTabClick("tweetToEarn")}
            >
              Tweet-to-Earn
            </button>
            <button
              className={`text-white  ${activeTab === "inviteToEarn"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("inviteToEarn")}
            >
              Invite-to-Earn
            </button>
            <button
              className={`text-white  ${activeTab === "dailyTasks"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("dailyTasks")}
            >
              Daily Tasks
            </button>
            <button
              className={`text-white  ${activeTab === "🦴🦴🦴"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("🦴🦴🦴")}
            >
              🦴🦴🦴
            </button>
            <button
              className={`text-white   ${activeTab === "supportLaika"
                ? "opacity-100 font-semibold"
                : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("supportLaika")}
            >
              Support Laïka Ecosystem
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
