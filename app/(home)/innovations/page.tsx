import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

const Innovation = () => {
  return (
    <section className="w-full lg:mt-14 mt-10 min-h-screen lg:px-24 md:px-4 px-4">
      <div className="w-full lg:h-auto md:h-auto md:mt-24">
        <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full h-auto flex items-start md:mt-4 mt-10 justify-center">
            <div className="flex flex-col space-y-4 w-[100%]">
              <div className="flex flex-col space-y-6 mb-6">
                <h1 className="text-4xl text-black leading-10 font-bold text-left font-grotesque md:w-[85%] w-full">
                  Pioneering Solutions and Leading Innovation 
                </h1>
                <p className="text-[16px] text-subtext text-left w-full">
                  {`Leading the charge in technological advancements and creative breakthroughs.`}
                </p>
              </div>
              <Button
                name="Book a session"
                icon
                buttonClass="p-3 w-fit bg-brandcolor text-white"
              />
            </div>
          </div>
          <div className="w-full h-auto relative ">
            <Image
              src={"/innovationcard1.png"}
              alt="bannerimg"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:auto md:h-auto h-auto mb-10 lg:mt-20 md:mt-14 mt-0">
        <Heading
          noborder
          name="Our personal projects"
          desc="These personal projects highlight our commitment to innovation and impactful solutions."
        />
        <div className="w-full lg:mt-36 md:mt-20 mt-0">
          <div className="w-full h-full grid md:grid-cols-2 gap-8">
            <div className="w-full h-full flex items-start md:mt-4 mt-10 justify-center">
              <div className="flex flex-col space-y-4 w-[100%]">
                <div className="flex flex-col space-y-6 mb-6">
                  <h1 className="text-lg font-semibold text-gold">
                    Coming soon
                  </h1>
                  <Image
                    src={"/sacredeyeblack.png"}
                    alt="cardicon"
                    width={100}
                    height={50}
                    className="object-cover"
                  />
                  <h1 className="text-2xl text-black font-bold text-left font-grotesque w-[73%]">
                    Empowering Online Safety, Blocking Access to Pornographic
                    Content
                  </h1>
                  <p className="text-[14px] text-subtext text-left w-full">
                    {`SacredEyes is a powerful app designed to combat easy access to pornography by automatically blocking browsers from accessing adult content. Once installed, it disables access to all known pornographic sites and prevents redirects to such content, helping users maintain a safer and healthier online environment.`}
                  </p>
                </div>
                <Button
                  icon
                  name="Book a session"
                  buttonClass="p-3 w-fit bg-brandcolor text-white"
                />
              </div>
            </div>
            <div className="w-full h-full relative flex items-center justify-center ">
              <Image
                src={"/innovationcard2.png"}
                alt="bannerimg"
                width={450}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-auto md:h-auto h-auto  mb-10 lg:mt-20 md:mt-24 md:pt-20">
        <div className="w-full mt-0">
          <div className="w-full h-full grid md:grid-cols-2 gap-8">
            <div className="w-full h-full relative ">
              <Image
                src={"/innovationcard3.png"}
                alt="bannerimg"
                width={450}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="w-full h-full flex items-start md:mt-4 mt-10 justify-center">
              <div className="flex flex-col space-y-4 w-[100%]">
                <div className="flex flex-col space-y-6 mb-6">
                  <h1 className="text-lg font-semibold text-gold">
                    Coming soon
                  </h1>
                  <Image
                    src={"/centrilearncolor.svg"}
                    alt="cardicon"
                    width={100}
                    height={50}
                    className="object-cover"
                  />
                  <h1 className="text-2xl text-black font-bold text-left font-grotesque w-[73%]">
                    Empowering Online Safety, Blocking Access to Pornographic
                    Content
                  </h1>
                  <p className="text-[14px] text-subtext text-left w-full">
                    {`SacredEyes is a powerful app designed to combat easy access to pornography by automatically blocking browsers from accessing adult content. Once installed, it disables access to all known pornographic sites and prevents redirects to such content, helping users maintain a safer and healthier online environment.`}
                  </p>
                </div>
                <Button
                  icon
                  name="Book a session"
                  buttonClass="p-3 w-fit bg-[#162BA5] text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
