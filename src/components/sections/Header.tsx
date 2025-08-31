import React from "react";
import { useState } from "react";
import NavButton from "../ui/NavButton";
import Logo from "../ui/Logo";

export default function Header(): React.JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 right-0 z-10 py-10 bg-gradient-to-b from-black via-black/75 via-black/50 via-black/25 to-transparent h-40">
        <nav className="w-[90%] md:w-[80%] lg:w-[65%] mx-auto">
          <Logo handleNav={handleNav} isNavOpen={isNavOpen} />
          {/* Nav buttons */}
          <div className="relative pt-4 lg:pt-0">
            <ul
              className={`
                flex z-30
                ${
                  isNavOpen
                    ? "flex-col bg-gradient-to-t from-black via-black/90 to-black/70 p-4 rounded-2xl text-center text-2xl absolute top-full left-0 right-0 mt-2 backdrop-blur-sm"
                    : "hidden"
                }
                lg:flex lg:flex-row lg:text-base lg:justify-between lg:w-full lg:mt-2 lg:static lg:bg-none lg:p-0 lg:rounded-none`}
            >
              <NavButton href="/" children="HOME" />
              <NavButton href="/" children="ABOUT" />
              <NavButton href="/" children="MENU" />
              <NavButton href="/" children="GALLERY" />
            </ul>
          </div>

        </nav>
      </div>
    </div>
  );
}
