// libs
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// components
import NavigationButton from '../ui/NavigationButton'

// styles
import 'swiper/css'
// DARIDEV: import in wrong place
// import { FaRegArrowAltCircleRight } from 'react-icons/fa'

// Libs
import { getGalleryImages } from '../../lib/api/gallery'
import type { GalleryImageItem } from '../../lib/api/gallery'

// DARIDEV: api calls always inside components or sections
// no in pages
const images: GalleryImageItem[] = await getGalleryImages()

// Data
const altText = 'Gallery image of Moonhouse'

export default function Gallery() {
  
  return (
    <section className={clsx('bg-black', 'py-20')} id="gallery">
      <div className={clsx('max-w-7xl', 'mx-auto', 'my-10', 'container')}>
        <h2
          className={clsx(
            'text-4xl',
            'font-bold',
            'mb-10',
            'font-title',
            'text-white',
            'px-6'
          )}
        >
          Gallery
        </h2>
      </div>
      <div className={clsx('relative')}>
        {/* Custom Navigation Buttons */}
        <NavigationButton
          direction='prev'
          className='gallery-prev'
        />
        <NavigationButton
          direction='next'
          className='gallery-next'
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          onSlideChange={() => console.debug('slide change')}
          navigation={{
            prevEl: '.gallery-prev',
            nextEl: '.gallery-next',
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
            <SwiperSlide key={item.id} className={clsx('w-full')}>
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
