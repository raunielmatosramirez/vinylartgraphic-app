import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className='flex items-center justify-center mb-6'>
        <Link href='/'>
          <Image
            src='/LOGOVINYLART.svg'
            alt='Logo'
            width={90}
            height={90}
            priority={true}
            className='w-16 h-16 lg:w-20 lg:h-20'
          />
        </Link>
      </div>
      <div className='flex flex-row items-start justify-center w-full max-w-4xl px-1'>
        <div className='flex-1 text-end pr-4'>
          <h2 className='text-[#FFFF00] text-[14px]'>SERVICES</h2>
          <p className='text-white text-[12px] lg:text-[12px] mb-1'>
            PROMO ITEMS
          </p>
          <p className='text-white text-[12px] lg:text-[12px] mb-1'>PRINTS</p>
          <p className='text-white text-[12px] lg:text-[12px] mb-1'>CAR WRAP</p>
          <p className='text-white text-[12px] lg:text-[12px] mb-1'>
            WIDE FORMAT, SIGNS & BANNERS
          </p>
          <p className='text-white text-[12px] lg:text-[12px] mb-1'>
            CUSTOM SIGNS MARKERS
          </p>
        </div>
        <div className='flex-1 text-start pl-4'>
          <h2 className='text-[#FFFF00] text-[14px] bold'>CONTACT INFO</h2>
          <div className='flex items-center gap-2 mb-1'>
            <Image
              src='/images-footer/CELLICON.svg'
              alt='Icono 1'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              +1 (786) 532-7005
            </p>
          </div>

          <div className='flex items-center gap-2 mb-1 '>
            <Image
              src='/images-footer/EMAILICON.svg'
              alt='Icono 2'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              info@vinylartgraphic.com
            </p>
          </div>

          <div className='flex items-center gap-2 mb-1'>
            <Image
              src='/images-footer/UBICACIÓNICON.svg'
              alt='Icono 3'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              4910 E 4th  Ave, Hialeah, FL 33013
            </p>
          </div>

          <div className='flex items-center gap-2 mb-1'>
            <Image
              src='/images-footer/EMAILICON.svg'
              alt='Icono 4'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white text-[12px] lg:text-[12px]'>
              Monday – Friday Saturday and Sunday : Closed
            </p>
          </div>

          <div className='flex items-center gap-2 '>
            <Image
              src='/images-footer/RELOJICON.svg'
              alt='Icono 5'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <p className='text-white  text-[12px] lg:text-[12px]'>
              10:00 – 17:00
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center gap-6 mt-8'>
        <div className='text-white hover:text-[#FFFF00] transition-colors cursor-pointer'>
          <Image
            src='/images-footer/FACEBOOK ICON.svg'
            alt='FACEBOOK'
            width={8}
            height={8}
            className='w-8 h-8'
          />
        </div>
        <div className='text-white hover:text-[#FFFF00] transition-colors cursor-pointer'>
          <Image
            src='/images-footer/INSTAGRAM ICON.svg'
            alt='INSTAGRAM'
            width={8}
            height={8}
            className='w-8 h-8'
          />
        </div>
        <div className='text-white hover:text-[#FFFF00] transition-colors cursor-pointer'>
          <Image
            src='/images-footer/YOUTUBE ICON.svg'
            alt='YOUTUBE'
            width={8}
            height={8}
            className='w-8 h-8'
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
