import React from "react";
import { useNavigate } from "react-router-dom";

function RecommendedProductCard({ shoe }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex w-[400px] flex-col max-md:justify-center cursor-pointer"
      onClick={() => {
        navigate({ pathname: `/shop/${shoe.id}` }, { state: shoe });
      }}
    >
      <div className=" overflow-hidden w-[400px] h-[350px]">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="ln-product-card w-full h-[100%]"
        />
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
        {shoe.name}
      </h3>

      <p className="mt-2 text-2xl font-montserrat leading-normal w-[50%]">
        Price : <span> $ {shoe.price}</span>
      </p>
    </div>
  );
}

export default RecommendedProductCard;
