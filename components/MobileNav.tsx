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
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300 ${
        isopen ? "h-screen" : "h-0"
      } overflow-hidden bg-white`} // Ensure overflow-x and overflow-y are hidden
      style={{ overflowX: "hidden" }} // Add this style to explicitly hide horizontal scrolling
    >
      <div className="flex justify-end p-4 mr-8">
        <button
          className="text-neutral-400 hover:text-black"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="p-0 h-full w-full">
        <div className="h-full overflow-y-auto w-full"> {/* Ensure no overflow on x-axis */}
          <NavLinks />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
