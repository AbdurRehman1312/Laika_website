import React, { useState } from "react";
import * as images from "../assets";

const FaucetContent = () => {
  const [inputValue, setInputValue] = useState("");
  const [isClaimed, setIsClaimed] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClaim = () => {
    setIsClaimed(true);
    // Additional logic for submitting the claim or performing other actions
  };

  return (
    <div className={`py-20 bg-[#091017] lg:rounded-t-[100px] rounded-t-[40px] bridge_box flex justify-center items-center mb-10`}>
      <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[55%] mt-9">
        <div className="bg-[#22282e] w-[90%] lg:w-[60%] xl:w-[60%] mx-auto rounded-[20px] my-14 p-8 border border-white border-opacity-30 flex flex-col justify-between gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-white font-bold text-xl">Request Faucet</h2>
            <div className="bg-[#0064e2] text-sm text-white rounded-xl py-2 px-3 text-center">
              <span>Testnet</span>
            </div>
          </div>
          <p className="text-dimGrey text-lg">Maximum of 2 requests per day.</p>
          <form className="form">
            <input
              className="bg-[#383e43] text-white px-6 h-[35px] rounded-[5px] w-full focus:outline-none border border-white border-opacity-30"
              type="text"
              name="Email"
              placeholder="Wallet Address"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className={`w-full flex justify-center items-center gap-3 ${isClaimed ? 'bg-[#c4ffbf] ' : 'bg-white disabled:opacity-50'} py-2 my-3 rounded-[5px]`}
              disabled={isClaimed || !inputValue.trim()}
              onClick={handleClaim}
            >
              {isClaimed ? "!Claimed" : <img src={images.faucetdrop} alt="" className="w-5 h-5" />}
              {!isClaimed && "Claim Faucet"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FaucetContent;
