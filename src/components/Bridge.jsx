import React from "react";
import BridgeHero from "./BridgeHero";
import BridgeContent from "./BridgeContent";
import { Helmet } from 'react-helmet-async';
import { Faqs } from "./Faqs";
const Bridge = () => {
  return (
    <>
      <Helmet>
        <title>Laïka - Bridge</title>
        <meta name="description" content="Join the Laïka Sputnik 1 Program and participate in shaping the future of memecoins on the Dogecoin Layer 2. Earn $LAIKA points by completing quests and engaging with the Laïka ecosystem." />
        <meta property="og:image" content="/sputnik.png" />
      </Helmet>
      <section className="w-full">
        <BridgeHero />
        <BridgeContent />
        <Faqs />
      </section>
    </>
  );
};

export default Bridge;
