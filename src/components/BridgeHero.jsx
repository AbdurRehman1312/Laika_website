import React from "react";
import ButtonImage from "./ButtonImage";
import { Link } from "react-router-dom";

const BridgeHero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="my-24 px-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:leading-[50px] lg:w-[55%] md:w-[80%]">
          Bridge your meme <br /> assets to{" "}
          <span className="text-gradient font-extrabold">Laïka</span>
        </h1>
        <p className="text-dimGrey text-lg md:text-base text-center lg:text-lg xl:text-base lg:w-[60%] md:w-[90%]">
          {" "}
          Transfer your assets between Dogecoin and supported blockchains with ease and security. Laika’s Bridge simplifies the process of swapping tokens across different chains, providing a straightforward and reliable solution for managing your memecoins.
        </p>
        <Link to={"/faucets"} className="flex justify-center" onClick={scrollToTop}>
          <ButtonImage
            name="Go to Faucets"
            img="faucetdrop"
            style="py-3"
            imgStyle="w-5 h-5"
          />
        </Link>
      </div>
    </div>
  );
};

export default BridgeHero;
