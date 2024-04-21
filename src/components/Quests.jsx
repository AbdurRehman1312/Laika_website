import React, { useState } from "react";
import Button from "./Button";
import * as images from "../assets";
const Quests = () => {
  const [activeTab, setActiveTab] = useState("tweetToEarn");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "tweetToEarn":
        return (
          <>
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
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Telegram Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
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
                    <img src={images.medium} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="w-[29px] h-[29px]">
                    <img src={images.discord} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img src={images.Zealy} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case "inviteToEarn":
         return (
          <>
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
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Telegram Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
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
                    <img src={images.medium} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="w-[29px] h-[29px]">
                    <img src={images.discord} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img src={images.Zealy} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case "dailyTasks":
         return (
          <>
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
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Telegram Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
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
                    <img src={images.medium} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="w-[29px] h-[29px]">
                    <img src={images.discord} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img src={images.Zealy} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case "🦴🦴🦴":
         return (
          <>
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
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Telegram Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
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
                    <img src={images.medium} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="w-[29px] h-[29px]">
                    <img src={images.discord} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img src={images.Zealy} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case "supportLaika":
         return (
          <>
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
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  Join the Laïka Telegram Group
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-white text-center">
                  RT & Like the Campaign Tweet
                </h1>
                <div className="flex gap-4 items-center justify-center">
                  <button className="border rounded py-2 px-7 text-white">
                    Follow
                  </button>
                  <Button name="Check" style="px-7 " />
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
                    <img src={images.medium} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                <div className="w-[29px] h-[29px]">
                    <img src={images.discord} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[82px] h-[28px]">
                    <img src={images.Zealy} alt="" className="w-full h-[100%]" />
                  </div>
                  <button className="border rounded py-2 px-7 text-white">
                    Join
                  </button>
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
              className={`text-white  ${
                activeTab === "tweetToEarn"
                  ? "opacity-100 font-semibold"
                  : "opacity-25 font-extralight "
              }`}
              onClick={() => handleTabClick("tweetToEarn")}
            >
              Tweet-to-Earn
            </button>
            <button
              className={`text-white  ${
                activeTab === "inviteToEarn"
                  ? "opacity-100 font-semibold"
                  : "opacity-25 font-extralight"
              }`}
              onClick={() => handleTabClick("inviteToEarn")}
            >
              Invite-to-Earn
            </button>
            <button
              className={`text-white  ${
                activeTab === "dailyTasks"
                  ? "opacity-100 font-semibold"
                  : "opacity-25 font-extralight"
              }`}
              onClick={() => handleTabClick("dailyTasks")}
            >
              Daily Tasks
            </button>
            <button
              className={`text-white  ${
                activeTab === "🦴🦴🦴"
                  ? "opacity-100 font-semibold"
                  : "opacity-25 font-extralight"
              }`}
              onClick={() => handleTabClick("🦴🦴🦴")}
            >
              🦴🦴🦴
            </button>
            <button
              className={`text-white   ${
                activeTab === "supportLaika"
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
            {/* Additional content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quests;
