import React from "react";
import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";

function PopularProducts() {
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
      </div>
      <div className="mt-8 lg:mt-16 flex flex-wrap w-full gap-5 max-md:justify-center">
        {products.map((product, index) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
