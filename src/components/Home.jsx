import React from "react";
import styles from "../style";
import Hero from "./Hero";
import Opportunities from "./Opportunities";
import Features from "./Features";
import Token from "./Token";
import Memecoin from "./Memecoin";
import Ecosystem from "./Ecosystem";
import Memechain from "./Memechain";
const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Opportunities />
      <Features />
      <Token />
      <Memecoin />
      <Ecosystem />
      <Memechain />
    </div>
  );
};

export default Home;
