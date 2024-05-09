import React from "react";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const BridgeHero = () => {
  return (
    <div className="my-24 px-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:leading-[50px] lg:w-[55%] md:w-[80%]">
          Bridge your meme <br /> assets to{" "}
          <span className="text-gradient font-extrabold">Laïka</span>
        </h1>
        <p className="text-dimGrey text-lg md:text-base text-center lg:text-lg xl:text-base lg:w-[60%] md:w-[90%]">
          {" "}
          Seamlessly move your assets between Dogecoin and other supported
          blockchains with confidence and security. Whether you're swapping
          tokens, providing liquidity, or exploring new opportunities, Laika's
          Bridge offers a streamlined experience for navigating the multi-chain
          landscape.
        </p>
        <Link to={"/faucets"} className="flex justify-center">
          <ButtonImage
            name="Go to Faucets"
            img="faucetdrop"
            style="py-3 lg:px-8 px-28"
            imgStyle="w-5 h-5"
          />
        </Link>
      </div>
    </div>
  );
};

export default BridgeHero;
