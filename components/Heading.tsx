import React from "react";
import Button from "./Button";

const Heading = ({
  name,
  desc,
  noborder,
  hclass,
}: {
  name: string;
  desc: string;
  noborder?: boolean;
  hclass?: string;
}) => {
  return (
    <div className=" flex items-center justify-center flex-col w-full mb-10">
      <div
        className={`"p-2 border font-semibold ${
          noborder ? "border-none" : "border-stroke_btn"
        }  text-gold w-38`}
      >
        {name}
      </div>
      <h2 className="text-black font-bold text-2xl md:w-[50%] w-full text-center mt-5 font-grotesque">
        {desc}
      </h2>
    </div>
  );
};

export default Heading;
