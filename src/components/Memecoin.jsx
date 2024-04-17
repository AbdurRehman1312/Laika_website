import React from 'react'
import * as images from "../assets";

const Memecoin = () => {
    return (
        <>
            <section className="my-32">
                <div className="w-full rounded-[20px] bg-dark-gradient sm:h-[300px] md:h-[200px] lg:h-[300px] xl:h-[300px] p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="sm:relative xl:w-[700px] lg:w-[500px] sm:w-[400px] md:w-[350px]">
                            <img src={images.unleash2} alt="memecoin" className="w-full sm:absolute sm:top-[-80%] md:top-[-60%] lg:top-[-60%] xl:top-[-75%] mix-blend-screen" />
                        </div>
                        <div className="flex items-center justify-center mt-[1%] xl:mt-[1%] lg:mt-[6%]">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center lg:leading-[65px] md:leading-[50px] xl:leading-[82px] w-[70%]">
                                Unleash the full potential of{" "}
                                <span className="text-gradient font-extrabold">memecoins</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Memecoin