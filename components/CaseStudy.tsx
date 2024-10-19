import React from "react";
import Heading from "./Heading";
import { casestudy } from "@/data";
import CaseCard from "./CaseCard";
import Seperator from "./Seperator";
interface caseProps{
  icon:string,
  mainimage:string,
  sideimage:string,
  descr:string,
  cardColor:string,
  id:number
}
const CaseStudy = () => {
  return (
    <section className="w-full h-auto mt-24 md:pb-10">
      <div className="w-full flex items-start justify-center flex-col">
        <Heading
          name="Case Studies"
          desc="Some of the projects we have designed and built for our clients."
        />
        <div className="flex flex-col w-full mt-5">
          <div className="grid md:grid-cols-2 gap-4 w-full">
            {casestudy.map((item: caseProps, idx: number) => (
              <CaseCard
                key={idx}
                icon={item?.icon}
                mainimage={item?.mainimage}
                sideimage={item?.sideimage}
                descr={item?.descr}
                cardColor={item?.cardColor}
                id={item?.id}
              />
            ))}
           
          </div>
        </div>
        <Seperator/>
      </div>
    </section>
  );
};

export default CaseStudy;
