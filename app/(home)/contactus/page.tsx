import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contactus = () => {
  return (
    <section className="w-full min-h-screen mt-14">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <h1 className="text-black mb-5 text-lg font-bold w-[50%]">
              Consult with our product analytics expert
            </h1>
            <p className="text-xs text-subtext">
              Have questions about pricing, plans, or Growthly? Fill out the
              form, and our product analytics expert will get in touch with you
              directly.
            </p>
            <Image
              src={"/contactus.svg"}
              alt="bannerimg"
              width={400}
              height={400}
              className="object-contain"
            />
            <div className="md:flex items-start md:p-0 p-4 mt-5 space-x-4">
              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Contact information</p>
                <div className="flex flex-col gap-1 font-light md:text-sm text-lg text-[#7A8AAB] space-y-3">
                  <p className="text-[#7A8AAB] text-sm">
                    You can also reach us on other platforms
                  </p>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={"/sms.svg"}
                      alt="contactusicon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <h1 className="text-[#7A8AAB] text-sm">
                      Myidea@techwaveteam.com
                    </h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={"/phonecall.svg"}
                      alt="contactusicon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <h1 className="text-[#7A8AAB] text-sm">
                      +234 905 6578 947
                    </h1>
                  </div>
                </div>
              </div>

              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Socials</p>
                <div className="flex flex-col gap-1 font-light md:text-sm text-lg text-[#7A8AAB] space-y-3">
                  <Link href="#">Twitter</Link>
                  <Link href="#">LinkedIn</Link>
                  <Link href="#">Facebook</Link>
                  <Link href="#">Instagram</Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
