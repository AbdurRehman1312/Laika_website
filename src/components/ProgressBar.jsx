
import React from 'react';
const ProgressBar = ({ progress }) => {
    const markers = [0, 5, 10, 25, 50, 100, "+ 500"];
    const maxValue = 700;

    return (
        <>
        <div className='flex flex-col w-full items-center'>
        <div className="flex justify-between w-[61%] md:w-[64%] lg:w-[68%]  mb-2">
                {markers.map((marker, index) => (
                    <div key={index} className="relative" >
                        <span className="marker-text text-dimGrey text-base text-center ">{marker}</span>
                        <div className='p-3  mark border-r absolute top-[32px] md:top-[32px] lg:top-[33px] xl:top-[32px] right-[7px] z-[100]'></div>
                    </div>
                ))}
            </div>
         <div className="progress-container">
           
            <div className="progress-bar " style={{ width: `${progress }%` }} />
            
        </div>
        </div>
        
        </>
       
    );
};

export default ProgressBar;
