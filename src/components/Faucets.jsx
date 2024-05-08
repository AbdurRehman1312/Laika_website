import React from "react";
import FaucetHero from "./FaucetHero";
import FaucetContent from "./FaucetContent";

const Faucets = () => {
  return (
    <section className="w-full overflow-hidden">
      <FaucetHero />
      <FaucetContent />
    </section>
  );
};

export default Faucets;
