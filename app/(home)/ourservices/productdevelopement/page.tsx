import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { productdevelopement } from "@/data";
import Image from "next/image";
import React from "react";

const ProductDev = () => {
  return (
    <section className="w-full min-h-screen relative">
      <div className="w-full h-[100vh] mt-10">
        <Image
          src={"/productdevelopment.svg"}
          alt="bannerimg"
          width={1020}
          height={750}
          className="w-screen relative h-full object-cover"
        />
        <div className="absolute w-[70%] top-[14%] px-24">
          <div className="flex flex-col space-y-6 mb-6">
            <h1 className="text-5xl text-white font-bold text-left font-grotesque">
              Transforming Ideas into
            </h1>
            <h1 className="text-5xl text-white font-bold text-left font-grotesque">
              Powerful Digital Solutions
            </h1>
            <p className="text-whitetext text-md text-left">
              {`Building user-centric web and mobile applications tailored to your business needs.`}
            </p>
            <Button
              name="Book a session"
              buttonClass="p-3 w-40 bg-brandcolor text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-full  h-[70vh] bg-[#F9FBFF] flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto">
          <Heading
            noborder
            name="Our Development Process"
            desc="Our process blends creativity, technology, and precision."
          />
          <div className="grid grid-cols-3 gap-8">
            {productdevelopement.map((item, idx) => (
              <div key={idx} className="w-full rounded-[8px] p-2 flex items-center space-x-2 border border-[#B7CFFF] ">
                <Image
                  src={item?.icon}
                  alt="cardicon"
                  width={8}
                  height={8}
                  className={`w-6 h-6 rounded-full object-cover `}
                />
                <h2 className="text-black text-sm font-semibold">
                  {item?.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto h-[100vh] md:mt-14">
        <div className="w-full h-full grid md:grid-cols-2 gap-8">
          <div className="w-full h-full relative ">
            <Image
              src={"/productdevelopment2.svg"}
              alt="bannerimg"
              width={450}
              height={450}
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
