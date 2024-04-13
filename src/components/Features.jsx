import React from "react";
import * as images from "../assets";
import FeaturesCard from "./FeaturesCard";
const Features = () => {
  return (
    <section id="developers" className="my-8 md:my-16 lg:my-24">
      <h2 className="text-primary mb-6 md:mb-10 lg:mb-12">
        {">"} Our Core Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 md:my-10 lg:my-12">
        <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Laïka is <span className="text-gradient_sec">innovative</span>
          </h1>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Laïka is <span className="text-gradient_sec">scalable</span>
          </h1>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Laïka is <span className="text-gradient_sec">fast</span>
          </h1>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center">
            Laïka is{" "}
            <img
              src={images.line}
              alt=""
              className="w-1/2 ml-4 md:ml-8 lg:ml-12"
            />
          </h1>
        </div>
        <div className="col-span-1 md:col-span-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col gap-6">
      <FeaturesCard
        img="check"
        name="Native DOGE assets"
        desc="Harness the full potential of Dogecoin with Laïka's DOGE protocol, designed for enhanced functionality and integration."
      />
      <FeaturesCard
        img="rench"
        name="Built for developers"
        desc="Laika offers a developer-centric environment, providing the tools and support needed to innovate and create seamlessly."
      />
    </div>
    <div className="flex flex-col gap-6">
      <FeaturesCard
        img="shield"
        name="EVM Compatible & AA"
        desc="Enjoy broad compatibility and simplified account management with Laïka's EVM compatibility and innovative account abstraction feature."
      />
      <FeaturesCard
        img="trophy"
        name="Low Fees, High Scalability"
        desc="Experience the benefits of low transaction fees and high scalability, ensuring efficient and cost-effective operations on the Laïka Layer 2."
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Features;
