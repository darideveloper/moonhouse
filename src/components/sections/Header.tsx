import React from 'react'
import { useState } from 'react'
import NavButton from '../ui/NavButton'
import Logo from '../ui/Logo'
import clsx from 'clsx'

export default function Header(): React.JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () => {
    setIsNavOpen(!isNavOpen)
    console.log(isNavOpen)
  }

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/', label: 'ABOUT' },
    { href: '/', label: 'MENU' },
    { href: '/', label: 'GALLERY' },
  ]

  return (
    <div className={clsx('relative', 'h-screen')}>
      {/* Gradient background */}
      <div
        className={clsx(
          'absolute',
          'top-0',
          'left-0',
          'right-0',
          'z-10',
          'py-10',
          'bg-gradient-to-b',
          'from-black via-black/50 to-transparent',
          'h-40'
        )}
      >
        <nav className={clsx('w-[90%] md:w-[80%] lg:w-[65%]', 'mx-auto')}>
          <Logo
            handleNav={handleNav}
            isNavOpen={isNavOpen}
          />
          {/* Nav buttons */}
          <div className={clsx('relative', 'pt-4 lg:pt-0')}>
            <ul
              className={clsx(
                'flex',
                'flex-col lg:flex-row',
                'z-30',
                'transition-all',
                'duration-300',
                'ease-in-out',
                'bg-gradient-to-t lg:bg-none',
                'from-black',
                'via-black/90',
                'to-black/70',
                'p-4 lg:p-0',
                'rounded-2xl lg:rounded-none',
                'text-center',
                'text-2xl lg:text-base',
                'absolute lg:static',
                'top-full',
                'left-0',
                'right-0',
                'mt-2',
                'transform',
                'lg:justify-between',
                'lg:w-full',
                'lg:opacity-100',
                'lg:translate-y-0',
                'lg:pointer-events-auto',
                // Conditional visibility and animation
                isNavOpen
                  ? ['opacity-100', 'translate-y-0', 'pointer-events-auto']
                  : ['opacity-0', '-translate-y-4', 'pointer-events-none']
              )}
            >
              {navLinks.map((link, index) => (
                <NavButton
                  key={index}
                  href={link.href}
                  children={link.label}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
