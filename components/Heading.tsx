import React from "react";

const Heading = ({
  name,
  desc,
  noborder,
  addwidth,
}: {
  name: string;
  desc: string;
  noborder?: boolean;
  hclass?: string;
  addwidth?: string;
}) => {
  return (
    <div className=" flex items-center justify-center flex-col w-full mb-10 px-4 md:px-0">
      <div
        className={`" border  font-semibold rounded-full text-center ${
          noborder ? "border-none" : "border-stroke_btn p-2"
        }  text-gold w-48} `}
      >
        {name}
      </div>
      <h2 className={`text-black font-bold md:text-3xl text-2xl ${addwidth ? addwidth :"md:w-[50%]"} w-full text-center mt-5 font-grotesque`}>
        {desc}
      </h2>
    </div>
  );
};

export default Heading;
