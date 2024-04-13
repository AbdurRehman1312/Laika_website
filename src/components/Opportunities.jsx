import React from "react";
import OpportunitiesCard from "./OpportunitiesCard";
import * as images from "../assets";
const Opportunities = () => {
  return (
    <section id="airdrop" className="my-48">
      <h2 className="text-primary">{">"} Solving the Dogechain problem</h2>
      <div className="flex flex-col justify-center items-center text-center h-[70vh] sm:h-[40vh]">
        <h1 className="text-white text-5xl sm:text-4xl md:text-5xl">
          Turning <span className="text-gradient_sec font-bold">Doge</span>{" "}
          obstacles <br />
          into opportunities with{" "}
          <span className="text-gradient font-bold">Laïka</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <OpportunitiesCard
          img="scalibilty"
          name="Scalability"
          desc="The DRC20 protocol has surged DOGE's transaction activity, underscoring the network's scalability challenges and the pressing need for efficient transaction processing solutions."
        />
        <OpportunitiesCard
          img="setting"
          name="Programmability"
          desc="DRC20's growth on DOGE is hampered by its technical challenges, requiring simpler development solutions to unleash its full potential."
        />
        <OpportunitiesCard
          img="thumb"
          style="h-[50px] w-[35px]"
          name="Infinite meme potential"
          desc="Laïka is your gateway to endless meme possibilities, fostering a sustainable memecoin ecosystem."
        />
      </div>
      <div className="w-full rounded-[20px] bg-dark-gradient h-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[100%]">
          <div></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white m-auto text-5xl md:text-6xl lg:text-7xl font-semibold text-center lg:leading-[70px]">
              Make the Dogechain{" "}
              <span className="text-gradient">universal</span>
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
