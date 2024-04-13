import React from 'react'
import * as images from "../assets";

const Footer = () => {
    const quickLink = [
        {
            id: "",
            title: "LINK #1",
        },
        {
            id: "",
            title: "LINK #2",
        },
        {
            id: "",
            title: "LINK #3",
        },
        {
            id: "",
            title: "LINK #4",
        },
    ];
    const community = [
        {
            id: "",
            title: "LINK #1",
        },
        {
            id: "",
            title: "LINK #2",
        },
    ]
    return (
        <>
         <footer className='mb-10'>
    <div className='flex flex-col gap-10 md:flex-row justify-between'>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5 items-center'>
                <img src={images.logo} alt="Hoobank" className="w-[64px] h-[64px]" />
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-medium'>Laïka</h1>
            </div>
            <p className="text-dimGrey text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg w-full md:w-72">Pioneering the Infrastructure that elevates memecoins to new height.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
            <div>
                <h1 className='text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-white font-medium'>Quick Links</h1>
                <div className='mt-4 md:mt-9'>
                    <ul className="list-none flex flex-col justify-end md:items-end">
                        {quickLink.map((nav) => (
                            <li
                                key={nav.id}
                                className="font-normal cursor-pointer text-lg md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] mb-4 text-dimGrey"
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-white font-medium'>Community</h1>
                <div className='mt-4 md:mt-9'>
                    <ul className="list-none flex flex-col justify-end md:items-end">
                        {community.map((nav) => (
                            <li
                                key={nav.title}
                                className="font-normal cursor-pointer text-lg md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] mb-4 text-dimGrey"
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

        </>
    )
}

export default Footer