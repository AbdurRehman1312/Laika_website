import React from 'react'
// import * as images from "../assets";

const Memecoin = () => {
    return (
        <>
            <section className="my-32">
                <div className="w-full rounded-[20px] bg-dark-gradient">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="flex justify-center items-center ">
                            <img src="src/assets/memecoin.png" alt="memecoin" className="w-full md:max-w-[300px] m-auto" />
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold text-center lg:leading-[70px]">
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