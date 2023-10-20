import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import FilterProducts from "../Components/FilterProducts";
import ProductsList from "../Components/ProductsList";
import { expand } from "../assets/icons";
import { useLocation } from "react-router-dom";
import { Tag } from "antd";

function Shop() {
  const [hideFilter, setHideFilter] = useState(true);
  const { pathname } = useLocation();
  const [showNavMenu, setShowMenu] = useState(false);
  const [filterTags, setFilterTags] = useState([]);

  const sortBy = useRef();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("click", e => {
      e.stopPropagation();
      if (e.target !== sortBy.current) {
        setShowMenu(false);
      }
    });
  }, []);

  return (
    <div className="min-h-screen p-16 max-sm:p-5">
      <div className="flex justify-between mt-[100px]">
        <h1 className="text-2xl">All Shoe's</h1>
        <div className="flex gap-8 max-sm:gap-3">
          {/* <div
            className="flex gap-1 cursor-pointer items-center"
            onClick={() => setHideFilter(!hideFilter)}
          >
            <span>{hideFilter ? "Show Filter" : "Hide Filter"}</span>
            <img src={filter} alt="wishlist" className="h-[15px] w-[15px] " />
          </div> */}
          <div
            ref={sortBy}
            className="flex gap-1 cursor-pointer items-center relative"
            onClick={e => {
              e.stopPropagation();
              setShowMenu(!showNavMenu);
            }}
          >
            <span>{"Sort By"}</span>
            <img src={expand} alt="expand" className="h-[15px] w-[15px]" />
            {showNavMenu && (
              <ul className="bg-white  absolute flex-col rounded-lg list-none shadow-xl p-3 px-7 z-20  gap-1  right-[-40px] top-[40px]">
                {[
                  {
                    label: "Price : Low to High",
                    value: "asc",
                    type: "priceSort",
                  },
                  {
                    label: "Price : High To Low",
                    value: "desc",
                    type: "priceSort",
                  },
                ].map((item, index) => (
                  <li
                    onClick={e => {
                      e.stopPropagation();
                      setShowMenu(!showNavMenu);

                      setFilterTags([item]);
                    }}
                    key={index}
                    className="py-2 front-montserrat leading-normal text-lg hover:text-slate-gray whitespace-nowrap"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {filterTags.length > 0 && (
        <div className="flex gap-2 mt-3">
          {filterTags.map(tag => {
            return (
              <Tag
                key={tag.value}
                closeIcon
                className=" rounded-md p-2"
                onClose={() => {
                  let removedFilteredTags = filterTags.filter(item => {
                    return item.value != tag.value;
                  });
                  setFilterTags(removedFilteredTags);
                }}
              >
                {tag.label}
              </Tag>
            );
          })}
        </div>
      )}
      <div className="flex flex-col mt-3">
        {!hideFilter && <FilterProducts />}
        <ProductsList filterTags={filterTags} />
      </div>
    </div>
  );
}

export default Shop;
