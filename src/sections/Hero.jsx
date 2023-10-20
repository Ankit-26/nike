import React, { useState } from "react";
import Button from "../Components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import ShoeCard from "../Components/ShoeCard";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [bigShoeImage, setBigShowImg] = useState(bigShoe1);
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row  flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddin-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative pr-10 z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            ShoeShop
          </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm ">
          Discover stylish ShoeShop arrivals, quality comfort, and innovation
          for your active life.
        </p>
        <Button
          onClick={() => {
            navigate({ pathname: "/shop" });
          }}
          label={"Shop now"}
          iconURl={arrowRight}
        />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 "
        />
        <div className="flex absolute gap-4  max-sm:gap-6 -bottom-[8%] ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeSelectedShoeImage={bigShoe => {
                  setBigShowImg(bigShoe);
                }}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
