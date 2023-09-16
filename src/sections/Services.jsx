import React from "react";
import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";

function Services() {
  return (
    <section className="mt-24 max-container flex justify-center flex-wrap gap-5">
      {services.map((service, index) => (
        <ServiceCard key={service.label} {...service}></ServiceCard>
      ))}
    </section>
  );
}

export default Services;
