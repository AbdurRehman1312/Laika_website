import React, { useRef, useEffect, useState } from "react";
import * as images from "../assets";
import Button from "./Button";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { Link } from "react-router-dom";

const Token = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust the threshold value as needed
  });

  useEffect(() => {
    const textElements = Array.from(sectionRef.current.children);

    const fadeIn = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    const fadeOut = () => {
      gsap.to(textElements, {
        duration: 1,
        opacity: 0,
        y: "100%",
        scale: 0.1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      });
    };

    if (intersection && intersection.intersectionRatio >= 0.5) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [intersection]);

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
    <section id="laikatoken" className="my-8 sm:my-2 lg:my-4">
      <Link to="/#laikatoken" className="text-primary hover:opacity-65">
        {">"} $LAIKA Token
      </Link>
      <div
        className="flex flex-col justify-center items-center gap-2 sm:gap-4 lg:gap-5 text-center my-7 md:my-2 h-[70vh] sm:h-[60vh] lg:h-[50vh] overflow-hidden"
        ref={sectionRef}
      >
        <h1 className="text-white font-semibold text-4xl sm:text-5xl lg:text-6xl">
          Discover <span className="text-gradient font-extrabold">$LAIKA</span>{" "}
          Token
        </h1>
        <p className="text-dimGrey text-center w-full sm:w-[80%] lg:w-[65%]">
          $LAIKA is at the heart of our mission to address and resolve the
          inherent challenges faced by DOGE. $LAIKA not only rewards validators,
          securing the network, but also empowers holders with a stake in the
          future development and governance of the chain through DAO. While
          Dogecoin remains the primary token for transaction fees, $LAIKA will
          increasingly be used for this purpose, reinforcing its integral
          function within the ecosystem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-16 lg:gap-20">
        <div className="col-span-1 md:col-span-11 lg:col-span-5">
          <div className="flex flex-col justify-center bg-dark-gradient h-auto md:h-[370px] lg:h-[410px] rounded-[20px] p-5">
            <div className="w-full flex flex-col gap-4">
              <img
                src={images.heart}
                alt=""
                className="w-[45px] h-[45px] md:mb-6"
              />
              <h2 className="text-white text-lg md:text-xl font-semibold w-72">
                Engage with Laïka to earn Laïka points
              </h2>
              <p className="text-dimGrey md:w-[80%] w-full text-base">
                Earn points by actively engaging with Laïka, transforming your
                contributions into valuable rewards within the Dogecoin
                ecosystem.
              </p>
            </div>
            <div className="flex justify-end w-full mt-8 md:mt-16">
              <Link to="/sputnik">
                <button className="bg-transparent text-white font-semibold border border-white py-2 px-3 rounded-[5px]">
                  Discover Laïka Quests
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 lg:col-span-7">
          <div className="flex flex-col gap-4 pb-7 border-b border-gray-600 border-dashed">
            <div className="bg-darkGrey h-[50px] w-[50px] rounded-[8px] flex justify-center items-center">
              <img
                src={images.file}
                alt=""
                className="w-[25px] h-[25px] object-contain"
              />
            </div>
            <h2 className="text-white font-semibold text-lg md:text-xl">
              Explore $LAIKA Docs
            </h2>
            <p className="text-dimGrey text-justify">
              Explore our Laïka documentation for an overview of our Layer 2
              solution and $LAIKA token informations, enhancing Dogecoin's
              efficiency and scalability. Dive into the details that shape our
              ecosystem's future.
            </p>
            <Button name="Coming Soon" style="w-[45%] md:w-[25%] lg:w-[20%]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-semibold text-lg md:text-xl">
                Sign up to our Waitlist
              </h2>
              <p className="text-dimGrey">
                Stay up to date about $LAIKA release.
              </p>
              <form
                className="relative lg:w-[90%] xl:w-[70%] form"
                onSubmit={(e) => Submit(e)}
              >
                <input
                  className="bg-dark-gradient text-white px-3 h-[35px] rounded-[5px] w-full focus:outline-none"
                  type="text"
                  name="Email"
                  placeholder="jonh@doge.wtf..."
                />
                <button
                  type="submit"
                  className="absolute right-[5px] top-[11.7%]"
                >
                  <img src={images.inputsend} alt="" className="w-7 h-7" />
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-semibold text-lg md:text-xl flex gap-2">
                Spread some <img src={images.dog} className="w-6 h-6" alt="" />{" "}
              </h2>
              <p className="text-dimGrey">Spread some what?</p>
              <a
                href="https://twitter.com/intent/post?text=I%20just%20discovered%20%40Laika_Layer2%2C%20a%20Layer%202%20solution%20built%20on%20the%20Dogecoin%20blockchain.%0A%0ALet%27s%20join%20the%20Sputnik%201%20Program%2C%20allowing%20us%20to%20get%20early%20and%20accumulate%20%24LAIKA%20points.%20%20%0A%0A%24DOGE%20is%20the%20leading%20Memechain%2C%20La%C3%AFka%20will%20skyrocket%20its%20potential.%0A%F0%9F%A6%B4%F0%9F%A6%B4%F0%9F%A6%B4%0A%0Ahttps%3A%2F%2Flaikachain.dog%2F%20"
                target="_blank"
                className="bg-dark-gradient py-3 px-4 rounded-[10px] sm:w-[70%] xl:w-[50%] md:w-[80%] w-full text-center text-lg"
              >
                🦴🦴🦴🦴🦴🦴
              </a>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center  z-[100]">
          <div className="bg-[#191919] py-6 px-7 rounded-[20px] w-[85%] md:w-[80%] lg:w-[75%] xl:w-[55%]">
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
                              <span>
                                Join us on Discord
                              </span>
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

export default Token;
