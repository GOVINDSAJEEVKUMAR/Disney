import React from 'react';
import Wild from '../assets/Prodaction/Image/wild.mp4';
import disney from '../assets/Prodaction/disney.png';

function ProductionHouse() {
    const list = [
        {
            id: 1,
            image: disney,
            video: Wild
        },
        {
            id: 2,
            image: disney,
            video: Wild
        },
        {
            id: 3,
            image: disney,
            video: Wild
        },
        {
            id: 4,
            image: disney,
            video: Wild
        },
        {
            id: 5,
            image: disney,
            video: Wild
        },
    ];

    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
            {list && list.map((item) => (
                <div 
                    key={item.id} 
                    className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden'
                >
                    <video 
                        src={item.video} 
                        autoPlay 
                        loop 
                        playsInline 
                        muted 
                        className='absolute top-0 left-0 w-full h-full rounded-md z-0 opacity-0 hover:opacity-50 object-cover'
                    />
                    <img 
                        src={item.image} 
                        alt="Production House" 
                        className='w-full rounded-md z-[1]' 
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse;
