import React, { useState } from "react";
import * as images from "../assets";

const FaucetContent = () => {
  const [inputValue, setInputValue] = useState("");
  // const [isClaimed, setIsClaimed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const renderPopup = () => {
    setShowPopup(true)
  }

  // const handleClaim = () => {
  //   setIsClaimed(true);
  //   // Additional logic for submitting the claim or performing other actions
  // };

  function closePopup() {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
  }

  return (
    <>
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
                // className={`w-full flex justify-center items-center gap-3 ${isClaimed ? 'bg-[#c4ffbf] ' : 'bg-white disabled:opacity-50'}  py-2 my-3 rounded-[5px]`}
                // disabled={isClaimed || !inputValue.trim()}
                className={`w-full flex justify-center items-center gap-3 bg-white disabled:opacity-50  py-2 my-3 rounded-[5px]`}
                onClick={renderPopup}
                type="button"
              >
                {/* {isClaimed ? "Claimed!" : <img src={images.faucetdrop} alt="" className="w-5 h-5" />}
              {!isClaimed && "Claim Faucet"} */}

                <img src={images.faucetdrop} alt="" className="w-5 h-5" />
                {"Claim Faucet"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          <div className="bg-[#191919] py-6 px-7 z-[300] rounded-[20px]">
            <div className="flex flex-col items-center gap-5">

            <h2 className="text-white font-bold text-xl">Wallet Not Found</h2>
            <p className="text-dimGrey text-lg text-center">
            Please install the latest version of WIWW by <a href="" className="text-[#0064e2]">clicking here</a> !
            </p>

              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>

              <button
                className="rounded-[30px] bg-white text-black font-extrabold py-2 px-6" onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </>

  );
};

export default FaucetContent;
