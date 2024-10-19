import React from "react";
import Button from "./Button";

const Heading = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div className=" flex items-center justify-center flex-col w-full mb-10">
      <Button
        name={name}
        buttonClass="p-2 border border-stroke_btn text-gold w-38"
      />
      <h2 className="text-black font-bold text-2xl md:w-[40%] w-full text-center mt-5 font-grotesque">
        {desc}
      </h2>
    </div>
  );
};

export default Heading;
