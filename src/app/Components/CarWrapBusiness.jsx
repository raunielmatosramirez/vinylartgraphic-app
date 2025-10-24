import Image from "next/image";
import React from "react";

const CarWrapBusiness = () => {
  return (
    <>
      <div className='flex flex-col h-full px-8 md:flex-row'>
        {/* Lado izquierdo - Texto */}
        <div className='flex-1 flex flex-col justify-center'>
          <h1 className='text-[#FFFF00] text-4xl font-bold leading-tight'>
            CAR WRAP
          </h1>
          <h2 className='text-white text-[35px] leading-tight mb-2'>
            ADVERTISE YOUR
          </h2>
          <h1 className='text-[#FFFF00] text-4xl font-bold leading-tight mb-2'>
            BUSINESS
          </h1>
          <h3 className='text-pink-500 text-[16px] mb-2'>EXCLUSIVE</h3>
          <a
            href='#'
            className='text-white text-base md:text-[16px] underline hover:no-underline transition-all mt-[60px] md:mt-[30px] duration-300 inline-block'
          >
            LEARN MORE...
          </a>
        </div>

        <div className='flex-1 relative h-full'>
          <Image
            width={450}
            height={450}
            src='/HOMECARWRAP.png'
            alt='HOMECARWRAP'
            className='object-cover'
            priority
          />
        </div>
      </div>
      <Image
        width={680}
        alt='neon'
        priority
        height={5}
        src='/HOMENEONDESECCIÓNDEVIDEO.png'
      />
      <div className=' w-[40%]   sm:w-[40%] md:w-[50%]   mb-[83px] h-[400px] border border-[#ff00cc] '>
        <video className='w-full h-full object-cover' controls muted loop>
          <source src='/tu-video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='absolute w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-[#FFFF00]'></div>
    </>
  );
};
export default CarWrapBusiness;
