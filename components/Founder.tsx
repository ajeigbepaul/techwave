import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    
    <div className="w-full lg:h-[50vh] md:h-[50vh] h-auto mt-20 lg:mt-32 md:mt-24 lg:px-4 px-4">
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div className="w-full flex md:items-start items-center space-x-2">
          <div className="w-24 h-24">
            <Image
              src={"/founder.svg"}
              alt="foundercard"
              width={24}
              height={24}
              className={`w-24 h-24 rounded-full object-cover `}
            />
          </div>
          <div>
            <h1 className="text-black font-bold text-2xl">Asikhia Iseoluwa</h1>
            <h1 className="font-semibold text-xl text-subtext">Founder & CEO</h1>
          </div>
        </div>
        <div className="mt-10 md:mt-0 w-[80%]">
          
          <q className="text-black md:text-3xl text-xl  font-semibold md:w-[80%] w-[50%]">
            Together, we will reshape the digital landscape. Your vision,
            powered by our innovation, will redefine what’s possible.
          </q>
        </div>
      </div>
    </div>
  );
};

export default Founder;
