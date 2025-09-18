// libs
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useState, useEffect } from 'react'

// components
import NavigationButton from '../ui/NavigationButton'
import Subtitle from '../ui/Subtitle'

// styles
import 'swiper/css'

// Libs
import { getGalleryImages } from '../../lib/api/gallery'
import type { GalleryImageItem } from '../../lib/api/gallery'

// DARIDEV: api calls always inside components or sections
// no in pages
const images: GalleryImageItem[] = await getGalleryImages()

// Data
const altText = 'Gallery image of Moonhouse'

export default function Gallery() {
  const [showNavigation, setShowNavigation] = useState(true)
  const [currentBreakpoint, setCurrentBreakpoint] = useState(5) // default to desktop

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      let slidesPerView = 5 // default

      if (width < 480) {
        slidesPerView = 2
      } else if (width < 768) {
        slidesPerView = 3
      } else if (width < 1024) {
        slidesPerView = 4
      }

      setCurrentBreakpoint(slidesPerView)
      // Hide navigation if we have fewer or equal slides than what's visible
      setShowNavigation(images.length > slidesPerView)
    }

    // Initial check
    updateBreakpoint()

    // Add resize listener
    window.addEventListener('resize', updateBreakpoint)

    // Cleanup
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return (
    <section
      className={clsx('bg-black', 'py-20')}
      id='gallery'
    >
      <div className={clsx('max-w-7xl', 'mx-auto', 'my-10', 'container')}>
        <Subtitle
          ish2={true}
          iswhite={true}
          className={'mb-8 text-4xl'}
        >
          Gallery
        </Subtitle>
      </div>
      <div className={clsx('relative')}>
        {/* Custom Navigation Buttons - Only show if needed */}
        {showNavigation && (
          <>
            <NavigationButton
              direction='prev'
              className='gallery-prev'
            />
            <NavigationButton
              direction='next'
              className='gallery-next'
            />
          </>
        )}

        <Swiper
          modules={[Navigation, Autoplay]}
          onSlideChange={() => console.debug('slide change')}
          navigation={showNavigation ? {
            prevEl: '.gallery-prev',
            nextEl: '.gallery-next',
          } : false}
          loop={showNavigation} // Only loop if navigation is needed
          autoplay={showNavigation ? {
            delay: 3000,
            disableOnInteraction: false,
          } : false} // Only autoplay if there are enough slides
          breakpoints={{
            0: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 3,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {images.map((item) => (
            <SwiperSlide
              key={item.id}
              className={clsx('w-full')}
            >
              <img
                src={item.src}
                alt={item.alt || altText}
                title={item.alt || altText}
                loading='lazy'
                // DARIDEV. image full width (error in big screens)
                className={clsx('w-full', 'h-full', 'object-cover')}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}