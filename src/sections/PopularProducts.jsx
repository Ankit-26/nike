import React, { useRef } from "react";

import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import RecommendedProductCard from "../Components/RecommendedProductCard";
import { cheveronRight } from "../assets/icons";
import { shoesList } from "../constants";

function PopularProducts() {
  const navigate = useNavigate();
  const coursalRef = useRef();

  return (
    <section id="products" className="max-container mt-28">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular </span>Products
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">
          Experience top-notch quality and style with our sought after
          selections, Discover a world of comfort, design and value
        </p>
        <div className="flex justify-end gap-3">
          <div
            className=" cursor-pointer"
            onClick={() => {
              let srollLeft = window.innerWidth <= 576 ? 430 : 1200;
              coursalRef.current.scroll({
                left: coursalRef.current.scrollLeft - srollLeft,
                behavior: "smooth",
              });
            }}
          >
            <img
              src={cheveronRight}
              alt="previous"
              className="h-[60px] w-[60px] rotate-180 max-sm:w-[40px] max-sm:h-[40px]"
            />
          </div>

          <div
            className=" cursor-pointer"
            onClick={() => {
              let srollLeft = window.innerWidth <= 576 ? 420 : 1200;
              coursalRef.current.scroll({
                left: coursalRef.current.scrollLeft + srollLeft,
                behavior: "smooth",
              });
            }}
          >
            <img
              src={cheveronRight}
              alt="next"
              className="h-[60px] w-[60px] max-sm:w-[40px] max-sm:h-[40px]"
            />
          </div>
        </div>
      </div>
      <div ref={coursalRef} className="flex overflow-scroll gap-3 mt-5 pb-3">
        {shoesList.slice(10, 20).map((shoe, index) => {
          return <RecommendedProductCard key={shoe.id} shoe={shoe} />;
        })}
      </div>
      <div className="mt-6 flex flex-col">
        <Button
          label={"Show All Products"}
          style="h-[2.5rem] border-[2px] text-coral-red"
          onClick={() => navigate("/shop")}
        ></Button>
      </div>
    </section>
  );
}

export default PopularProducts;
