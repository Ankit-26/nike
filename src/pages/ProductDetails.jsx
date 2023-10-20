import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoeSizes, shoesList } from "../constants";
import Button from "../Components/Button";
import { cheveronRight, heart, wishList } from "../assets/icons";
import RecommendedProductCard from "../Components/RecommendedProductCard";
import { useLocation } from "react-router-dom";
import { cartAction } from "../redux/cartSlice";
import { wishListAction } from "../redux/wishlistSlice";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("UK 7");
  const { products } = useSelector(state => state.wishListReducer);
  const coursalRef = useRef();
  const appDispatch = useDispatch();
  const { pathname, state: shoe } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <div className="min-h-screen mt-20 sm:mx-10 max-sm:mx-5">
      <section className="flex max-md:flex-col gap-10 relative">
        <div className="ln-product-img flex-1 sticky max-md:relative md:top-32 h-[400px] border-gray-300 border-[0.5px]">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-[100%] object-cover"
          />
        </div>
        <div className="flex md:flex-1 flex-col max-md:mt-4">
          <h2 className=" text-3xl leading-normal font-medium font-palanquin ">
            {shoe.name}
          </h2>

          <p className="mt-2 text-lg font-montserrat leading-normal ">
            Price : <span> $ {shoe.price}</span>
          </p>
          <p className="mt-2 text-lg font-montserrat leading-normal text-gray-500">
            incl. of taxes
          </p>
          <p className="mt-2 text-lg font-montserrat leading-normal text-gray-500">
            (Also includes all applicable duties)
          </p>
          <div className="mt-3">
            <h3>Select Size</h3>
            <div className="flex flex-wrap gap-3 mt-1">
              {shoeSizes.map((size, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      borderColor: `${selectedSize == size ? "black" : ""}`,
                    }}
                    className="p-1 px-3 border-[2px] border-gray-300 cursor-pointer hover:text-gray-500"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            label={"Add To Bag"}
            style="mt-4 bg-black text-white py-5"
            onClick={() => {
              appDispatch(
                cartAction.addToCart({ ...shoe, size: selectedSize })
              );
            }}
          />
          <Button
            label={"Wishlist"}
            style="mt-4  py-5  border-slate-900 border-[1px]"
            iconURl={
              products.find(prod => prod.id == shoe.id) ? heart : wishList
            }
            onClick={() => {
              appDispatch(wishListAction.addToWishlist({ ...shoe }));
            }}
          />
          <p className="mt-8 text-justify leading-7">{shoe.description}</p>
        </div>
      </section>
      <div className="mt-20">
        <h3 className="text-3xl leading-loose">How Others Are Wearing It</h3>
        <p className="leading-loose">
          Upload your photo or mention @ShoeShop on Instagram for a chance to be
          featured.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mt-12 items-center">
          <h3 className="text-3xl leading-loose">You Might Also Like</h3>
          <div className="flex gap-3">
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
      </div>
    </div>
  );
}

export default ProductDetails;
