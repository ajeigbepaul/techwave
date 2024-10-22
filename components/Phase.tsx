import React from "react";

const Phase = ({
  phase,
  title,
  descr,
}: {
  phase: string;
  title: string;
  descr: string;
}) => {
  return (
    <div className="w-full flex flex-col space-y-4">
      <h1 className="text-lg text-black font-semibold">{phase}</h1>
      <div className="md:flex items-center w-full">
        <div className="md:w-6 md:h-6 w-4 h-4 border border-black rounded-full bg-brandcolor" />
        <div className="md:h-[4px] h-[50px] bg-[#D9D9D9] md:w-full w-[2px] ml-2 md:ml-0" />
      </div>
      <h1 className="md:text-3xl text-xl font-bold font-grotesque text-black">{title}</h1>
      <p className="text-subtext text-sm w-[80%]">{descr}</p>
    </div>
  );
};

export default Phase;
