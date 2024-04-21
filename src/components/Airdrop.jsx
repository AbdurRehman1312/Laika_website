import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sputnik from './Sputnik';
import Engage from './Engage';
import Quests from './Quests';

const Airdrop = () => {
  return (
    <>
      {/* Helmet component to set metadata */}
      <Helmet>
        <title>Laïka - Sputnik 1 Program</title>
        <meta name="description" content="Join the Laïka Sputnik 1 Program and participate in shaping the future of memecoins on the Dogecoin Layer 2. Earn $LAIKA points by completing quests and engaging with the Laïka ecosystem." />
        <meta property="og:image" content="/sputnik.png" />
      </Helmet>
      
      <div className="w-full overflow-hidden">
        <Sputnik />
        <Engage />
        <Quests />
      </div>
    </>
  );
}

export default Airdrop;
