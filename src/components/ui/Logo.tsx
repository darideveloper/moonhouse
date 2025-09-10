import { FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";

interface LogoProps {
  handleNav: () => void;
  isNavOpen: boolean;
}

export default function Logo({ handleNav, isNavOpen }: LogoProps) {
  return (
    <div className={clsx(
      "absolute",
      "w-full",
      "top-0",
      "left-0",
      "px-[3%]",
      "py-[1%]"
    )}>
      <div className={clsx(
        "flex",
        "justify-between",
        "items-center",
        "relative"
      )}>
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            // DARIDEV: fix size to align menu items
            className={clsx(
              "w-22",
              "h-22"
            )}
          />
        </a>
        {/* Toggle the menu icon */}
        {/* Show the close icon if the menu is open */}
        {isNavOpen ? (
          <FaTimes 
            className={clsx(
              "text-white",
              "text-xl",
              "lg:hidden"
            )} 
            onClick={handleNav} 
          />
        ) : (
          <FaBars 
            className={clsx(
              "text-white",
              "text-xl",
              "lg:hidden"
            )} 
            onClick={handleNav} 
          />
        )}
      </div>
    </div>
  );
}
