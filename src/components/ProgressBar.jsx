import React from 'react';

const ProgressBar = ({ progress }) => {
    const markers = ["+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%", "+10%"];
    // const bottomMarkers = ["$5,000", "$15,000", "$30,000", "$50,000", "$75,000", "$100,000", "$150,000", "$200,000"];
    const bottomMarkersMobile = ["$5k", "$15k", "$30k", "$50k", "$75k", "$100k", "$150k", "$200k"];

    return (
        <>
            <div className='flex flex-col w-full items-center '>
                <div className="flex justify-between w-[90%] mb-2">
                    {markers.map((marker, index) => (
                        <div key={index} className="relative">
                            <span className="marker-text text-white md:text-base text-xs text-center font-bold">{marker}</span>
                            <div className='p-3 mark border-r absolute top-[27px] md:top-[27px] lg:top-[27px] xl:top-[27px] md:right-[18px] z-[100]'></div>
                        </div>
                    ))}
                </div>
                <div className="progress-container bg-dark-gradient3 w-[90%] rounded-full overflow-hidden">
                    <div className="progress-bar bg-gradient-to-r from-teal-400 to-blue-500 h-4" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex justify-between w-[90%] mt-2">
                    {bottomMarkersMobile.map((marker, index) => (
                        <div key={index} className="relative">
                            <span className="marker-text text-gray-400 md:text-base text-xs">{marker}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
