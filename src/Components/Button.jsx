import React from "react";

function Button({ label, iconURl, style = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full border-[1px]  ${
        style ? style : "bg-coral-red  text-white border-coral-red"
      }`}
    >
      {label}
      {iconURl && (
        <img
          src={iconURl}
          alt="arrow-right"
          className="ml-2 rounded-full w-5 h-5"
        ></img>
      )}
    </button>
  );
}

export default Button;
