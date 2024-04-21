import React from "react";
import { Link } from "react-router-dom";
const Waitlist = () => {
  return (
    <section className="my-28">
      <Link className="text-primary hover:opacity-65">
        {">"} Laika Waitlist
      </Link>
      <div className="flex justify-center">
      <div className="w-[56%]">
        <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:leading-[40px] xl:leading-[50px] ">
          Join the{" "}
          <span className="text-gradient font-extrabold">Laïka Waitlist</span>{" "}
          and be among the first to{" "}
          <span className="text-gradient font-extrabold">
            unleash DOGE's potential
          </span>
        </h1>
        <p className="text-dimGrey text-center mt-8 text-lg">Make DOGE assets smarter.</p>
      </div>
      </div>
    </section>
  );
};

export default Waitlist;
