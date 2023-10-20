import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { loader } from "../assets/icons";
import { shoesList } from "../constants";

function ProductsList({ filterTags = [] }) {
  const [shoeData, setShoeData] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [isLoading, setLoading] = useState();
  const fetchedShoesIndex = useRef(0);
  const scrollRef = useRef();
  const initialProductListHeight = useRef();
  const perPageShoes = 6;

  // console.log(fetchedShoesIndex.current);
  // console.log("loading", isLoading);

  useEffect(() => {
    initialProductListHeight.current =
      window.innerHeight - scrollRef.current.getBoundingClientRect().top;
  }, []);

  useEffect(() => {
    shoeData.length > 0 && fecthNewShoes();
  }, [shoeData]);

  function onScroll() {
    if (
      initialProductListHeight.current + document.documentElement.scrollTop <=
        scrollRef.current.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fecthNewShoes();
  }

  useEffect(() => {
    fetchedShoesIndex.current = 0;
    if (filterTags.length <= 0) {
      setShoeData(shoesList);
      return;
    }
    let sortedShoes = [...shoeData];
    filterTags.map((tag, index) => {
      if (tag.value == "asc") {
        sortedShoes = sortedShoes.sort((a, b) => a.price - b.price);
      } else if (tag.value == "desc") {
        sortedShoes = sortedShoes.sort((a, b) => b.price - a.price);
      }
    });
    setShoeData(sortedShoes);
  }, [filterTags]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isLoading]);

  return (
    <div className="flex flex-col">
      <div
        ref={scrollRef}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-x-3 gap-y-10"
      >
        {shoes.length > 0 &&
          shoes.map((shoe, index) => {
            return <ProductCard key={shoe.id} shoe={shoe} />;
          })}
      </div>
      {isLoading && (
        <div className="flex justify-center mt-11">
          <img src={loader} alt="loader" />
        </div>
      )}
    </div>
  );

  function fecthNewShoes() {
    if (isLoading || fetchedShoesIndex.current >= shoeData.length) {
      // Prevent making multiple requests while one is already in progress.
      return;
    }
    setLoading(true);

    // Calculate the range of shoes to fetch
    const start = fetchedShoesIndex.current;
    const end = Math.min(start + perPageShoes, shoeData.length);

    // Fetch the new shoes
    const nextShoesList = shoeData.slice(start, end);

    // Simulate an asynchronous delay
    setTimeout(() => {
      if (start === 0) {
        setShoes(nextShoesList);
      } else {
        setShoes(prevShoes => [...prevShoes, ...nextShoesList]);
      }
      // Update the index for the next fetch
      fetchedShoesIndex.current = end;

      // Clear the loading state
      setLoading(false);
    }, 1000);
  }
}

export default ProductsList;
