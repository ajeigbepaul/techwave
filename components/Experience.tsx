import { experience } from "@/data";
import React from "react";
import Card from "./Card";
import Seperator from "./Seperator";
interface experienceProp {
  icon: string;
  title: string;
  descri: string;
  cardColor: string;
}
const Experience = () => {
  return (
    <section className="w-full h-auto mt-24 md:pb-10">
      <div className="w-full flex items-start justify-center flex-col">
        <div className=" flex items-start justify-center flex-col w-full">
          <h2 className="text-black font-bold text-2xl md:w-[30%] font-grotesque text-left mt-5">
            Our experience covers a wide range of{" "}
            <span className="text-brandcolor">industries.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {experience.map((item: experienceProp, idx: number) => (
            <Card
              key={idx}
              icon={item?.icon}
              image={""}
              title={item?.title}
              descri={item?.descri}
              bgcolor={item?.cardColor}
              cardClass={"h-[280px]"}
              id={2}
              isborder="border border-brandcolor"
              addedStyle="text-2xl font-grotesque"
            />
          ))}
        </div>
        <Seperator />
      </div>
    </section>
  );
};

export default Experience;
