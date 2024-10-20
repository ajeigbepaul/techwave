import Button from "@/components/Button";
import Card from "@/components/Card";
import { service } from "@/data";
import Image from "next/image";
import React from "react";

const ProductResearch = () => {
  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto flex flex-col md:mt-14 mt-10">
      <div className="md:p-14 p-2 w-full md:h-[70vh] h-[60vh]">
        <div className="w-full flex items-center space-x-2 mt-10">
          <h2 className="text-black font-semibold text-lg">Research</h2>
          <div className="w-4 h-4 bg-gold rounded-full" />
          <h2 className="text-black font-semibold text-lg">Ideate</h2>
          <div className="w-4 h-4 bg-gold rounded-full" />
          <h2 className="text-black font-semibold text-lg">Launch</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full flex flex-col mt-4 space-y-5 mb-10">
            <h1 className="text-5xl font-bold w-[50%] font-grotesque">
              Product Research{" "}
            </h1>
            <h1 className="text-5xl font-bold w-fit font-grotesque">
              and<span className="bg-brandcolor px-2 text-white">Design</span>
            </h1>
          </div>
          <div className="w-36 h-36 relative">
            {" "}
            <Image
              src={"/research.svg"}
              alt="aboutus"
              width={100}
              height={100}
              className={`object-contain`}
            />
          </div>
        </div>
        <Button
          name="Book a session"
          buttonClass="w-36 p-3 bg-black text-white"
        />
      </div>
      <div className="w-full md:h-[70vh] h-auto pb-10 md:px-12 px-2">
        <div className="w-full">
          <div className="md:w-3/4 w-full ">
            <Image
              src={"/designprocess.svg"}
              alt="aboutus"
              width={900}
              height={500}
              className={`object-contain`}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:h-[100vh] h-auto pb-10 md:px-12 px-2 mt-20">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-4 mb-8 md:mb-0">
            <h1 className="text-xs text-brandcolor">Our Services</h1>
            <h1 className="md:w-[75%] w-full text-black text-3xl font-bold font-grotesque">
              Comprehensive Product Development at Techwave
            </h1>
            <p className="md:w-[80%] w-full text-subtext text-[16px] mt-10 ">
              Creating a successful product requires more than just an idea. It
              involves thorough research, thoughtful design, and meticulous
              development. At Techwave, we specialize in guiding you through
              this process, turning your vision into a tangible, market-ready
              product.
            </p>
            <Button
              name="Book a session"
              buttonClass="p-3 w-60 bg-black text-white mt-20 "
            />
          </div>
          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              {service.map((item, idx) => (
                <Card
                  key={idx}
                  icon={item?.icon}
                  image={""}
                  title={item?.title}
                  descri={item?.descri}
                  bgcolor={item?.cardColor}
                  cardClass={"h-[220px] px-8"}
                  id={2}
                  addedStyle="text-xl font-grotesque"
                  addedStyleD="text-xs text-whitesubtext"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductResearch;
