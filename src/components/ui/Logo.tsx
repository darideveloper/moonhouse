import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface LogoProps {
  handleNav: () => void;
  isNavOpen: boolean;
}

export default function Logo({ handleNav, isNavOpen }: LogoProps) {
  return (
    <div className="absolute w-full top-0 left-0 px-[3%] py-[1%]">
      <div className="flex justify-between items-center relative">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-16 h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32"
        />
        {isNavOpen ? (
          <FaTimes className="text-white text-xl lg:hidden" onClick={handleNav} />
        ) : (
          <FaBars className="text-white text-xl lg:hidden" onClick={handleNav} />
        )}
      </div>
    </div>
  );
}
