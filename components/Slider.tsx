"use client"
import Image from "next/image";
import BannerInfo from "./BannerInfo";
import { useState } from "react";

function Slider({
  imagebg,
  image,
  contour,
  description1,
  emphasytext,
  descri2,
  position,
  description1b
}: {
  imagebg: string;
  image: string;
  contour: string;
  description1: string;
  emphasytext: string;
  descri2: string;
  position: number;
  description1b:string;
}) {
  const [loading, setLoading] = useState(true); // State to manage loading

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when image loads
  };
  return (
    <div className=" h-[100vh] relative">
      {loading && ( // Show loader skeleton when loading
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-pulse w-1/2 h-1/2 bg-gray-300 rounded"></div>
        </div>
      )}
      <Image
        src={imagebg}
        alt="bannerimg"
        width={1020}
        height={750}
        className="w-screen relative h-full object-cover"
        onLoad={handleImageLoad} // Handle image load
      />
      <Image
        src={contour}
        alt="bannerimg"
        width={1020}
        height={750}
        className="w-screen absolute top-0 h-full object-cover"
        onLoad={handleImageLoad} // Handle image load
      />
      <div className=" absolute top-0 w-full h-full grid md:grid-cols-2">
        <div className="w-full h-full flex items-start md:mt-24 mt-10 justify-center">
          <div className="flex w-[80%]">
            {position === 1 ? (
              <BannerInfo
                position={position}
                description1={description1}
                descri2={descri2}
                emphasytext={emphasytext}
                description1b={ description1b}
              />
            ) : (
              <BannerInfo
                position={position}
                description1={description1}
                descri2={descri2}
                emphasytext={emphasytext}
                description1b={ description1b}
              />
            )}
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={image}
            alt="bannerimg"
            width={1020}
            height={750}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad} // Handle image load
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
