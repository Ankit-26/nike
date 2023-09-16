import React from "react";
import { star } from "../assets/icons";

function ReviewCard({ imgURL, rating, customerName, feedback }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        className="object-cover rounded-full w-[120px] h-[120px]"
        alt={"customer"}
      />
      <p className="m-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="flex justify-center items-center ">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt={"customer"}
        />
        <p className="text-xl text-slate-gray font-montserrat">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
}

export default ReviewCard;
