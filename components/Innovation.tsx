import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import Button from "./Button";

const Innovation = () => {
  return (
    <section className="w-full h-auto mt-14 md:pb-10 lg:pb-20 lg:mt-10">
      <div className="w-full flex items-start justify-center flex-col">
        <Heading
          name="Our latest innovation"
          desc="We also build innovative products for the world"
        />
      </div>
      <div className="w-full relative h-[80vh]">
        <Image
          src={"/globe1.png"}
          alt="globe"
          width={980}
          height={500}
          className="absolute top-0 left-10"
        />
        <div className="grid md:grid-cols-2 w-full bg-black md:h-[85vh] lg:h-auto lg:py-24 h-[75vh] rounded-2xl px-4 md:px-4">
          <div className="w-full flex items-start justify-center">
            <div className="md:w-[100%] md:h-[370px] h-[250px] rounded-3xl border-2 border-white bg-[#000000] z-30 flex flex-col mt-[400px] lg:-mt-20 md:mt-10 ">
              <div className="flex items-start flex-col md:p-8 p-4 my-3 space-y-5 w-full">
                <div className="flex items-start space-x-3 ">
                  <Image
                    src={"/centrilearn.svg"}
                    alt="cardicon"
                    width={130}
                    height={50}
                    className="object-cover"
                  />
                  <Image
                    src={"/sacredeye.svg"}
                    alt="cardicon"
                    width={150}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <p className="text-white md:text-xl text-sm md:w-[80%] md:pb-8 pb-0 ">
                  We do not just consult for clients but we also build
                  innovative products that solve big problems of individuals in
                  Nigeria, Africa and globally.
                </p>
                <Button
                  name="Check out centrilearn"
                  buttonClass="p-2 w-54 bg-white "
                  icon
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/Agent_Avatars.png"}
              alt="globe"
              width={450}
              height={500}
              className="absolute top-10 md:right-20 right-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
