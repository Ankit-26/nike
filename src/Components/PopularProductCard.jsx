import React from "react";
import { star } from "../assets/icons";

function PopularProductCard({ name, imgURL, price }) {
  return (
    <div className="flex md:flex-1 flex-col max-md:justify-center">
      <img
        src={imgURL}
        alt={name}
        width="280px"
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-montserrat leading-normal text-coral-red ">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
