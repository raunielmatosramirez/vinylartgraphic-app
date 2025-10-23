import About from "@/app/Components/About";
import React from "react";

const aboutPage = () => {
  return (
    <>
      <section className='flex flex-col items-center  justify-center text-center py-12  px-4'>
        <div className='fixed inset-0 flex items-center justify-center z-0 '>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <About />
      </section>
    </>
  );
};
export default aboutPage;
