import React from 'react'
import Sputnik from './Sputnik'
import Engage from './Engage'
import Quests from './Quests'

const Airdrop = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Sputnik />
        <Engage />
        <Quests />
      </div>
    </>

  )
}

export default Airdrop