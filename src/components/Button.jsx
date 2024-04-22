import React from "react";

const Button = ({ style, name, desc, descStyle }) => {
  return (
    <div className="flex flex-col gap-1">
      {/* Hide the <p> element on small and medium screens */}
      <p className={`text-gradient text-center text-[85%] ${descStyle}`}>{desc}</p>
      <button
        type="button"
        className={`bg-dark-gradient3 py-3 text-white rounded-[6px] shadow ${style} text-nowrap button_hover`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
