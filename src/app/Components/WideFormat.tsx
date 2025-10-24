"use client";

import Image from "next/image";
import React from "react";

const WideFormat = () => {
  return (
    <>
      <div className='relative w-full max-w-2xl mx-auto'>
        <div className=''>
          <Image
            src='/HOMEWIDEFORMAT.png'
            alt='Wide Format'
            priority={true}
            width={500}
            height={600}
            className='w-[400px] h-auto'
          />
          <div className='absolute top-4 right-4 text-right'>
            <div className='mb-2'>
              <h1 className='text-[#FFFF00] text-[35px] md:text-[35px] font-bold leading-tight'>
                WIDE
              </h1>
              <h2 className='text-white text-[35px] md:text-[35px] leading-tight'>
                FORMAT
              </h2>
            </div>

            <p className='text-pink-500 text-[16px] md:text-[16px] mb-8'>
              ALL KINDS OF VINYL
            </p>

            {/* Learn More más abajo */}
            <div className='mt-56 '>
              <a
                href='#'
                className='text-white text-base tex-end md:text-[16px] underline hover:no-underline transition-all duration-300 inline-block'
              >
                LEARN MORE...
              </a>
            </div>
          </div>
        </div>
        <div className='absolute w-[750px] bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-[#FFFF00]'></div>
      </div>
    </>
  );
};

export default WideFormat;
