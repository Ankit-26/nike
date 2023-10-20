import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id={"about-us"}
      className=" mt-28 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {"We Provide You "}
          <span className="text-coral-red inline-block mt-3">
            {"Super"}
          </span>{" "}
          <span className="text-coral-red inline-block mt-3">{"Quality"}</span>
          {" Shoes"}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We champion continual progress for athletes and sport by taking action
          to help athletes reach their potential. Every job at ShoeShop, Inc. is
          grounded in a team-first mindset, cultivating a culture of innovation
          and a shared purpose to leave an enduring impact.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication and to detail and excellence ensures yours satisfaction
        </p>
        {/* <div className="mt-4">
          <Button label={"View Details"} iconURl={arrowRight} />
        </div> */}
      </div>
      <div className="flex flex-1  justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain "
        />
      </div>
    </section>
  );
}

export default SuperQuality;
