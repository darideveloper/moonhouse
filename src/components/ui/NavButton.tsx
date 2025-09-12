

import clsx from "clsx";


// Props for the NavButton component
interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}

// NavButton component
export default function NavButton({ href, children, ...props }: NavButtonProps) {
  return (
    <li {...props}>
      <a 
        href={href} 
        // Update styles to make it looks more readable
        className={clsx(
          "text-white hover:text-black",
          "text-sm md:text-base lg:text-lg",
          "py-2",
          "px-6",
          // DARIDEV: variants at the same line
          "bg-brand-black/20 hover:bg-white",
          "hover:rounded",
          "hover:transition",
          // DARIDEV: apply duration always (before hover)
          "duration-300"
        )}
      >
        {children}
      </a>
    </li>
  );
}