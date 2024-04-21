import React from "react";
import { Helmet } from 'react-helmet-async';
import Opportunities from "./Opportunities";
import Features from "./Features";
import Token from "./Token";
import Memecoin from "./Memecoin";
import Ecosystem from "./Ecosystem";
import Memechain from "./Memechain";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Helmet>
        <title>Laïka - Dogecoin Layer 2</title>
        <meta name="description" content="Discover Laïka, the Dogecoin Layer 2 solution designed to enhance the DOGE blockchain and unlock the full potential of memecoins..." />
        {/* Add meta image */}
        <meta property="og:image" content="/homepage.png" />
      </Helmet>
      <Opportunities />
      <Features />
      <Token />
      <Memecoin />
      <Memechain />
      <Ecosystem />
    </div>
  );
};

export default Home;
