import Button from "@/components/Button";
import { dataanlytics, productmanage } from "@/data";
import Image from "next/image";
import React from "react";

const ProductManagement = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="w-full h-[50vh] mt-[60px] relative">
        <Image
          src={"/productmanagmentgradient.svg"}
          alt="bannerimg"
          width={1020}
          height={750}
          className="w-screen relative h-full object-cover"
        />
        <Image
          src={"/rectangle.svg"}
          alt="bannerimg"
          width={40}
          height={40}
          className="absolute object-contain top-8 right-[20%]"
        />
        <Image
          src={"/Polygon.svg"}
          alt="bannerimg"
          width={40}
          height={40}
          className="absolute  object-contain left-[20%] top-8"
        />
        <div className="w-full max-w-2xl absolute top-[8%] left-[23%] flex items-center justify-center flex-col">
          <h1 className="text-black leading-relaxed text-center font-bold text-3xl font-grotesque w-[80%]">
            Transforming{" "}
            <span className="relative">
              {" "}
              <Image
                src={"/idea.svg"}
                alt="bannerimg"
                width={100}
                height={70}
                className="absolute  object-contain left-[2%] top-8"
              />
              Ideas
            </span>{" "}
            into Market-Ready Products
          </h1>
          <p className="text-sm text-subtext">
            End-to-end product management to ensure your vision meets market
            needs.
          </p>
          <Button
            name="Book a session"
            buttonClass="p-3 w-40 mt-4 bg-brandcolor text-white"
          />
        </div>
      </div>
      <div className="w-full max-w-3xl  mx-auto h-[60vh]">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={"/productmanagementbg.svg"}
            alt="productmanimg"
            width={600}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full max-w-5xl  mx-auto h-[70vh]">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-xl ont-grotesque font-bold text-black">
            Our Expertise, Your Advantage
          </h2>
          <p className="text-[#18181880] font-bold text-sm md:w-[50%] w-full text-center mt-3 font-grotesque">
            Comprehensive solutions tailored to transform your ideas
          </p>
          <div className="grid grid-cols-3 gap-4 mt-14">
            {productmanage.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: item?.cardColor && item?.cardColor,
                }}
                className={`w-full shadow-2xl h-[200px] space-y-2 p-2 relative flex flex-col  rounded-xl`}
              >
                <div className=" w-full">
                  <div
                    className={` w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brandcolor  `}
                  >
                    <Image
                      src={item?.icon}
                      alt="cardicon"
                      width={8}
                      height={8}
                      className={`w-6 h-6 rounded-full object-cover `}
                    />
                  </div>
                </div>
                <h2 className={`text-black text-sm px-2 font-semibold `}>
                  {item?.title}
                </h2>
                <p className=" px-2 whitespace-normal text-subtext text-xs">
                  {item?.descri}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto h-[100vh] md:mt-24">
        <div className="w-full h-full grid md:grid-cols-2 gap-8">
          <div className="w-full h-full relative ">
            <Image
              src={"/productmanagement2.svg"}
              alt="bannerimg"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
          <div className="w-full h-full flex items-start md:mt-4 mt-10 justify-center">
            <div className="flex flex-col space-y-4 w-[100%]">
              <div className="flex flex-col space-y-6 mb-6">
                <h1 className="text-2xl text-black font-bold text-left font-grotesque w-[73%]">
                  At Techwave, we bridge the gap between great ideas and
                  successful product launches. 
                </h1>
                <p className="text-[16px] text-subtext text-left w-full">
                  {`Our product management services are designed to guide you through every stage of development—from initial concept to market release—ensuring that every step aligns with your goals and customer needs.`}
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

export default ProductManagement;
