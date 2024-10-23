import Button from "@/components/Button";
import { pitch } from "@/data";
import Image from "next/image";
import React from "react";

const Pitch = () => {
  {
    /* incase this did not show change it to the aboutuscardr and aboutuscardl */
  }
  return (
    <section className="w-full min-h-screen md:mt-14 -mt-2">
      <div className="w-full lg:px-24 px-4">
        <div className="w-full lg:h-[80vh] md:h-[70vh] h-[60vh] lg:bg-black md:bg-black bg-black relative rounded">
          <Image
            src={"/pitchgradbg.svg"}
            alt="pitch"
            width={1100}
            height={500}
            className={`object-contain absolute top-0`}
          />
          <Image
            src={"/pitchgrad.svg"}
            alt="pitch"
            width={1000}
            height={500}
            className={`object-contain absolute top-20`}
          />
          <Image
            src={"/whatwedoleft.svg"}
            alt="aboutus"
            width={50}
            height={50}
            className={`object-contain absolute md:top-4 bottom-4 right-0`}
          />
          <Image
            src={"/whatwedoright.svg"}
            alt="aboutus"
            width={50}
            height={50}
            className={`object-contain absolute md:left-[30%] md:top-[18%] top-20`}
          />
          <Image
            src={"/whatwedoright.svg"}
            alt="aboutus"
            width={50}
            height={50}
            className={`object-contain absolute md:right-[30%] md:top-[65%] top-20`}
          />
          <div className="absolute w-full left-[0%] top-[30%] flex items-center flex-col justify-center">
            <h1 className="text-white text-4xl font-bold font-grotesque">
              Pitch Development
            </h1>
            <Button
              name="Book a session"
              buttonClass="p-3 w-60 bg-white text-black mt-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:h-auto md:h-[80vh] h-[80vh] relative lg:mt-24 md:mt-4 mb-0">
        <div className="lg:px-24 md:px-4 px-4 w-full lg:h-auto md:h-auto h-auto">
          <div className="w-full h-auto grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full lg:h-full md:h-auto flex items-start md:mt-10 mt-10 justify-center">
              <div className="flex flex-col space-y-4 md:w-[80%] w-full">
                <div className="flex flex-col space-y-6 mb-6">
                  <h1 className="text-3xl text-black md:w-[70%] w-full font-bold text-left font-grotesque">
                    Crafting Compelling Pitches for Success
                  </h1>
                  <p className="text-subtext text-md text-left font-grotesque w-[100%]">
                    {` At Techwave, we understand the power of a well-crafted pitch in securing investment and stakeholder buy-in. Our Pitch Development service is designed to help you create persuasive and impactful presentations that resonate with your audience. We provide comprehensive support, including market analysis, value proposition creation, and presentation design, ensuring your pitch stands out. With our expertise, you'll be equipped to confidently present your ideas and achieve your funding and partnership goals.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:h-full md:h-full relative">
              {/* incase this did not show change it to the aboutuscardr and aboutuscardl */}

              <Image
                src={"/pitchcard.svg"}
                alt="bannerimg"
                width={400}
                height={450}
                className="object-contain z-50 absolute top-0 md:left-16 md:-top-0 lg:top-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[h-50vh] md:h-[60vh] h-auto bg-[#F9FBFF] lg:px-24 md:px-4 px-4  flex flex-col items-center justify-center lg:mt-20 md:mt-10 mt-48">
        <div className="md:w-fit w-full ">
          <h2 className="text-black md:text-2xl text-lg  font-bold font-grotesque text-center">
            What we offer under pitch development
          </h2>
          <div className="w-24 h-10 relative">
            {" "}
            <Image
              src={"/whyus.png"}
              alt="aboutus"
              width={32}
              height={32}
              className={`object-contain absolute -top-1 md:left-[0%] left-[20%]`}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
            {pitch.map((item, idx) => (
              <div
                key={idx}
                className={`relative p-2 bg-white text-sm md:w-[100%] w-[100%] px-4 flex flex-col cursor-pointer items-start justify-center rounded-[4px] border-l-2 transition-all duration-300 border-l-[#83BF6E] h-28
                }`}
              >
                <span className="text-sm font-grotesque text-black font-bold mb-4">
                  {item?.title}
                </span>
                <p className="text-xs text-subtext">{item.descr}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-24 md:mt-14 mt-20">
        <div className="w-full lg:auto md:h-[70vh] h-auto md:px-24 px-2">
          <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="w-full h-full relative ">
              <Image
                src={"/pitchcard2.svg"}
                alt="pitch"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
            <div className="w-full h-full flex items-start lg:mt-8 md:mt-2 mt-10 justify-center">
              <div className="flex flex-col space-y-4 w-[100%]">
                <div className="flex flex-col space-y-6 mb-6">
                  <h1 className="text-2xl text-black font-bold text-left font-grotesque md:w-[60%] w-full">
                    Reach Out for Expert Pitch Development Assistance
                  </h1>
                  <p className="text-[16px] text-subtext text-left w-full">
                    {`At Techwave, we know that a compelling pitch can be the key to unlocking opportunities and achieving your business goals. Whether you're seeking investment, partnerships, or stakeholder buy-in, our Pitch Development services are here to ensure your success.`}
                  </p>
                </div>
                <Button
                  name="Book a session"
                  buttonClass="p-3 w-40 bg-black text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
