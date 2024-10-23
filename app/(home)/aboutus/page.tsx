"use client";
import Button from "@/components/Button";
import Founder from "@/components/Founder";
import Heading from "@/components/Heading";
import Phase from "@/components/Phase";
import { phase } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

interface aboutProps {
  title: string;
  descr: string;
  phase: string;
}

const About = () => {
  const [tab, setTab] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when image loads
  };
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section className="w-full  max-w-5xl mx-auto min-h-screen px-4 lg:px-0 lg:mt-14 md:mt-14 mt-0 relative">
      <div className="w-full lg:h-[140vh] md:h-[70vh] h-[70vh] relative lg:pt-14 md:pt-0 pt-52 ">
      {loading && ( // Show loader skeleton when loading
        <div className="absolute inset-0 flex items-start justify-start bg-gray-200">
          <div className="animate-pulse w-full h-2/4 bg-gray-300 rounded-2xl"></div>
        </div>
      )}
        <Image
          src={"/photo-output.jpg"}
          alt="aboutus"
          width={1100}
          height={500}
          className={`object-contain rounded-xl`}
          onLoad={handleImageLoad} // Handle image load
        />

        {/* Text and button box for desktop and tablet (hidden on mobile) */}
        <div className="lg:w-[52%] md:w-[52%] md:h-72 h-auto md:flex hidden flex-col space-y-3 rounded-xl p-4 px-4 z-30 bg-black border-4 border-brandcolor absolute md:-bottom-4 lg:-bottom-4 lg:left-4">
          <p className="lg:text-2xl leading-10 w-[100%] text-sm text-white font-semibold font-grotesque">
            Techwave Africa is a Faith-Driven Tech Startup with the vision to
            build innovative solutions that bring answers to the problem and
            needs of businesses and individuals around the world.
          </p>
          <div className="w-full lg:pt-8">
            <Button name="Book a session" buttonClass="p-2 w-36 bg-white " />
          </div>
        </div>

        {/* Text and button box for mobile view (hidden on desktop and tablet) */}
        <div className="md:hidden top-0 h-auto flex flex-col space-y-3 rounded-xl p-4 px-4 z-30 bg-black border-4 border-brandcolor absolute">
          <p className=" text-lg text-white font-semibold font-grotesque w-[60%]">
            We have a dedicated team committed to bringing your dreams to life.
          </p>
          <div className="w-full lg:pt-8">
            <Button name="Book a session" buttonClass="p-2 w-32 bg-white " />
          </div>
        </div>
      </div>

      {/* "Why Us?" Section */}
      <div className="w-full lg:h-[100vh] h-[50vh] flex flex-col items-center justify-center lg:mt-10 mt-2 ">
        <div className="w-40">
          <h2 className="text-black text-2xl font-semibold font-grotesque text-center">
            Why us?
          </h2>
          <div className="w-24 h-10 relative">
            <Image
              src={"/whyus.png"}
              alt="aboutus"
              width={32}
              height={32}
              className={`object-contain absolute -top-1 left-[35%]`}
            />
          </div>
        </div>

        <div className="lg:w-[30%] w-[70%] p-2 rounded-xl bg-[#F2F5FF] gap-4 mt-4 mb-4">
          <button
            type="button"
            onClick={() => setTab(true)}
            className={cn("w-1/2 bg-transparent p-2 rounded-xl", {
              "bg-white": tab,
            })}
          >
            Mission
          </button>
          <button
            type="button"
            onClick={() => setTab(false)}
            className={cn("w-1/2 bg-transparent p-2 rounded-xl", {
              "bg-white": !tab,
            })}
          >
            Value
          </button>
        </div>

        {tab ? (
          <div className="grid lg:grid-cols-2 gap-4 p-2 lg:h-[40vh] h-auto mt-10">
            <div>
              <h2 className="text-black lg:text-3xl text-lg font-semibold lg:w-[90%] font-grotesque">
                Empowering the Future Through Faith and Innovation
              </h2>
            </div>
            <div>
              <p className="lg:text-2xl text-sm text-subtext font-medium lg:w-[90%] font-grotesque">
                As change agents we are on a mission to create innovative
                products that inspire positive change and bring light to lives
                across the globe.
              </p>
            </div>
          </div>
        ) : (
          <div className="lg:h-[40vh]">
            <h2>Coming soon!</h2>
          </div>
        )}
      </div>

      {/* What We Do Section */}
      <div className="w-full lg:h-[100vh] md:h-[80vh] h-[120vh] pb-10 flex flex-col lg:mt-4 space-x-2 p-0 relative ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className="relative h-12">
              <div className="w-16 h-16 rounded-full bg-brandcolor border-2 border-black" />
              <p className="w-fit z-50 absolute top-4 left-1 text-3xl font-semibold">
                <span className="text-white">Wha</span>t we do
              </p>
            </div>
            <p className="w-[90%] text-subtext text-[16px] mt-8">
              Techwave is a faith-based startup dedicated to developing and
              managing innovative products that address specific needs and
              challenges, with the goal of bringing light to businesses and
              individuals around the world.
            </p>
          </div>

          {/* Cards (Consulting, Research, Innovation) */}
          <div>
            <div className="flex flex-col space-y-3 lg:items-end lg:justify-end">
              {["Consultant", "Research", "Innovation"].map((title, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative text-sm lg:w-[80%] w-[100%] px-4 flex flex-col cursor-pointer items-start justify-center rounded-xl shadow-2xl shadow-[#B7CFFF] border-l-2 transition-all duration-300 overflow-hidden ${
                    hovered === index
                      ? "border-l-brandcolor h-40"
                      : "border-l-[#B7CFFF] h-20"
                  }`}
                >
                  <span className="text-lg text-black">{title}</span>
                  {hovered === index && (
                    <p
                      className={`mt-2 text-xs text-subtext transition-opacity duration-300 transform ${
                        hovered === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      We provide expert consulting services to help you achieve
                      your business goals.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="w-full lg:mt-24 mb-0">
          <Image
            src={"/aboutuscardl.png"}
            alt="aboutus"
            width={100}
            height={100}
            className="object-contain absolute lg:-bottom-10 lg:left-0 -left-[40px] -bottom-10"
          />
          <Image
            src={"/aboutuscard.png"}
            alt="aboutus"
            width={350}
            height={200}
            className="object-contain absolute lg:left-[120px] md:left-[100px] left-10 lg:-bottom-16 -bottom-10"
          />
          <Image
            src={"/aboutuscardr.png"}
            alt="aboutus"
            width={100}
            height={100}
            className="object-contain absolute lg:left-[48%] left-[88%] lg:bottom-20 bottom-20"
          />
        </div>
      </div>

      {/* Work Process Section */}
      <div className="w-full lg:h-[100vh] h-auto flex flex-col space-y-5 mt-40">
        <Heading
          name="Work process"
          desc="We work step by step to achieve better growth results."
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-4  grid-cols-1">
          {phase.map((item: aboutProps, index: number) => (
            <Phase
              key={index}
              title={item?.title}
              descr={item?.descr}
              phase={item?.phase}
            />
          ))}
        </div>
      </div>
      <Founder />
    </section>
  );
};

export default About;
