"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="w-full md:h-[20vh] h-[14vh] relative">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 ">
        <div className="w-40 h-32">
          <Image
            src={"/techwavelogo.svg"}
            width={300}
            height={200}
            alt="techwave-logo"
            className="w-32 h-28 object-contain"
          />
        </div>
        <nav className="sm:flex hidden">
          <NavLinks />
        </nav>

        <button
          onClick={toggleMenu}
          className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          aria-label="Toggle menu"
        >
          <Image
            src={"/menu.svg"}
            alt="toggle"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </button>
        <Button
          name="Contact us"
          buttonClass="p-3 w-40 bg-[#181818] text-white hidden md:flex"
        />
      </div>
      {/* Mobile View */}
      <MobileNav isopen={isOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
