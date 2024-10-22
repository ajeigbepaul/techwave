import React from "react";
import Button from "./Button";

const BannerInfo = ({
  description1,
  emphasytext,
  descri2,
  position,
  description1b,
}: {
  description1?: string;
  emphasytext?: string;
  descri2?: string;
  position?: number;
  description1b?: string;
}) => {
  return (
    <div className="w-full flex flex-col mb-10 md:mb-0">
      {position === 1 && (
        <div className="flex flex-col item-start justify-center mt-4 md:space-y-6 space-y-4 w-full">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-left font-grotesque">
            {description1}
          </h1>
          <span className="text-white bg-brandcolor text-3xl md:text-5xl font-bold p-2 text-left w-fit font-grotesque">
            {emphasytext}
          </span>
          <p className="text-md text-whitetext text-left font-grotesque">{descri2}</p>
        </div>
      )}
      {position === 2 && (
        <div className="flex flex-col space-y-6 mt-4 w-full">
          <div className="flex items-center space-x-2">
            {" "}
            <span className="text-white bg-gold md:text-5xl text-3xl font-bold p-2 text-left w-fit font-grotesque">
              {emphasytext}
            </span>
            <h1 className="md:text-5xl text-2xl text-white font-bold text-left font-grotesque">
              {description1}
            </h1>
          </div>
          <h1 className="md:text-5xl text-3xl  text-white font-bold text-left font-grotesque">
            {description1b}
          </h1>

          <p className="text-whitetext text-md text-left w-[60%]">{descri2}</p>
        </div>
      )}
      <div className="flex items-center space-x-2 gap-4 mt-14">
        <Button name="Book a session" buttonClass="bg-white text-black text-xs w-32 p-4" />
        <Button name="Our Work" buttonClass="border border-white text-white text-xs w-24 p-4" />
      </div>
    </div>
  );
};

export default BannerInfo;
