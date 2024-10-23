import Button from "@/components/Button";
import { productmanage } from "@/data";
import Image from "next/image";
import React from "react";

const ProductManagement = () => {
  return (
    <section className="w-full min-h-screen md:mt-8 -mt-2">
      <div className="w-full lg:h-[60vh] md:h-[50vh] h-auto relative">
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
          className="absolute object-contain top-20 md:right-[10%] right-[4%]"
        />
        <Image
          src={"/Polygon.svg"}
          alt="bannerimg"
          width={40}
          height={40}
          className="absolute  object-contain md:left-[14%] left-[4%] top-20"
        />
        <Image
          src={"/polygon2.svg"}
          alt="bannerimg"
          width={40}
          height={40}
          className="absolute  object-contain md:left-[34%] left-[18%] md:bottom-2 -bottom-16"
        />
        <div className="w-full max-w-3xl md:px-4 lg:px-4 absolute md:top-[20%] top-[10%] lg:left-[23%] md:left-0 left-0 flex items-center justify-center flex-col">
          <h1 className="text-black relative leading-relaxed text-center font-extrabold lg:text-4xl md:text-5xl text-3xl font-grotesque lg:w-[100%] md:w-full w-[83%]">
            Transforming Ideas into Market-Ready Products
            <span className="absolute lg:left-[36%] md:left-[56%] top-[28%] lg:top-[32%] lg:w-32 md:w-72 w-20">
              {" "}
              <Image
                src={"/idea.svg"}
                alt="bannerimg"
                width={150}
                height={70}
                className="object-contain"
              />
            </span>{" "}
          </h1>
          <p className="md:text-xl text-sm text-subtext text-center md:text-left">
            End-to-end product management to ensure your vision meets market
            needs.
          </p>
          <Button
            name="Book a session"
            buttonClass="p-3 w-40 mt-4 bg-[#02775C] text-white"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto lg:h-auto md:h-[40vh] h-auto mt-20 px-4 md:pb-14 md:mt-0 mb-14 md:mb-0 ">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[1400px] lg:ml-20 md:ml-4 ">
            <Image
              src={"/productmanagementbg.png"}
              alt="productmanimg"
              width={1200}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl  mx-auto lg:h-auto md:h-[50vh] h-auto mt-20 md:mt-0 px-4 md:px-4 lg:px-0">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl ont-grotesque font-bold text-black text-center md:text-left">
            Our Expertise, Your Advantage
          </h2>
          <p className="text-[#18181880]  text-2xl md:w-[70%] w-full text-center mt-3 font-grotesque">
            Comprehensive solutions tailored to transform your ideas
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-24">
            {productmanage.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: item?.cardColor && item?.cardColor,
                }}
                className={`w-full h-[240px] space-y-4 p-4 px-6 relative flex flex-col  rounded-xl`}
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
                <h2 className={`text-black text-2xl mt-6 font-grotesque px-2 font-bold `}>
                  {item?.title}
                </h2>
                <p className=" px-2 whitespace-normal text-subtext text-[12px] mt-6 w-[89%]">
                  {item?.descri}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto lg:h-auto md:h-[60vh] lg:mt-24 md:mt-48 mt-10 px-4 md:px-4 lg:px-0 lg:py-8">
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
                <h1 className="md:text-3xl text-xl text-black leading-loose font-extrabold text-left font-grotesque md:w-[90%] w-full">
                  At Techwave, we bridge the gap between great ideas and
                  successful product launches. 
                </h1>
                <p className="text-[16px] text-subtext text-left w-[92%]">
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
