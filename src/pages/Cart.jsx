import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoeSizes, shoesList } from "../constants";
import { cartAction } from "../redux/cartSlice";
import { bin, cheveronRight, heart, wishList } from "../assets/icons";
import { wishListAction } from "../redux/wishlistSlice";
import { Empty } from "antd";
import Button from "../Components/Button";
import RecommendedProductCard from "../Components/RecommendedProductCard";

function Cart() {
  const coursalRef = useRef();
  const cartListProducts = useSelector(state => state.cartReducer.products);
  const wishlistProducts = useSelector(state => state.wishListReducer.products);
  const appDispatch = useDispatch();
  const [bill, setBill] = useState({
    subTotal: 0,
    extraCharges: 0,
    total: 0,
  });

  useEffect(() => {
    if (cartListProducts.length == 0) {
      setBill({ subTotal: 0, extraCharges: 0, total: 0 });
      return;
    }
    let caluculatedSubTotal = cartListProducts.reduce(
      (tempSubTotal, currentValue, currentIndex, arr) => {
        tempSubTotal += currentValue.price * currentValue.quantity;
        return tempSubTotal;
      },
      0
    );
    setBill(prev => {
      return {
        subTotal: caluculatedSubTotal,
        extraCharges: 200,
        total: caluculatedSubTotal + 200,
      };
    });
  }, [cartListProducts]);

  return (
    <div className="min-h-screen mx-20 max-sm:mx-3">
      <div className=" flex  max-lg:mx-10 max-sm:mx-3 mt-10 gap-10 relative max-lg:flex-col ">
        <div className="w-[70%] max-lg:w-full">
          <h2 className="text-2xl">Bag</h2>
          <div className="mt-8">
            {cartListProducts.length > 0 ? (
              cartListProducts.map(product => {
                return (
                  <div className="flex gap-8 mb-3" key={product.id}>
                    <div className="h-[15rem] w-[15rem]">
                      <img
                        src={product.image}
                        alt="image"
                        className="w-full border-[1px] border-gray-200"
                      ></img>
                    </div>
                    <div className="w-full">
                      <h3 className="flex text-xl justify-between max-lg:flex-col-reverse max-lg:items-start max-lg:gap-2">
                        <span className="font-semibold ">{product.name}</span>
                        <span className="w-[30%] max-lg:w-full text-right max-lg:text-left">
                          {" "}
                          Price : $ {product.price}
                        </span>
                      </h3>
                      <span className="text-[#707072] text-lg leading-9">
                        Shoes
                      </span>
                      <div className="flex gap-4">
                        <div className="flex gap-2">
                          <label id="size">Size :</label>
                          <select
                            className="w-[4rem] cursor-pointer"
                            htmlFor="size"
                            value={product?.size}
                            onChange={e => {
                              console.log(e.target.value);
                              appDispatch(
                                cartAction.updateCart({
                                  ...product,
                                  size: e.target.value,
                                })
                              );
                            }}
                          >
                            {shoeSizes.map(size => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex gap-2">
                          <label id="size">Qty :</label>
                          <select
                            className="w-[2rem] cursor-pointer"
                            htmlFor="size"
                            value={product?.quantity}
                            onChange={e => {
                              console.log(e.target.value);
                              appDispatch(
                                cartAction.updateCart({
                                  ...product,
                                  quantity: e.target.value,
                                })
                              );
                            }}
                          >
                            {[1, 2, 3, 4].map(quantity => (
                              <option key={quantity} value={quantity}>
                                {quantity}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-5 mt-5">
                        <img
                          src={
                            wishlistProducts.find(prod => prod.id == product.id)
                              ? heart
                              : wishList
                          }
                          className="h-[23px] w-[23px] cursor-pointer"
                          onClick={() => {
                            appDispatch(
                              wishListAction.addToWishlist({ ...product })
                            );
                          }}
                        />
                        <img
                          src={bin}
                          className="h-[23px] w-[23px] cursor-pointer"
                          onClick={() => {
                            appDispatch(cartAction.removeFromCart(product.id));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center mt-[100px]">
                <Empty description="Your Cart is Empty" />
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 sticky top-[50px]">
          <h2 className="text-2xl">Summary</h2>
          <div className="mt-8 text-[#5a5a5b]">
            <div className="flex justify-between text-lg">
              <h3>Subtotal</h3> <span>$ {bill?.subTotal}</span>
            </div>
            <div className="flex justify-between text-lg leading-9 py-4">
              <h3>Estimated Delivery & Handling</h3>{" "}
              <span>$ {bill?.extraCharges}</span>
            </div>
            <div className="h-[1px] bg-[#969697] text-lg leading-9"></div>
            <div className="flex justify-between text-lg py-4">
              <h3>Total</h3> <span>$ {bill?.total}</span>
            </div>
            <div className="h-[1px] bg-[#969697] text-lg leading-9"></div>
          </div>
          <Button
            label={"Checkout To Payment"}
            style="mt-4 bg-black text-white py-5 w-full"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mt-12 items-center">
          <h3 className="text-3xl leading-loose">Recommended Shoes</h3>
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

export default Cart;
