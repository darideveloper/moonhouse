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
        <nav className={clsx('w-[90%]', 'md:w-[80%]', 'lg:w-[65%]', 'mx-auto')}>
          <Logo
            handleNav={handleNav}
            isNavOpen={isNavOpen}
          />
          {/* Nav buttons */}
          <div className={clsx('relative', 'pt-4', 'lg:pt-0')}>
            <ul
              className={clsx(
                'flex',
                'z-30',
                'transition-all',
                'duration-300',
                'ease-in-out',
                // Mobile menu styles
                'flex-col',
                'bg-gradient-to-t',
                'from-black',
                'via-black/90',
                'to-black/70',
                'p-4',
                'rounded-2xl',
                'text-center',
                'text-2xl',
                'absolute',
                'top-full',
                'left-0',
                'right-0',
                'mt-2',
                'transform',
                // Conditional visibility and animation
                isNavOpen
                  ? ['opacity-100', 'translate-y-0', 'pointer-events-auto']
                  : ['opacity-0', '-translate-y-4', 'pointer-events-none'],
                // Desktop styles (always visible on lg+)
                'lg:flex',
                'lg:flex-row',
                'lg:text-base',
                'lg:justify-between',
                'lg:w-full',
                'lg:mt-2',
                'lg:static',
                'lg:bg-none',
                'lg:p-0',
                'lg:rounded-none',
                'lg:opacity-100',
                'lg:translate-y-0',
                'lg:pointer-events-auto'
              )}
            >
              <NavButton
                href='/'
                children='HOME'
              />
              <NavButton
                href='/'
                children='ABOUT'
              />
              <NavButton
                href='/'
                children='MENU'
              />
              <NavButton
                href='/'
                children='GALLERY'
              />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
