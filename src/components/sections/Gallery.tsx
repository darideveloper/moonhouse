// libs
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// components
import NavigationButton from '../ui/NavigationButton'

// styles
import 'swiper/css'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

// Libs
import { getGalleryImages } from '../../lib/api/gallery'
import type { GalleryImageItem } from '../../lib/api/gallery'

// DARIDEV: api calls always inside components or sections
// no pages
const images: GalleryImageItem[] = await getGalleryImages()

export default function Gallery() {

  ;<button
    className={clsx(
      'gallery-next',
      'absolute',
      'right-4',
      'top-1/2',
      '-translate-y-1/2',
      'z-10',
      'text-brand-grey'
    )}
  >
    <FaRegArrowAltCircleRight className='text-3xl' />
  </button>

  return (
    <section className={clsx('bg-black', 'py-20')} id="gallery">
      <div className={clsx('max-w-7xl', 'mx-auto', 'my-10')}>
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.src}
                alt={item.alt || 'Gallery'}
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
