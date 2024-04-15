import React from 'react'
// import * as images from "../assets";

const Memecoin = () => {
    return (
        <>
            <section className="my-32">
                <div className="w-full rounded-[20px] bg-dark-gradient sm:h-[300px] md:h-[200px] lg:h-[300px] p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="w-[100%] sm:relative">
                            <img src="src/assets/unleash.gif" alt="memecoin" className="w-full sm:absolute sm:top-[-60%] md:top-[-60%] lg:top-[-40%] xl:top-[-55%] mix-blend-screen md:max-w-[500px] m-auto" />
                        </div>
                        <div className="flex items-center justify-center mt-[10%]">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center lg:leading-[70px] w-[70%]">
                                Unleash the full potential of{" "}
                                <span className="text-gradient">memecoins</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Memecoin