import React, { useState } from "react";
import { TabsDemo } from "./TabsDemo";
import * as images from "../assets";
import ProgressBar from "./ProgressBar";
import { TableGuild } from "./TableGuild";
import { CardTitle } from "./ui/card";
import TableGuidUser from "./TableGuidUser";

const BridgeContent = () => {
  const [showGuild, setShowGuild] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showGuildUser, setShowGuildUser] = useState(false); // New state for guildUser visibility

  const handleSeeDetailsClick = () => {
    setShowGuild(true);
    window.scrollTo({ top: 0 });
  };

  const handleCreateGuildClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCreateButtonClick = () => {
    setShowPopup(false);
    setShowGuildUser(true); // Show guildUser div
  };

  return (
    <>
      <div className={`bg-[#091017] lg:rounded-t-[100px] rounded-t-[40px] bridge_box py-20 mb-10`}>
        {!showGuild && (
          <div className="bridge_history">
            <div className="flex md:flex-row flex-col items-center justify-between gap-10 md:px-20 px-4">
              <div className=" md:w-[40%] lg:w-[40%] w-full flex flex-col gap-4">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-[50px] lg:w-[55%] md:w-[80%]">
                  Bridge to earn <br />
                  <span className="text-gradient font-extrabold">LAIKA Points</span>
                </h1>
                <p className="text-dimGrey font-medium lg:w-[80%] xl:w-[40%] w-full">The more you bridge, the more Points you’ll earn over time.</p>
                <p className="text-dimGrey font-medium lg:w-[100%] xl:w-[55%] w-full">LAIKA Points will be redeemable starting in July.</p>
              </div>
              <div className="md:w-[60%] lg:w-[45%] w-full grid md:grid-cols-2 grid-cols-1 gap-6 items-stretch">
                <div className="flex flex-col gap-8">
                  <div className="border-2 border-white rounded-[20px]">
                    <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                      <p className="text-white text-center">Bridge Transactions</p>
                    </div>
                    <div className="flex justify-center items-center h-[13vh]">
                      <p className="lg:text-2xl text-lg text-white">1023</p>
                    </div>
                  </div>
                  <div className="border-2 border-white rounded-[20px]">
                    <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                      <p className="text-white text-center">Total Bridged</p>
                    </div>
                    <div className="flex justify-center items-center h-[13vh]">
                      <p className="lg:text-2xl text-lg text-white">2,495,295 DOGE</p>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-white rounded-[20px] h-[41vh] flex flex-col">
                  <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                    <p className="text-white text-center">LAIKA Points</p>
                  </div>
                  <div className="flex justify-evenly items-center flex-col flex-grow">
                    <p className="lg:text-5xl md:text-3xl text-5xl text-center text-white text-gradient font-extrabold">55,304</p>
                    <p className="text-dimGrey text-center justify-self-end"><span className="text-gradient text-base lg:text-xl">*</span> Please note that these points are an estimate and do not include all your interactions with Laïka.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-20 border-b border-dashed border-gray-600 w-[90%] mx-auto" />
            <div className="flex justify-center items-center mt-10">
              <TabsDemo />
            </div>
            <div className="pb-20 border-b border-dashed border-gray-600 w-[90%] mx-auto" />
            <div className="lg:w-[70%] mx-auto w-full flex justify-between items-center md:flex-row flex-col gap-y-16 mt-10 px-3">
              <div className="md:w-[35%] w-full">
                <div className="flex items-center gap-4 text-white">
                  <h1 className="text-xl  font-bold">Your referral link</h1>
                  <div className="py-1 px-2 rounded-[8px] bg-[#0064e2] font-medium">
                    <span>+5% bonus for you</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-dimGrey w-[50%] mt-5">
                  <img src={images.pin} className="w-4" alt="" />
                  <a href="https://www.sample.info/?soda=punishment&suggestion=number" target="_blank" className="underline">https://www.sample.info/?soda=punishment&suggestion=number</a>
                </div>
              </div>
              <div className="md:w-[25%] w-full">
                <div className="border-2 border-white rounded-[20px]">
                  <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                    <p className="text-white text-center">Number of Referrals</p>
                  </div>
                  <div className="flex justify-center items-center h-[13vh]">
                    <p className="lg:text-2xl text-lg text-white text-gradient font-extrabold">102</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-20 border-b border-dashed border-gray-800 w-[60%] mx-auto" />
            <div className="lg:w-[70%] mx-auto w-full flex justify-between items-center md:flex-row flex-col gap-y-16 mt-10 px-3">
              <div className="md:w-[35%] w-full">
                <div className="text-white">
                  <h1 className="text-xl  font-bold">Guild Booster</h1>
                </div>
                <div className="flex items-center gap-1 text-dimGrey w-[50%] mt-5">
                  <p className="">Your Guild: </p>
                  <p className="text-white font-bold">Solana Lover</p>
                </div>
              </div>
              <div className="md:w-[25%] w-full">
                <div className="border-2 border-white rounded-[20px]">
                  <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                    <p className="text-white text-center">Guild Rank</p>
                  </div>
                  <div className="flex justify-center items-center h-[13vh]">
                    <p className="lg:text-2xl text-lg text-white text-gradient font-extrabold">5/504</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] mx-auto w-full flex justify-between items-center md:flex-row flex-col gap-y-16 mt-20 px-3">
              <ProgressBar progress={65} />
            </div>
            <div className="flex justify-center mt-10">
              <button onClick={handleSeeDetailsClick} className="underline text-dimGrey">
                See details
              </button>
            </div>
          </div>
        )}
        {showGuild && (
          <>
            <div className="md:px-20 px-4">
              <div className="bg-[#0c151f] p-2 rounded-full md:w-[22%] lg:w-[16%] xl:w-[12%] w-[50%] mx-auto flex justify-center items-center mb-10">
                <button
                  className="rounded-full bg-[#060b10] py-1 px-2 text-white text-nowrap mx-auto flex items-center gap-3"
                  onClick={() => setShowGuild(false)} >
                  <img
                    src={images.tabbridge}
                    alt=""
                    className={`w-4 h-4 `}
                  />
                  <span>Back to Bridge</span>
                </button>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-between gap-10">
                <div className=" md:w-[40%] lg:w-[60%] w-full flex flex-col gap-4">
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-[50px] lg:w-[55%] md:w-[80%]">
                    Join a Guild & Earn <br /> more {" "}
                    <span className="text-gradient font-extrabold">LAIKA Points</span>
                  </h1>
                  <p className="text-dimGrey font-medium lg:w-[80%] xl:w-[40%] w-full">Discover various Guilds, find one that suits you, and start bridging your memecoins to multiply your LAIKA Points. Dive into the Laika ecosystem and boost your rewards by joining a Guild today!</p>
                </div>
                <div className="md:w-[30%] lg:w-[28%] w-full">
                  <div className="border-2 border-white rounded-[20px] h-[31vh] flex flex-col">
                    <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                      <p className="text-white text-center">LAIKA Points</p>
                    </div>
                    <div className="flex justify-evenly items-center flex-col flex-grow">
                      <p className="lg:text-5xl md:text-3xl text-5xl text-center text-white text-gradient font-extrabold">55,304</p>
                      <p className="text-dimGrey text-center justify-self-end"><span className="text-gradient text-base lg:text-xl">*</span> Please note that these points are an estimate and do not include all your interactions with Laïka.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-20 border-b border-dashed border-gray-600 w-[100%] mx-auto" />
              <div className="mt-16">
                {!showGuildUser && (
                  <div className="flex items-center justify-between">
                    <h1 className="text-white md:text-2xl text-lg font-semibold">Explore Guilds</h1>
                    <button className="bg-[#0064E2] py-1 px-2 text-center rounded-[6px] text-white" onClick={handleCreateGuildClick}><span className="mx-1">+</span> Create a Guild</button>
                  </div>
                )}
                {/* GUILD USER DIV */}
                {showGuildUser ? (
                  <div className="guildUser">
                    <h1 className="text-white md:text-2xl text-lg font-semibold">Your Guilds</h1>
                    <div className="flex md:flex-row flex-col gap-y-6 justify-between">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-[#0064E2] mt-7">
                          <h1>Solana Lover</h1>
                          <img src={images.pinb} className="w-4" alt="" />
                        </div>
                        <h1 className="text-white">Rank : 5</h1>
                        <h1 className="text-white">Multiplier: x1,5</h1>
                        <button className="underline text-dimGrey text-left">Left Guilt</button>
                      </div>
                      <div className="flex md:flex-row flex-col items-center gap-4 md:w-[40%] w-full">
                        <div className="border-2 border-white rounded-[20px] w-full">
                          <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                            <p className="text-white text-center">Members</p>
                          </div>
                          <div className="flex justify-center items-center h-[13vh]">
                            <p className="lg:text-2xl text-lg text-white">39/42</p>
                          </div>
                        </div>
                        <div className="border-2 border-white rounded-[20px] w-full">
                          <div className="h-[5vh] bg-dark-gradient3 rounded-t-[20px] flex justify-center items-center font-semibold lg:text-xl text-base">
                            <p className="text-white text-center">Total Bridged</p>
                          </div>
                          <div className="flex justify-center items-center h-[13vh]">
                            <p className="lg:text-2xl text-lg text-white">$16,150</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#0f1a27] rounded-[15px] p-5 mt-10">
                    <h2 className="my-10 text-white font-bold">Guilds</h2>
                    <TableGuild />
                  </div>
                )}
                {/* GUILD USER TABLE & PROGRESS BAR */}
                {showGuildUser && (
                  <div className="guildUser">
                    <div className="mt-10">
                      <ProgressBar progress={63} />
                    </div>
                    <div className="bg-[#0f1a27] rounded-[15px] p-5 mt-10">
                      <h2 className="my-10 text-white font-bold">Guild Members</h2>
                      <TableGuidUser />
                    </div>
                  </div>
                )}
                <div className="md:w-[30%] w-full mt-16 mx-auto">
                  <div className="flex items-center justify-between text-white">
                    <h1 className="text-xl  font-bold">Your referral link</h1>
                    <div className="py-1 px-2 rounded-[8px] bg-[#0064e2] font-medium">
                      <span>+5% bonus for you</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-dimGrey w-[50%] mt-5">
                    <img src={images.pin} className="w-4" alt="" />
                    <a href="https://www.sample.info/?soda=punishment&suggestion=number" target="_blank" className="underline">https://www.sample.info/?soda=punishment&suggestion=number</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {showPopup && (
          <div className="fixed inset-0 bg-opacity-20 flex justify-center items-center">
            <div className="bg-[#0f1a27] rounded-[15px] shadow-2xl relative p-8 md:w-[30%] w-full mx-2">
              <button
                className="absolute top-2 right-5 text-2xl text-white"
                onClick={handleClosePopup}
              >
                &times;
              </button>
              <h2 className="text-xl mb-4 text-white">Create a Guild</h2>
              <div className="flex flex-col gap-4 pt-5">
                <label htmlFor="" className="text-white text-sm">Guild Name</label>
                <input type="text" className="py-2 px-3 rounded-[8px] bg-[#27313d] focus:outline-none text-white" />
              </div>
              <button
                className="w-full bg-[#0064e2] py-3 px-3 mt-5 text-center text-white rounded-[5px] text-sm hover:opacity-80"
                onClick={handleCreateButtonClick} // Added onClick handler for create button
              >
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BridgeContent;
