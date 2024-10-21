import Image from "next/image";
import React from "react";
import Button from "./Button";

const Card = ({
  image,
  icon,
  title,
  descri,
  bgcolor,
  id = 1,
  cardClass,
  isbutton,
  isborder,
  addedStyle,
  addedStyleD
  
}: {
  image: string;
  icon: string;
  title: string;
  descri: string;
  bgcolor: string;
  id?: number;
  cardClass?: string;
  isbutton?: boolean;
  isborder?:string;
  addedStyle?:string;
  addedStyleD?:string;
}) => {
  // Get the styles for the current id, fallback to default if id doesn't match
  return (
    <div
      style={{ backgroundColor: bgcolor && bgcolor }}
      className={`w-full space-y-2 p-4 relative flex flex-col  rounded-xl shadow-md ${cardClass}`}
    >
      <div className=" w-full">
        <div
          className={` w-12 h-12 rounded-full bg-white flex items-center justify-center  ${
            isborder
          } `}
        >
          <Image
            src={icon}
            alt="cardicon"
            width={8}
            height={8}
            className={`w-6 h-6 rounded-full object-cover `}
          />
        </div>
      </div>
      <h2
        className={`${id === 2 ? "text-black" : "text-white"} font-semibold ${addedStyle} `}
      >
        {title}
      </h2>
      <p className={`${id === 2 ? "text-black" : "text-white"}  whitespace-normal ${addedStyleD}`}>
        {descri}
      </p>
      {isbutton && (
        <>
          {" "}
          <Button
            name="Explore"
            buttonClass={`p-2 w-32 ${
              id === 2
                ? "text-black border-2 border-black"
                : "text-white border-2 border-white"
            }`}
            icon
          />
          <div className="w-full flex items-center justify-end">
            <div className="w-48 absolute bottom-0">
              <Image
                src={image}
                alt="imagebg"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
