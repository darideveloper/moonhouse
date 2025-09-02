import { FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";

// Props for the Logo component
interface LogoProps {
  handleNav: () => void;
  isNavOpen: boolean;
}

// Logo component
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
          className={clsx(
            "w-16",
            "h-16",
            "lg:w-20",
            "lg:h-20",
            "xl:w-32",
            "xl:h-32"
          )}
          />
        </a>
        {/* Toggle the menu icon */}
        {/* Show the close icon if the menu is open */}
        {isNavOpen ? (
          <FaTimes className={clsx(
            "text-white",
            "text-xl",
            "lg:hidden"
          )} onClick={handleNav} />
        ) : (
          <FaBars className={clsx(
            "text-white",
            "text-xl",
            "lg:hidden"
          )} onClick={handleNav} />
        )}
      </div>
    </div>
  );
}
