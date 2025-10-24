import ContactUs from "@/app/Components/ContactUs";
import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center text-center py-12 px-1'>
        <div className='fixed inset-0 flex items-center justify-center z-0 '>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className='w-[80%] md:w-[50%]  z-10 '>
          <ContactUs />
        </div>
      </section>
    </>
  );
};
export default ContactUsPage;
