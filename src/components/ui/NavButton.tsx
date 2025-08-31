// Props for the NavButton component
interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

// NavButton component
export default function NavButton({ href, children }: NavButtonProps) {
  return (
    <li>
      <a href={href} className="text-white text-sm md:text-base lg:text-lg p-2 hover:text-black hover:bg-white hover:p-2 hover:rounded">
        {children}
      </a>
    </li>
  )
}