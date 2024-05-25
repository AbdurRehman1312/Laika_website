import React from "react";

const Button = ({ style, name, desc, descStyle, includeHoverEffect = true }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className={`text-gradient text-center text-[85%] ${descStyle}`}>{desc}</p>
      <button
        type="button"
        className={`bg-dark-gradient3 py-3 text-white rounded-[6px] shadow ${style} text-nowrap ${includeHoverEffect ? "button_hover" : ""}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
