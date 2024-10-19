import React from "react";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const MobileNav = ({
  closeMenu,
  isopen,
}: {
  closeMenu: () => void;
  isopen: boolean;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isopen ? "h-screen" : "h-0"
      } overflow-y-auto bg-white`}
    >
      <div className="flex justify-end p-4">
        <button
          className="text-neutral-400 hover:text-black"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="p-0">
        <NavLinks />
      </nav>
    </div>
  );
};

export default MobileNav;
