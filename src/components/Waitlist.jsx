import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as images from "../assets";

const Waitlist = () => {
  const [showPopup, setShowPopup] = useState(false);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzB4zFTjX3W0R5Xnd4mD00IbHp5_Gw3zlPSxNQNDFwGQS9sRSPs_ytFms4Fl69e7InHvw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        console.log("Response received", res);
        return res.text();
      })
      .then((data) => {
        console.log("Data received", data);
        setShowPopup(true);
        // Add class to body to prevent scrolling
        document.body.classList.add("popup-open");
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  }

  // Function to close the popup and remove class from body to enable scrolling
  function closePopup() {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
  }

  return (
    <section className="my-10">
      <div className="mt-12">
        <Link className="text-primary hover:opacity-65">
          {">"} Laika Waitlist
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-[70%] lg:w-[60%] xl:w-[55%] mt-9">
          <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[40px] xl:leading-[50px] ">
            Join the{" "}
            <span className="text-gradient font-extrabold">Laïka Waitlist</span>{" "}
            and be among the first to{" "}
            <span className="text-gradient font-extrabold">
              unleash DOGE's potential
            </span>
          </h1>
          <p className="text-dimGrey text-center mt-8 text-lg">
            Make DOGE assets smarter.
          </p>
          <div className="flex items-center justify-center gap-5 mt-8">
            <a
              href="https://twitter.com/Laika_Layer2/"
              target="_blank"
              className="rounded-[30px] bg-white text-black font-extrabold py-3 px-6"
            >
              Follow Us
            </a>
            <a href="https://twitter.com/Laika_Layer2/" target="_blank">
              <img src={images.x} alt="" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://discord.com/invite/YTHa4fda5r" target="_blank">
              <img src={images.discord} alt="" className="w-[20px] h-[20px]" />
            </a>
            <a href="https://medium.com/@laika-layer2" target="_blank">
              <img src={images.digoicon} alt="" className="w-[20px] h-[20px]" />
            </a>
          </div>
          <div className="bg-[#191919] w-[90%] lg:w-[60%] xl:w-[60%] mx-auto rounded-[20px] my-14 p-8 border border-white border-opacity-30 flex flex-col justify-between gap-6">
            <h2 className="text-white font-bold text-xl">Join the waitlist</h2>
            <p className="text-dimGrey text-lg">
              Sign up to stay informed about Laïka.
            </p>
            <form className="relative form" onSubmit={(e) => Submit(e)}>
              <input
                className="bg-[#303030] text-white px-6 h-[35px] rounded-[5px] w-full focus:outline-none border border-white border-opacity-30"
                type="text"
                name="Email"
                placeholder="Email address"
              />
              <button type="submit" className="absolute right-[10px] top-[30%]">
                <img src={images.sendarrow} alt="" className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          <div className="bg-[#191919] py-6 px-7 z-[300] rounded-[20px] w-[85%] md:w-[80%] lg:w-[75%] xl:w-[55%]">
            <div className="flex justify-end">
              <button onClick={closePopup}>
                <img src={images.close2} alt="" width={20} />
              </button>
            </div>
            <div className="overflow-y-auto h-[70vh]  md:h-auto ">
              <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-[#191919] py-6 px-7  rounded-[20px] w-[85%] md:w-[80%] lg:w-[75%] xl:w-[55%]">
                  <div className="flex justify-end">
                    <button onClick={closePopup}>
                      <img src={images.close2} alt="" width={20} />
                    </button>
                  </div>
                  <div className="overflow-y-auto h-[70vh]  md:h-auto ">
                    <div className="flex flex-col md:flex-row justify-between gap-10 mt-6">
                      <div className="w-full md:w-[50%]">
                        <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                          Welcome Onboard!
                        </h2>
                        <div className="mt-2 md:mt-4 lg:mt-12">
                          <p className="text-dimGrey text-base">
                            Thank you for signing up for the Laïka waitlist!
                          </p>
                          <p className="text-dimGrey text-base mt-4">
                            You've taken the first step towards unlocking the
                            full potential of the Dogecoin ecosystem. Keep an
                            eye on your inbox for updates and exclusive
                            opportunities to engage with Laïka.
                          </p>
                        </div>
                        <div className="mt-4 md:mt-5 lg:mt-16">
                          <h1 className="text-dimGrey font-bold text-base md:text-xl">
                            Join Laïka Community
                          </h1>
                          <div className="mt-5 flex flex-col gap-5">
                            <a
                              href="https://twitter.com/laika_Layer2/"
                              target="_blank"
                              className="flex gap-3 items-center text-dimGrey text-base"
                            >
                              <img src={images.x} alt="" width={30} />
                              <span>Follow us on Twitter</span>
                            </a>
                            <a
                              href="https://discord.com/invite/YTHa4fda5r"
                              target="_blank"
                              className="flex gap-3 items-center text-dimGrey text-base"
                            >
                              <img src={images.discord} alt="" width={32} />
                              <span>Join us on Discord</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" md:w-[50%]">
                        <div className="bg-black rounded-[25px] px-5 pt-6">
                          <div className="bg-blue-800 h-[40px] filter_blur rounded-[10px] w-[250px] absolute top-[50%] right-[10%]" />
                          <div className="flex flex-col justify-between items-center h-[64vh]  md:h-[64vh] lg:h-[70vh] xl:h-[60vh]">
                            <div className="flex justify-center px-5 md:px-0">
                              <h1 className="text-white text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                                Ride the{" "}
                                <span className="text-gradient font-extrabold">
                                  DOGE
                                </span>{" "}
                                Ecosystem like never before.
                              </h1>
                            </div>
                            <div className="flex justify-end w-[75%]">
                              <img src={images.dog3} alt="" width={140} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Waitlist;