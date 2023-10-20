import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { hamburger, shoeLogo, wishList } from "../assets/icons";
import { cart } from "../assets/icons";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { Link } from "react-router-dom";

function Nav() {
  const [showNavMenu, setShowMenu] = useState(false);
  const wishlistProducts = useSelector(state => state.wishListReducer.products);
  const cartListProducts = useSelector(state => state.cartReducer.products);

  useEffect(() => {
    window.addEventListener("click", () => setShowMenu(false));
  }, []);

  return (
    <header className="py-3 sticky top-0 bg-white z-20 w-full px-8 lg:px-24 ">
      <nav className="flex justify-between items-center max-container">
        <Link to={"/"}>
          <div className="h-[4rem] w-[7rem] ">
            <img
              src={shoeLogo}
              alt="Logo"
              className="h-[4rem] w-[7.5rem] object-cover "
            />
          </div>
        </Link>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              {
                <Link
                  to={link.href}
                  className="front-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </Link>
              }
            </li>
          ))}
        </ul>

        <div className="max-lg:hidden flex gap-8 items-center">
          <Link to="/wishlist">
            <Badge dot={wishlistProducts.length > 0}>
              <img
                src={wishList}
                alt="wishlist"
                className="h-[23px] w-[23px] cursor-pointer"
              />
            </Badge>
          </Link>
          <Link to="/cart">
            <Badge count={cartListProducts.length}>
              <img
                src={cart}
                alt="cart"
                className="h-[23px] w-[23px] cursor-pointer"
              />
            </Badge>
          </Link>
        </div>

        <div className="flex gap-5 justify-center">
          <div className="lg:hidden flex gap-8 items-center">
            <Link to="/wishlist">
              <Badge dot={wishlistProducts.length > 0}>
                <img
                  src={wishList}
                  alt="wishlist"
                  className="h-[23px] w-[23px] cursor-pointer"
                />
              </Badge>
            </Link>
            <Link to="/cart">
              <Badge count={cartListProducts.length}>
                <img
                  src={cart}
                  alt="cart"
                  className="h-[23px] w-[23px] cursor-pointer"
                />
              </Badge>
            </Link>
          </div>

          <div
            className="group relative hidden max-lg:block cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              setShowMenu(!showNavMenu);
            }}
          >
            <img
              src={hamburger}
              className="h-[40px] w-[25px]"
              onClick={e => {
                e.stopPropagation();
                setShowMenu(!showNavMenu);
              }}
            />
            <ul className="bg-white hidden absolute flex-col rounded-lg list-none shadow-xl p-5 px-7 z-20  gap-1 sm:group-hover:flex right-[0]">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  className="front-montserrat leading-normal text-lg hover:text-slate-gray whitespace-nowrap"
                >
                  <Link to={link.href} className="">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {showNavMenu && (
              <ul className="bg-white sm:hidden absolute flex-col rounded-lg list-none shadow-xl p-5 px-7 z-20  gap-1 right-[0]">
                {navLinks.map((link, index) => (
                  <li
                    key={link.label}
                    className="front-montserrat leading-normal text-lg hover:text-slate-gray whitespace-nowrap"
                  >
                    <Link to={link.href} className="">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
