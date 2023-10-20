import React, { useEffect } from "react";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";
import SuperQuality from "../sections/SuperQuality";
import SpecialOffer from "../sections/SpecialOffer";
import Services from "../sections/Services";
import Suscribe from "../sections/Suscribe";
import CustomerReviews from "../sections/CustomerReviews";

function LandingPage() {
  return (
    <div className="px-8 lg:px-24">
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Suscribe />
    </div>
  );
}

export default LandingPage;
