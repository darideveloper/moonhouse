
export default function NavButton({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-white text-sm md:text-base lg:text-lg p-2 hover:text-black hover:bg-white hover:p-2 hover:rounded">
        {children}
      </a>
    </li>
  )
}