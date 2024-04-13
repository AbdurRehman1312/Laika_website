import React from "react";
import * as images from "../assets";

const OpportunitiesCard = ({ img, style, name, desc }) => {
  // Assuming `img` prop is a string representing the image name
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-[250px]">
      <div className="bg-darkGrey h-[50px] w-[50px] rounded-[8px] flex justify-center items-center">
        <img src={images[img]} alt="" className={`object-contain ${style}`} />
      </div>
      <div className="flex flex-col gap-4 items-center h-[200px]">
        <h1 className="text-white text-xl font-semibold">{name}</h1>
        <p className="text-dimGrey text-center w-[75%] ">{desc}</p>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
