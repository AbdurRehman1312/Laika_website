import React from 'react'
import ButtonImage from './ButtonImage';
const Sputnik = () => {
    return (
        <>
            <section className='my-10'>
                <div className='flex justify-center'>
                    <button className='text-primary border border-gray-700 p-3 rounded'>Sputnik 1 Program</button>
                </div>
                <div className='my-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <div className='flex flex-col justify-evenly gap-6'>
                            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-[70px] '>Unlock Rewards with <span className='text-gradient font-semibold'>Sputnik I</span> on Wufiswap</h1>
                            <p className="text-dimGrey text-lg md:text-base lg:text-lg xl:text-xl">
                            Join the Sputnik I campaign on Wufiswap and turn your DRC20 assets into valuable Meme Points. Engage in various activities like swapping, providing liquidity, staking, referring, and participating in the Zealy campaign to earn points. These points are your ticket to a share of the $LAIKA airdrop.
                            </p>
                            <ButtonImage name="Join the ecosystem" style="w-[57%] md:w-[48%] lg:w-[35%] xl:w-[31%] gap-1" image="src/assets/dog2.png" />
                        </div>
                        <div className=''>
                          
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sputnik