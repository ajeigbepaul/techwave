import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface buttonProps {
  name: string;
  buttonClass: string;
  icon?: boolean;
  id?:number;
}
const Button = ({ name, buttonClass, icon}: buttonProps) => {
  return (
    // p-4 w-40 bg-[#181818] text-white
    <button
      className={`${buttonClass}  rounded-full flex items-center justify-center`}
    >
      {name}
      {icon && <FaArrowRight className="ml-4"/>}
    </button>
  );
};

export default Button;
