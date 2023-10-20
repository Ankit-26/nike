import React from "react";
import Button from "../Components/Button";

function Suscribe() {
  return (
    <section
      id="contact-us"
      className="mt-24 flex justify-center items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px]  text-bol font-palanquind">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col  gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@ShoeShop.com"
          className="input"
        ></input>
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button
            label={"Sign Up"}
            style="w-full bg-coral-red  text-white border-coral-red"
          />
        </div>
      </div>
    </section>
  );
}

export default Suscribe;
