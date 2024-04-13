import React from "react";

const ButtonImage = ({ style, name, image }) => {
  return (
    <button
      type="button"
      className={`bg-dark-gradient py-2 md:py-3 w-[70%] md:w-auto px-3 md:px-4 text-white rounded-[6px] shadow ${style} text-nowrap flex items-center justify-center`}
    >
      <img src={image} alt="" width={35} className="mr-2" />
      <span className="md:block">{name}</span>
    </button>
  );
};

export default ButtonImage;
