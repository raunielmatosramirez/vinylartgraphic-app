"use client";
import Image from "next/image";
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+53 55161541";
  const message = "Hola, me gustaría obtener más información";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className='fixed bottom-6 right-6 z-50 w-14 h-14 bg-transparent  rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center group'
      aria-label='Contactar por WhatsApp'
    >
      <Image
        src='/ICONOWHATSAPP.svg'
        width={50}
        height={50}
        priority={true}
        alt='Whatssap'
      />

      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFF00] opacity-75'></span>
    </button>
  );
};

export default WhatsAppButton;
