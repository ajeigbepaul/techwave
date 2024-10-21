import React from "react";

const Heading = ({
  name,
  desc,
  noborder
}: {
  name: string;
  desc: string;
  noborder?: boolean;
  hclass?: string;
}) => {
  return (
    <div className=" flex items-center justify-center flex-col w-full mb-10">
      <div
        className={`" border font-semibold rounded-full ${
          noborder ? "border-none" : "border-stroke_btn p-2"
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
