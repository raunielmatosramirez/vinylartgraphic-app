import Image from "next/image";
import React from "react";

const CustomSignsMarkers = () => {
  return (
    <>
      <div className='relative w-full max-w-2xl mx-auto'>
        <div className='h-full '>
          <div className=' flex flex-col justify-center'>
            <h1 className='text-white text-[35px] leading-tight'>
              CUSTOM{" "}
              <span className='text-[#FFFF00] font-bold text-[35px] leading-tight'>
                SIGNS
              </span>
            </h1>
            <h2 className='text-[#FFFF00] font-bold text-[35px] leading-tight mb-2'>
              MARKERS
            </h2>

            <h3 className='text-pink-500 text-[16px] mb-2'>CHANNEL LETTER</h3>
          </div>

          <div className='h-full '>
            <Image
              width={600}
              height={400}
              src='/HOMESUSHI.png'
              alt='Car Wrap Business'
              className='object-cover w-full imgemenostop'
              priority
            />
          </div>
          <div className='h-full text-end  '>
            <a
              href='#'
              className='text-white text-base md:text-[16px] underline hover:no-underline transition-all mb-[50px] mr-4  md:mt-[-150px] duration-300 inline-block'
            >
              LEARN MORE...
            </a>
          </div>
        </div>
      </div>
      <div className='absolute w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px]  bg-[#FFFF00]'></div>
    </>
  );
};
export default CustomSignsMarkers;
