import React from "react";
import { close, star } from "../assets/icons";
import "./productCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { wishListAction } from "../redux/wishlistSlice";

function ProductCard({ shoe, wishlist }) {
  const navigate = useNavigate();
  let location = useLocation();
  const appDispatch = useDispatch();

  return (
    <div
      className=" flex flex-col max-md:justify-center cursor-pointer"
      onClick={() => {
        navigate(
          { pathname: `${location.pathname}/${shoe.id}` },
          { state: shoe }
        );
      }}
    >
      <div className="overflow-hidden h-[70%] relative">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="ln-product-card w-full object-cover h-[100%]"
        />
        {wishlist && (
          <div
            className=" absolute right-1 top-1 rounded-full p-3 bg-gray-300"
            onClick={e => {
              appDispatch(wishListAction.removeFromWishlist(shoe.id));
              e.stopPropagation();
            }}
          >
            <img src={close} alt="remove" className="h-[15px] w-[15px]" />
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-start gap-2">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">
          ({shoe?.rating?.rate})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin w-[70%] overflow-hidden whitespace-nowrap overflow-ellipsis">
        {shoe.name}
      </h3>

      <p className="mt-2 text-xl font-montserrat leading-normal ">
        Price : <span> $ {shoe.price}</span>
      </p>
    </div>
  );
}

export default ProductCard;
