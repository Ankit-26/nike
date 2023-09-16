import React from "react";

function ShoeCard({ imgURL, changeSelectedShoeImage, bigShoeImg }) {
  const handleShoeClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeSelectedShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        imgURL.bigShoe === bigShoeImg
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={handleShoeClick}
    >
      <div className=" bg-card bg-cover rounded-xl flex  justify-center items-center bg-center sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgURL.bigShoe}
          alt="shoe"
          width={130}
          height={150}
          className="object-contain "
        />
      </div>
    </div>
  );
}

export default ShoeCard;
