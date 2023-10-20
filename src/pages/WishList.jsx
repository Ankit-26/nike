import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

function WishList() {
  const wishlistProducts = useSelector(state => state.wishListReducer.products);

  return (
    <div className="min-h-screen p-16 max-sm:p-5">
      <div className="flex justify-between mt-[20px]">
        <h1 className="text-2xl">
          My Wishlist {wishlistProducts.length} items
        </h1>
      </div>
      {wishlistProducts.length > 0 ? (
        <div className="flex mt-5">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-x-3 gap-y-10">
            {wishlistProducts.length > 0 &&
              wishlistProducts.map((shoe, index) => {
                return (
                  <ProductCard key={shoe.id} shoe={shoe} wishlist={true} />
                );
              })}
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-[100px]">
          <Empty description="Your Wishlist is Empty" />
        </div>
      )}
    </div>
  );
}

export default WishList;
