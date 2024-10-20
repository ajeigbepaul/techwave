import Button from "@/components/Button";
import { productmanage } from "@/data";
import Image from "next/image";
import React from "react";

const ProductManagement = () => {
  return (
    <section className="w-full min-h-screen md:mt-14 mt-10">
      <div className="w-full md:h-[50vh] h-auto relative px-2">
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
        <div className="w-full max-w-2xl absolute md:top-[8%] top-[10%] md:left-[23%] left-0 flex items-center justify-center flex-col">
          <h1 className="text-black leading-relaxed text-center font-bold text-3xl font-grotesque md:w-[80%] w-full">
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
          <p className="text-sm text-subtext text-center md:text-left">
            End-to-end product management to ensure your vision meets market
            needs.
          </p>
          <Button
            name="Book a session"
            buttonClass="p-3 w-40 mt-4 bg-brandcolor text-white"
          />
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto md:h-[60vh] h-auto mt-14 md:mt-0 mb-14 md:mb-0 ">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={"/productmanagementbg.png"}
            alt="productmanimg"
            width={600}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full max-w-5xl  mx-auto md:h-[70vh] h-auto mt-20 md:mt-0 px-2 md:px-0">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-xl ont-grotesque font-bold text-black">
            Our Expertise, Your Advantage
          </h2>
          <p className="text-[#18181880] font-bold text-sm md:w-[50%] w-full text-center mt-3 font-grotesque">
            Comprehensive solutions tailored to transform your ideas
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-14">
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
      <div className="w-full max-w-5xl mx-auto h-[100vh] md:mt-24 mt-10 px-2 md:px-0">
        <div className="w-full h-full grid md:grid-cols-2 gap-8">
          <div className="w-full h-full relative ">
            <Image
              src={"/productmanagement2.png"}
              alt="bannerimg"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
          <div className="w-full h-full flex items-start md:mt-4 mt-10 justify-center">
            <div className="flex flex-col space-y-4 w-[100%]">
              <div className="flex flex-col space-y-6 mb-6">
                <h1 className="md:text-2xl text-xl text-black font-bold text-left font-grotesque md:w-[73%] w-full">
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
