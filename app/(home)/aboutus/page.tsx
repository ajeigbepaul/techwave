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
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <section className="w-full max-w-5xl mx-auto min-h-screen px-2 md:px-0 md:mt-14 mt-10">
      <div className="w-full md:h-[100vh] h-[50vh] relative md:pt-14">
        <Image
          src={"/aboutus.png"}
          alt="aboutus"
          width={1100}
          height={500}
          className={`object-contain rounded-xl`}
        />

        <div className="md:w-[52%] md:h-72 h-60 flex flex-col space-y-3 rounded-xl p-4 px-4 z-30 bg-black border-4 border-brandcolor absolute md:-bottom-14 md:left-4">
          <p className="md:flex hidden md:text-2xl leading-10 w-[100%] text-sm text-white font-semibold font-grotesque">
            Techwave Africa is a Faith-Driven Tech Startup with the vision to
            build innovative solutions that bring answers to the problem and
            needs of businesses and individuals around the world.
          </p>
          <p className="md:hidden ">
            We have a dedicated team committed to bringing your dreams to life
          </p>
          <div className="w-full md:pt-8">
            <Button name="Book a session" buttonClass="p-2 w-36 bg-white " />
          </div>
        </div>
      </div>
      <div className="w-full md:h-[100vh] h-[70vh] flex flex-col items-center justify-center md:mt-10 mt-8 ">
        <div className="w-40 ">
          <h2 className="text-black text-2xl font-semibold font-grotesque text-center">
            Why us?
          </h2>
          <div className="w-24 h-10 relative">
            {" "}
            <Image
              src={"/whyus.png"}
              alt="aboutus"
              width={32}
              height={32}
              className={`object-contain absolute -top-1 left-[35%]`}
            />
          </div>
        </div>
        <div className="md:w-[30%] w-[70%] p-2 rounded-xl bg-[#F2F5FF] gap-4 mt-4 mb-4">
          <button
            type="button"
            onClick={() => setTab(true)}
            className={cn("w-1/2 bg-transparent p-2 rounded-xl", {
              "bg-white": tab,
            })}
          >
            Misson
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
          <div className="grid md:grid-cols-2 gap-4 p-2 md:h-[40vh] h-auto mt-10">
            <div>
              <h2 className="text-black md:text-3xl text-lg font-semibold md:w-[90%] font-grotesque">
                Empowering the Future Through Faith and Innovation
              </h2>
            </div>
            <div>
              <p className="md:text-2xl text-sm text-subtext font-medium md:w-[90%] font-grotesque">
                As change agents we are on a mission to create innovative
                products that inspire positive change and bring light to lives
                across the globe
              </p>
            </div>
          </div>
        ) : (
          <div className="md:h-[40vh]">
            <h2>Coming soon!</h2>
          </div>
        )}
      </div>
      <div className="w-full md:h-[100vh] h-[120vh] pb-10 flex flex-col md:mt-4 space-x-2 p-0 relative ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className="relative h-12">
              <div className="w-16 h-16 rounded-full bg-brandcolor border-2 border-black" />
              <p className=" w-fit z-50 absolute top-4 left-1 text-3xl font-semibold">
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
          <div>
            <div className="flex flex-col space-y-3 md:items-end md:justify-end">
              {/* Consulting Div */}
              <div
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
                className={`relative text-sm md:w-[80%] w-[100%] px-4 flex flex-col cursor-pointer items-start justify-center rounded-xl shadow-2xl shadow-[#B7CFFF] border-l-2 transition-all duration-300 overflow-hidden ${
                  hovered === 0
                    ? "border-l-brandcolor h-40"
                    : "border-l-[#B7CFFF] h-20"
                }`}
              >
                <span className="text-lg text-black">Consultant</span>
                {hovered === 0 && (
                  <p
                    className={`mt-2 text-xs text-subtext transition-opacity duration-300 transform ${
                      hovered === 0
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    We provide expert consulting services to help you achieve
                    your business goals.
                  </p>
                )}
              </div>

              {/* Research Div */}
              <div
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                className={`relative text-sm md:w-[80%] w-[100%] px-4 flex flex-col items-start justify-center cursor-pointer rounded-xl shadow-2xl shadow-[#B7CFFF] border-l-2  transition-all duration-300 overflow-hidden ${
                  hovered === 1
                    ? "border-l-brandcolor h-40"
                    : "border-l-[#B7CFFF] h-20"
                }`}
              >
                {" "}
                <span className="text-lg text-black">Research</span>
                {hovered === 1 && (
                  <p
                    className={`mt-2 text-xs text-subtext transition-opacity duration-300 transform ${
                      hovered === 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    We conduct thorough research to bring innovative solutions
                    to life.
                  </p>
                )}
              </div>

              {/* Innovation Div */}
              <div
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                className={`relative text-sm md:w-[80%] w-[100%] px-4 flex flex-col items-start justify-center rounded-xl shadow-2xl shadow-[#B7CFFF] border-l-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                  hovered === 2
                    ? "border-l-brandcolor h-40"
                    : "border-l-[#B7CFFF] h-20"
                }`}
              >
                <span className="text-lg text-black">Innovation</span>
                {hovered === 2 && (
                  <p
                    className={`mt-2 text-xs text-subtext  transition-opacity duration-300 transform ${
                      hovered === 2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    We foster innovation to drive your business forward.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:mt-24 mb-0">
          <Image
            src={"/aboutuscardl.png"}
            alt="aboutus"
            width={100}
            height={100}
            className={`object-contain absolute md:-bottom-10 bottom-4`}
          />
          <Image
            src={"/aboutuscard.png"}
            alt="aboutus"
            width={350}
            height={200}
            className={`object-contain absolute md:left-[120px] left-12 md:-bottom-16 bottom-2 `}
          />
          <Image
            src={"/aboutuscardr.png"}
            alt="aboutus"
            width={100}
            height={100}
            className={`object-contain absolute md:left-[48%] left-[88%] md:bottom-20 bottom-20`}
          />
        </div>
      </div>

      <div className="w-full md:h-[100vh] h-auto flex flex-col space-y-5 mt-40">
        <Heading
          name="Work process"
          desc="We work step by step to achieve better growth results."
        />
        <div className="grid md:grid-cols-4 grid-cols-1">
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
