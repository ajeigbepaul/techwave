import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "next/image";
import Card from "./Card";
import { services } from "@/data";

const Services = () => {
  return (
    <section className="w-full h-auto mt-24 md:pb-10">
      <div className="w-full flex items-start justify-center flex-col">
        <Heading
          name="Our Service"
          desc="We develop MVPs for startups and complex platforms for enterprises"
        />
        <div className="flex flex-col w-full mt-5">
          <div className="grid md:grid-cols-3 gap-4 w-full">
            {services.map((item, idx) => (
              <Card
                key={idx}
                title={item?.title}
                icon={item?.icon}
                image={item?.image}
                descri={item?.descri}
                bgcolor={item?.bgcolor}
                id={item?.id}
                cardClass={"h-[458px]"}
                isbutton
              />
            ))}
          </div>
          <div className="grid grid-cols-1  mt-12 rounded-xl w-full">
            <div
              className={`w-full space-y-4 p-4 px-8 relative flex flex-col h-[70vh] md:h-full  rounded-xl shadow-md bg-[#E4E1FF]`}
            >
              <div className=" w-full">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src={"/prodmanage.svg"}
                    alt="cardicon"
                    width={8}
                    height={8}
                    className="w-6 h-6 rounded-full object-cover "
                  />
                </div>
              </div>
              <h2 className={`text-black font-semibold`}>Product Management</h2>
              <p className={`text-black text-lg md:w-[45%]`}>
                At Techwave, our product management services are designed to
                guide your product from concept to market success. We manage the
                entire product lifecycle with a focus on strategic planning,
                market research, and user-centered design.
              </p>
              <Button
                name="Explore"
                buttonClass={`p-2 w-32 text-black border-2 border-black`}
                icon
              />
              <div className="w-full flex items-center justify-end md:pr-12">
                <div className="w-60 absolute bottom-5">
                  <Image
                    src={"/productmanbg.svg"}
                    alt="imagebg"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="w-60 absolute bottom-0 right-24">
                  <Image
                    src={"/prodman2.svg"}
                    alt="imagebg"
                    width={180}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
