import React from 'react'
import Button from './Button';
 
const Memechain = () => {
  return (
    <>
   <section className="my-36">
    <div className='flex flex-col gap-12 items-center '>
        <h1 className="text-white m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-center leading-[60px] md:leading-[70px] lg:leading-[90px] xl:leading-[110px] lg:w-[70%] xl:w-[50%] ">
            REAL<br />
            <span className="text-gradient font-extrabold">MEMECOINS</span><br />
            ARE ON<br />
            THE LEADING<br />
            <span className="text-gradient font-extrabold">MEMECHAIN</span>
        </h1>
        <Button name="Bridge to Laïka now" style="px-6" />
    </div>
</section>

    </>
  )
}

export default Memechain