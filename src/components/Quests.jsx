import React from "react";
import Button from "./Button";

const Quests = () => {
  return (
    <>
      <section className="my-8 md:my-32">
        <div className="w-full rounded-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-dark-gradient2 sm:h-[60px] h-[150px] text-center items-center rounded-t">
            <button className="text-white font-extralight opacity-25">
              Tweet-to-Earn
            </button>
            <button className="text-white font-extralight opacity-25">
              Invite-to-Earn
            </button>
            <button className="text-white font-extralight opacity-25">
              🦴🦴🦴
            </button>
            <button className="text-white font-extralight opacity-25">
              Support Laïka Ecosystem
            </button>
          </div>
          <div className="bg-dark-gradient sm:h-[550px] h-[120vh] rounded-b">
            <div className="flex flex-col items-center gap-4 py-8">
              <h1 className="text-white text-center">Main quests locked</h1>
              <p className="text-white font-extralight text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
                To unlock all Laika quests and collect Meme Points, you must
                first complete Zealy quests
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 md:mt-0 border-dashed border-b border-gray-500 mx-7 pb-12">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Quests;
