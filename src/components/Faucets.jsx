import React from "react";
import FaucetHero from "./FaucetHero";
import FaucetContent from "./FaucetContent";
import { Helmet } from 'react-helmet-async';
const Faucets = () => {
  return (
    <>
      <Helmet>
        <title>Laïka - Faucets</title>
        <meta name="description" content="Join the Laïka Sputnik 1 Program and participate in shaping the future of memecoins on the Dogecoin Layer 2. Earn $LAIKA points by completing quests and engaging with the Laïka ecosystem." />
        <meta property="og:image" content="/sputnik.png" />
      </Helmet>
      <section className="w-full overflow-hidden">
        <FaucetHero />
        <FaucetContent />
      </section>
    </>
  );
};

export default Faucets;
