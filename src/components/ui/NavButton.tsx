

import clsx from "clsx";


// Props for the NavButton component
interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

// NavButton component
export default function NavButton({ href, children }: NavButtonProps) {
  return (
    <li>
      <a 
        href={href} 
        className={clsx(
          "text-white hover:text-black",
          "text-sm md:text-base lg:text-lg",
          "p-2",
          "hover:bg-white",
          "hover:rounded",
          "hover:transition",
          "hover:duration-300"
        )}
      >
        {children}
      </a>
    </li>
  );
}