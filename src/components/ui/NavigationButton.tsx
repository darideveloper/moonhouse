// DARIDEV: code formatted

// icons
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from 'react-icons/fa'
import clsx from 'clsx'

interface NavigationButtonProps {
  direction: 'prev' | 'next'
  className?: string
}

export default function NavigationButton({
  direction,
  className,
}: NavigationButtonProps) {
  const Icon =
    direction === 'next' ? FaRegArrowAltCircleRight : FaRegArrowAltCircleLeft

  return (
    <button
      className={clsx(
        className,
        'absolute',
        direction === 'next' ? 'right-4' : 'left-4',
        'top-1/2',
        '-translate-y-1/2',
        'z-10',
        'text-brand-grey',
        '!opacity-100',
        'mix-blend-luminosity', // DARIDEV: changed from overlay to luminosity for better visibility
        'cursor-pointer'
      )}
    >
      <Icon className='text-3xl' />
    </button>
  )
}
