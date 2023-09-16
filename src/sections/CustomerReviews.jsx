import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../Components/ReviewCard";

function CustomerReviews() {
  return (
    <section className="padding mt-24 bg-pale-blue  ">
      <h3 className="font-palanquin text-4xl text-center text-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly text-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={review?.customerName} {...review} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
