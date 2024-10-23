import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { productdevelopement } from "@/data";
import Image from "next/image";
import React from "react";

const ProductDev = () => {
  return (
    <section className="w-full min-h-screen relative md:mt-6 -mt-8">
      <div className="w-full lg:h-[90vh] md:h-[70vh] h-[60vh] mt-8">
          <Image
            src={"/productdevelopment.png"}
            alt="bannerimg"
            width={1020}
            height={750}
            className="relative w-screen h-full object-cover"
          />
        
        <div className="absolute md:w-[70%] w-full md:top-[10%] top-32 md:px-24 px-4">
          <div className="flex flex-col space-y-8 mb-6">
            <h1 className="md:text-5xl text-5xl text-white font-bold text-left font-grotesque">
              Transforming Ideas into
            </h1>
            <h1 className="md:text-5xl text-5xl text-white font-bold text-left font-grotesque">
              Powerful Digital Solutions
            </h1>
            <p className="text-whitetext text-md text-left">
              {`Building user-centric web and mobile applications tailored to your business needs.`}
            </p>
            <Button
              name="Book a session"
              buttonClass="md:p-3 p-4 w-full md:w-40 bg-brandcolor text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-full  lg:h-[70vh] md:h-[60vh] h-[80vh] bg-[#F9FBFF] flex items-center justify-center mt-0  md:mt-0 lg:mt-0 lg:py-14 py-24 md:pt-0 px-4">
        <div className="w-full max-w-3xl mx-auto -mt-10">
          <Heading
            noborder
            addwidth="md:w-[600px] w-[300px]"
            name="Our Development Process"
            desc="Our process blends creativity, technology, and precision."
          />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-2 md:px-0">
            {productdevelopement.map((item, idx) => (
              <div
                key={idx}
                className="w-full rounded-[8px] bg-white md:p-2 md:h-16 p-3 flex items-center space-x-2 border border-[#B7CFFF] "
              >
                <Image
                  src={item?.icon}
                  alt="cardicon"
                  width={8}
                  height={8}
                  className={`w-6 h-6 rounded-full object-cover `}
                />
                <h2 className="text-black text-[15px]  font-bold">
                  {item?.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl px-4 md:px-2 mx-auto lg:h-auto lg:py-4 md:h-[60vh] h-auto md:mt-14 mt-10">
        <div className="w-full h-full grid md:grid-cols-2 gap-8">
          <div className="w-full h-full relative ">
            <Image
              src={"/productdevelopment2.png"}
              alt="bannerimg"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="w-full h-full flex items-start md:mt-24 mt-10 justify-center">
            <div className="flex flex-col space-y-4 w-[100%]">
              <div className="flex flex-col space-y-6 mb-6">
                <h1 className="text-2xl text-black font-bold text-left font-grotesque w-[60%]">
                  Ready to Elevate Your Digital Presence?
                </h1>
                <p className="text-[16px] text-subtext text-left w-full">
                  {`Partner with Techwave for expert web and mobile app development services that drive success. Contact us today to discuss your project and start your journey towards a powerful digital solution.`}
                </p>
              </div>
              <Button
                name="Book a session"
                buttonClass="p-3 w-40 bg-brandcolor text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDev;
