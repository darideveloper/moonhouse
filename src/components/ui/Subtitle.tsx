import React from 'react'
import clsx from 'clsx'

interface Props {
  ish2?: boolean
  iswhite?: boolean
  className?: string
  children: React.ReactNode
}

const Subtitle: React.FC<Props> = ({
  ish2 = false,
  iswhite = false,
  className = '',
  children,
}) => {
  const baseStyles = [
    'tracking-tight',
    iswhite ? 'text-white' : 'text-black',
    'text-3xl',
    className,
  ]

  return (
    <>
      {ish2 ? (
        <h2 className={clsx(baseStyles, 'font-bold')}>{children}</h2>
      ) : (
        <h3 className={clsx(baseStyles, 'font-semibold')}>
          {children}
        </h3>
      )}
    </>
  )
}

export default Subtitle
