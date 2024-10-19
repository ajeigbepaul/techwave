import Button from "@/components/Button";

import { dataanlytics} from "@/data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full h-[100vh] relative mt-10 mb-0">
        <Image
          src={"/bg1black.svg"}
          alt="bannerimg"
          width={1020}
          height={750}
          className="w-screen relative h-full object-cover"
        />
        <Image
          src={"/bgblackcontour.svg"}
          alt="bannerimg"
          width={1020}
          height={750}
          className="w-screen absolute top-0 h-full object-cover"
        />
        <div className=" absolute top-0 w-full h-full grid md:grid-cols-2">
          <div className="w-full h-full flex items-start md:mt-24 mt-10 justify-center">
            <div className="flex flex-col space-y-4 w-[80%]">
              <div className="flex flex-col space-y-6 mb-6">
                <h1 className="text-5xl text-white font-bold text-left font-grotesque">
                  Data Analytics
                </h1>
                <p className="text-whitetext text-md text-left">
                  {`At Techwave, we recognize the immense power of data in shaping
                  business strategies and driving success. Our Data Analytics
                  services are designed to help you harness this power by
                  turning raw data into actionable insights.`}
                </p>
              </div>
              <Button
                name="Book a session"
                buttonClass="p-3 w-40 bg-brandcolor text-white"
              />
            </div>
          </div>
          <div className="w-full h-full relative">
            <Image
              src={"/dataanalyticimagebg.svg"}
              alt="bannerimg"
              width={450}
              height={450}
              className="object-contain absolute top-14 left-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh]  relative mt-14 mb-0">
        <div className=" absolute top-0 w-full h-full grid md:grid-cols-2">
          <div className="w-full h-full flex items-start md:mt-24 mt-10 justify-center">
            <div className="flex flex-col space-y-4 w-[80%]">
              <div className="flex flex-col space-y-6 mb-6">
                <h1 className="text-3xl text-black w-[70%] font-bold text-left font-grotesque">
                  Transforming insights into actions
                </h1>
                <p className="text-subtext text-md text-left font-grotesque w-[90%]">
                 {` In today's data-driven world, making informed decisions is
                  crucial for business success. Our Data Analytics services
                  provide the tools and expertise you need to collect, analyze,
                  and interpret data effectively. We help you transform complex
                  data sets into clear, actionable insights that drive strategic
                  decision-making.`}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative">
            <Image
              src={"/whatwedoleft.svg"}
              alt="aboutus"
              width={100}
              height={100}
              className={`object-contain absolute md:bottom-32 bottom-4 left-0`}
            />
            <Image
              src={"/dataanalyticimage.svg"}
              alt="bannerimg"
              width={380}
              height={450}
              className="object-contain z-50 absolute top-0 left-16"
            />
            <Image
              src={"/whatwedoright.svg"}
              alt="aboutus"
              width={50}
              height={50}
              className={`object-contain absolute md:right-[28%] md:-top-6 top-20`}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh]  flex flex-col items-start justify-start">
        <div className="w-full px-24 flex flex-col">
          <div className="w-full flex mb-10 items-center justify-center ">
            <div className="w-56 relative h-10">
              <h2 className="text-black mb-5  w-fit text-2xl font-semibold font-grotesque text-center">
                Our Capabilities?
              </h2>
              <div className="w-24 h-10 ">
                {" "}
                <Image
                  src={"/whyus.svg"}
                  alt="analytics"
                  width={32}
                  height={32}
                  className={`object-contain absolute bottom-0 left-[0]`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/dataanalyticimage2.svg"}
                  alt="bannerimg2"
                  width={400}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {dataanlytics.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: item?.cardColor && item?.cardColor,
                    }}
                    className={`w-full shadow-2xl h-[148px] space-y-2 p-0 relative flex flex-col  rounded-xl`}
                  >
                    <div className=" w-full">
                      <div
                        className={` w-12 h-12 rounded-full bg-white flex items-center justify-center  `}
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
        </div>
      </div>
    </section>
  );
};

export default page;
