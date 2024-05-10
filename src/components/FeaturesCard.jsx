import React from "react";
import * as images from "../assets";

const FeaturesCard = ({ img, name, desc, style }) => {
  return (
    <div className="bg-dark-gradient p-5 rounded-[10px] md:h-[350px] lg:h-[300px]">
      <div className="flex flex-col gap-5 h-full">
        <img
          src={images[img]}
          alt=""
          className={`w-[40px] h-[40px] object-contain ${style}`}
        />
        <h2 className="text-white text-2xl lg:text-3xl font-semibold">{name}</h2>
        <p className="text-dimGrey text-start text-base md:text-xs lg:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
