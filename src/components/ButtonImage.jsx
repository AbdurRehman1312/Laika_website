import React from "react";
import * as images from "../assets";

const ButtonImage = ({ style, name, img, Link, imgStyle, includeHoverEffect = true }) => {
  return (
    <a
      href={Link}
      className={`bg-dark-gradient py-2 w-[100%] md:w-auto px-3 text-white rounded-[6px] shadow ${style} text-nowrap flex items-center justify-center ${includeHoverEffect ? "button_hover" : ""}`}
      target="_blank"
    >
      <img src={images[img]} alt="" width={35} className={`mr-2 ${imgStyle}`} />
      <span className="md:block">{name}</span>
    </a>
  );
};

export default ButtonImage;
