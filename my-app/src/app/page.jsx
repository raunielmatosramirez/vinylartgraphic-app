"use client";
import React, { useRef, useEffect, useState } from "react";

import LionComponent from "./Components/LionComponent";
import { usePathname } from "next/navigation";
import { useScroll } from "../contex/ScrollContext";
import Testimonials from "./Components/Testimonials";
import CarWrapBusiness from "./Components/CarWrapBusiness";
import WideFormat from "./Components/WideFormat";
import CustomSignsMarkers from "./Components/CustomSignsMarkers";
import CustomizableProduct from "./Components/CustomizableProduct";
import HeroPage from "./Components/HeroPage";

export default function Home() {
  const { isAtTop } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
    <div className='fixed w-full flex items-center justify-center z-10 h-full'>
      {!isAtTop ?  (
        <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>

      ):(
        ""
      )
      
    }
          </div>
      <main className='relative z-10 backdrop-blur-sm animate-fadeInUp'>
        {isAtTop  ? (
           <section className='w-full h-screen flex items-center justify-center'>
            <LionComponent/>
          </section>
          ):""}      
      
        <section
          id='hero-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
        >
          <HeroPage />
          <div className='w-[100%] max-w-4xl h-[1px] border-t-2 border-dashed border-[#FFFF00] mb-[65px]'></div>
        </section>
        <section
          id='customize-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
        >
          <CustomizableProduct />
        </section>
        <section
          id='car-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] mb-[80px] relative overflow-x-hidden'
        >
          <CustomSignsMarkers />
        </section>
        <section
          id='wide'
          className='w-full flex flex-col items-center justify-center h-[fit-content] overflow-x-hidden mb-[80px]'
        >
          <WideFormat />
        </section>
        <section
          id='car-section'
          className='w-full flex flex-col items-center justify-center h-[fit-content] relative overflow-x-hidden'
        >
          <CarWrapBusiness />
        </section>
        <section
          id='testimonials'
          className='w-full flex flex-col items-center justify-center h-[fit-content]'
        >
          <Testimonials />
        </section>
      </main>
    </>
  );
}
