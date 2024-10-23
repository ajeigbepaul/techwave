"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full md:h-[20vh] h-[14vh] relative border-b border-b-[#B7CFFF]">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between md:px-14 px-4 lg:pt-2 pt-8">
        <Image
          src={"/techwavelogo.svg"}
          width={190}
          height={200}
          alt="techwave-logo"
          className="object-contain"
        />

        {/* Show NavLinks only on large screens */}
        <nav className="hidden lg:flex">
          <NavLinks />
        </nav>

        {/* Show the toggle button on both mobile and tablet (small to medium screens) */}
        <button
          onClick={toggleMenu}
          className="text-neutral-400 hover:text-white focus:outline-none flex lg:hidden" // Show on small and medium screens
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
          onclick={() => router.replace("/contactus")}
          name="Contact us"
          buttonClass="p-3 w-40 bg-[#181818] text-white hidden lg:flex"
        />
      </div>

      {/* Mobile and Tablet View */}
      <MobileNav isopen={isOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
