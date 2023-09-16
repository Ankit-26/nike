import React from "react";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../Components/Button";

function SpecialOffer() {
  return (
    <section className=" mt-28 flex justify-center item-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="xl:flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain"
        ></img>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">{"Special "}</span>{" "}
          {"Offer"}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button label={"Shop now"} />
          <Button
            label={"Learn more"}
            style="bg-white border-slate-gray text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
