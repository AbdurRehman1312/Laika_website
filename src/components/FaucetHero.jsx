import React from 'react'

const FaucetHero = () => {
  return (
    <div className="my-24 px-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:leading-[50px] lg:w-[55%] md:w-[80%]">
          Claim DOGE Tokens<br />
          on {" "}
          <span className="text-gradient font-extrabold">Laïka Faucet</span>
        </h1>
        <p className="text-dimGrey text-lg md:text-base text-center lg:text-lg xl:text-base lg:w-[70%] md:w-[90%]">
          {" "}
          Get started on your journey in the Laïka ecosystem by claiming free DOGE tokens. Simply visit our Faucet page, complete your wallet address, and receive DOGE rewards directly to your wallet. It's the perfect way to get acquainted with Laika and start exploring the possibilities of the Dogecoin Layer 2 solution.
        </p>
      </div>
    </div>
  )
}

export default FaucetHero