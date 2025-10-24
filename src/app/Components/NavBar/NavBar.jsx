// Navbar.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/contex/ScrollContext";

const Navbar = ({ services }) => {
  const { isAtTop } = useScroll();
  const pathname = usePathname();
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 bg-transparent mt-0 ${
        !isAtTop && pathname === "/" ? "backdrop-blur-sm" : ""
      }`}
    >
      <div className='px-6 sm:px-10 lg:px-20'>
        <div className='max-w-full mx-auto flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                src='/LOGOVINYLART.svg'
                alt='Logo'
                width={90}
                height={90}
                className='w-16 h-16 lg:w-20 lg:h-20'
              />
            </Link>
          </div>
          <div
            className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              pathname === "/"
                ? !isAtTop
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className='flex space-x-6 lg:space-x-8'>
              <Link
                href='/'
                className='text-[#FFFF00] hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base'
              >
                HOME
              </Link>

              {/* Services con dropdown */}
              <div
                className='relative'
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <Link
                  href=''
                  className='text-[#FFFF00] hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base flex items-center'
                >
                  SERVICES
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      isServicesHovered ? "rotate-180" : ""
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                {isServicesHovered && (
                  <div className='absolute top-full mt-[0px] left-1/2 transform -translate-x-1/3  w-[170px]  bg-black/60 backdrop-blur-sm '>
                    {services.map((serv,key) => (
                      <Link key={key}
                          href={`/services/${serv.service?.toLowerCase().replace(/\s+/g, '-')}`}
                        className='block px-4 py-2 text-[#FFFF00] hover:text-white hover:bg-[#FFFF00]/10 transition-colors duration-200 text-sm'
                      >
                        {serv?.service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href='/about-us'
                className='text-[#FFFF00] hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base'
              >
                ABOUT US
              </Link>
              <Link
                href='/contact-us'
                className='text-[#FFFF00] hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base'
              >
                CONTACT US
              </Link>
              <Link
                href='/gallery-photos'
                className='text-[#FFFF00] hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base'
              >
                GALLERY
              </Link>
            </div>
          </div>

          <div className='flex items-center'>
            <Image
              src='/ICONOBUSCADOR.svg'
              alt='Search'
              width={50}
              height={50}
              className='w-8 h-8 lg:w-10 lg:h-10'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
