import React from "react";
import Seperator from "./Seperator";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-[#B7CFFF] md:h-[70vh] mt-4 md:mt-0">
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full grid md:grid-cols-2">
          <div className="w-full flex flex-col space-y-5 mt-2 px-4 md:px-0">
            <div className="flex flex-col space-y-3">
              <div className="w-30 h-12">
                <Image
                  src={"/techwavelogo.svg"}
                  width={100}
                  height={50}
                  alt="techwave-logo"
                  className="md:w-30 w-36 h-20 object-contain"
                />
              </div>
              <h2 className="md:text-[16px] text-lg text-[#7A8AAB]">
                Contactus@techwaveteam.com
              </h2>
            </div>
            <div className="flex flex-col mb-4">
              <h2 className="md:text-[16px] text-lg text-black font-semibold">Address</h2>
              <h2 className="md:text-[16px] text-lg text-[#7A8AAB]">
                Millenium estate, Gbagada, Lagos.
              </h2>
            </div>
          </div>
          <div className="w-full">
            <div className="md:flex items-center justify-between md:p-8 p-4">
              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Our Works</p>
                <div className="flex flex-col gap-1 font-light md:text-[16px] text-lg text-[#7A8AAB] space-y-3">
                  <Link href="#">Clearline</Link>
                  <Link href="#">Unilag Alumni</Link>
                  <Link href="#">TrueKeepers</Link>
                  <Link href="#">Logistics Hub</Link>
                </div>
              </div>
              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Team</p>
                <div className="flex flex-col gap-1 font-light md:text-[16px] text-lg text-[#7A8AAB] space-y-3">
                  <Link href="#">About Us</Link>
                  <Link href="#">Service we render</Link>
                  <Link href="#">Contact Us</Link>
                  <Link href="#">FAQs</Link>
                </div>
              </div>
              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Socials</p>
                <div className="flex flex-col gap-1 font-light md:text-[16px] text-lg text-[#7A8AAB] space-y-3">
                  <Link href="#">Twitter</Link>
                  <Link href="#">LinkedIn</Link>
                  <Link href="#">Facebook</Link>
                  <Link href="#">Instagram</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Seperator />

        <p className="text-center text-[16px] pb-5 text-black mt-5">
          © 2024 Techwave. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
