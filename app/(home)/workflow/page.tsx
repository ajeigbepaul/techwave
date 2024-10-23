import Image from "next/image";
import React from "react";

const Workflow = () => {
  return (
    <section className="w-full min-h-screen md:mt-14 mt-10 relative">
      <Image src="/workflowdir.svg" alt="flowthroughaimg" height={144} width={200} className="absolute contain h-[1000px] z-20 lg:left-[40%] md:left-[34%] left-[30%] top-40 "/>
      <div className="w-full lg:h-auto md:h-[60vh] h-auto md:px-24 px-0">
        <div className="text-2xl relative mt-24 h-10 px-4  w-full">
          <span className=" w-40">
            <Image
              src={"/workflow.svg"}
              alt="bannerimg"
              width={100}
              height={70}
              className="absolute object-contain -bottom-2"
            />
          </span>
          <h2 className="text-5xl font-bold text-black font-grotesque">
            {" "}
            Workflow
          </h2>
        </div>
        <div className="w-full lg:h-[60vh] md:h-[40vh] grid lg:grid-cols-2 md:grid-cols-2 gap-8 mt-10">
          <div className="w-full flex items-start justify-start">
            {" "}
            <div
              className={`w-full h-[200px] space-y-2 p-2 relative flex flex-col`}
            >
              <div className=" w-full">
                <div
                  className={` w-10 h-10 rounded-full flex items-center justify-center `}
                >
                  <Image
                    src={"/dis.svg"}
                    alt="cardicon"
                    width={8}
                    height={8}
                    className={`w-10 h-10 rounded-full object-cover `}
                  />
                </div>
              </div>
              <h2 className={`text-black text-sm px-2 font-semibold `}>
                {"Discovery"}
              </h2>
              <p className=" px-2 lg:w-[50%] md:w-[80%] w-full whitespace-normal text-subtext text-xs">
                {
                  "We begin with understanding your vision, goals, and challenges. Through in-depth discussions and research, we gather insights that shape our approach."
                }
              </p>
            </div>
          </div>
          <div className="w-full flex items-end justify-end">
            {" "}
            <div
              className={`w-full h-[200px] space-y-2 p-2 relative flex flex-col`}
            >
              <div className=" w-full">
                <div
                  className={` w-10 h-10 rounded-full  flex items-center justify-center  `}
                >
                  <Image
                    src={"/pla.svg"}
                    alt="cardicon"
                    width={8}
                    height={8}
                    className={`w-10 h-10 rounded-full object-cover `}
                  />
                </div>
              </div>
              <h2 className={`text-black text-sm px-2 font-semibold `}>
                {"Planning"}
              </h2>
              <p className=" px-2 lg:w-[50%] md:w-[80%] w-full whitespace-normal text-subtext text-xs">
                {
                  "We create a detailed roadmap to guide the project from concept to completion, setting clear milestones and aligning our strategy with your business objectives."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[50vh] md:h-[50vh] md:px-24 px-2 bg-brandcolor">
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="w-full h-full flex  items-start justify-start">
            {" "}
            <div
              className={`w-full  h-[200px] space-y-2 p-2 relative flex flex-col  rounded-xl`}
            >
              <div className=" w-full">
                <div
                  className={` w-10 h-10 rounded-full flex items-center justify-center   `}
                >
                  <Image
                    src={"/des.svg"}
                    alt="cardicon"
                    width={8}
                    height={8}
                    className={`w-10 h-10 rounded-full object-cover `}
                  />
                </div>
              </div>
              <h2 className={`text-white text-sm px-2 font-semibold `}>
                {"Design & Development"}
              </h2>
              <p className=" px-2 lg:w-[50%] md:w-[80%] w-full whitespace-normal text-white text-xs">
                {
                  "Our design and development teams work closely to bring your product to life. From wireframes to prototypes, and development to testing, we ensure every detail is perfected."
                }
              </p>
            </div>
          </div>
          <div className="w-full h-full flex lg:items-end md:items-center lg:justify-end md:justify-center md:mt-20">
            {" "}
            <div
              className={`w-full  h-[200px] space-y-2 p-2 relative flex flex-col md:ml-10  `}
            >
              <div className=" w-full">
                <div
                  className={` w-10 h-10 rounded-full  flex items-center justify-center   `}
                >
                  <Image
                    src={"/dep.svg"}
                    alt="cardicon"
                    width={8}
                    height={8}
                    className={`w-10 h-10 rounded-full object-cover `}
                  />
                </div>
              </div>
              <h2 className={`text-white text-sm px-2 font-semibold `}>
                {"Deployment"}
              </h2>
              <p className=" px-2 lg:w-[50%] md:w-[80%] w-full whitespace-normal text-white text-xs">
                {
                  "We ensure a smooth launch of your product, handling all technical setups and configurations. Our team remains on standby to address any immediate post-launch needs."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh] md:px-24 px-2">
        <div className="w-full grid md:grid-cols-2 gap-8">
          <div className="w-full flex items-start justify-start">
            {" "}
            <div
              className={`w-full  h-[200px] space-y-2 p-2 relative flex flex-col  `}
            >
              <div className=" w-full">
                <div
                  className={` w-10 h-10 rounded-full  flex items-center justify-center   `}
                >
                  <Image
                    src={"/sup.svg"}
                    alt="cardicon"
                    width={8}
                    height={8}
                    className={`w-10 h-10 rounded-full object-cover `}
                  />
                </div>
              </div>
              <h2 className={`text-black text-sm px-2 font-semibold `}>
                {"Ongoing Support & Optimization"}
              </h2>
              <p className=" px-2 lg:w-[50%] md:w-[80%] w-full whitespace-normal text-subtext text-xs">
                {
                  "Our work doesn’t end at launch. We continue to support you with updates, optimizations, and analytics to keep your product running smoothly and adapting to market changes."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
