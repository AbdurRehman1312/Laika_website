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
                Tesnet interaction quests coming soon. You can
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
                To discover more task, consult the links below
              </p>
              <div className="flex items-center gap-7">

                <div className="flex flex-col items-center gap-4">
                <img src={images.medium} alt="" width={120} />
              <button className="border rounded py-2 px-7 text-white ">
                Join
              </button>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <img src={images.discord} alt="" width={90} className=""/>
              <button className="border rounded py-2 px-7 text-white ">
                Join
              </button>
              </div>
                <div className="flex flex-col items-center gap-4"><img src={images.Zealy} alt="" width={80} />
              <button className="border rounded py-2 px-7 text-white ">
                Join
              </button></div>
             
              </div>
              
            </div>

          </>
        );
      case "inviteToEarn":
        return (
          <>
            <div className="flex flex-col items-center gap-4 py-8">
              <h1 className="text-white text-center">Tesnet quests locked</h1>
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
                To unlock all Laika quests and collect Meme Points, you must
                first complete Zealy quests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6 border-dashed border-b border-gray-500 mx-7 pb-12">
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
              <img src="src/assets/Zealy.png" alt="" width={80} />
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mt-3">
                Join our Zealy community and start to earn Meme Points
              </p>
              <button className="border rounded py-2 px-7 text-white mt-9">
                Join
              </button>
            </div>

          </>
        );
      case "dailyTasks":
        return (
          <>
            <div className="flex flex-col items-center gap-4 py-8">
              <h1 className="text-white text-center">Main quests locked</h1>
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
                To unlock all Laika quests and collect Meme Points, you must
                first complete Zealy quests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6 border-dashed border-b border-gray-500 mx-7 pb-12">
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
              <img src="src/assets/Zealy.png" alt="" width={80} />
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mt-3">
                Join our Zealy community and start to earn Meme Points
              </p>
              <button className="border rounded py-2 px-7 text-white mt-9">
                Join
              </button>
            </div>

          </>
        );
      case "🦴🦴🦴":
        return (
          <>
            <div className="flex flex-col items-center gap-4 py-8">
              <h1 className="text-white text-center">Main quests locked</h1>
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
                To unlock all Laika quests and collect Meme Points, you must
                first complete Zealy quests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6 border-dashed border-b border-gray-500 mx-7 pb-12">
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
              <img src="src/assets/Zealy.png" alt="" width={80} />
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mt-3">
                Join our Zealy community and start to earn Meme Points
              </p>
              <button className="border rounded py-2 px-7 text-white mt-9">
                Join
              </button>
            </div>

          </>
        );
      case "supportLaika":
        return (
          <>
            <div className="flex flex-col items-center gap-4 py-8">
              <h1 className="text-white text-center">Main quests locked</h1>
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
                To unlock all Laika quests and collect Meme Points, you must
                first complete Zealy quests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-0 gap-8 md:gap-6 border-dashed border-b border-gray-500 mx-7 pb-12">
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
              <img src="src/assets/Zealy.png" alt="" width={80} />
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg mt-3">
                Join our Zealy community and start to earn Meme Points
              </p>
              <button className="border rounded py-2 px-7 text-white mt-9">
                Join
              </button>
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-0 xl:gap-0 bg-dark-gradient2 xl:h-[60px] lg:h-[70px] md:h-[90px] text-center items-center rounded-t-[20px]">
            <button
              className={`text-white  ${activeTab === "tweetToEarn" ? "opacity-100 font-semibold" : "opacity-25 font-extralight "
                }`}
              onClick={() => handleTabClick("tweetToEarn")}
            >
              Tweet-to-Earn
            </button>
            <button
              className={`text-white  ${activeTab === "inviteToEarn" ? "opacity-100 font-semibold" : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("inviteToEarn")}
            >
              Invite-to-Earn
            </button>
            <button
              className={`text-white  ${activeTab === "dailyTasks" ? "opacity-100 font-semibold" : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("dailyTasks")}
            >
              Daily Tasks
            </button>
            <button className={`text-white  ${activeTab === "🦴🦴🦴" ? "opacity-100 font-semibold" : "opacity-25 font-extralight"
              }`}
              onClick={() => handleTabClick("🦴🦴🦴")}>
              🦴🦴🦴
            </button>
            <button
              className={`text-white  ${activeTab === "supportLaika" ? "opacity-100 font-semibold" : "opacity-25 font-extralight"
                }`}
              onClick={() => handleTabClick("supportLaika")}
            >
              Support Laïka Ecosystem
            </button>
          </div>
          <div className="bg-dark-gradient md:h-[680px] lg:h-[570px] xl:h-[570px] h-[155vh] pt-10 md:pt-5 lg:pt-0 rounded-b-[20px]">
            {renderContent()}
            {/* Additional content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quests;
