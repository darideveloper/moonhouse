// libs
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import { Navigation, Autoplay } from "swiper/modules";

// components
import NavigationButton from "../ui/NavigationButton";

// styles
import "swiper/css";



export default function Gallery() {

    const images = [
        "/images/gallery/1.png",
        "/images/gallery/2.png",
        "/images/gallery/3.png",
        "/images/gallery/4.png",
        "/images/gallery/5.png",
        "/images/gallery/6.png",
    ];


    return (
        <section className={clsx(
            "bg-black",
            "py-20",
        )}>
            <div className={clsx(
                "max-w-7xl",
                "mx-auto",
                "my-10"
            )}>
                <h2 className={clsx(
                    "text-4xl",
                    "font-bold",
                    "mb-10",
                    "font-title",
                    "text-white",
                    "px-6"
                )}>Gallery</h2>
            </div>
            <div className={clsx(
                "relative"
            )}>
                {/* Custom Navigation Buttons */}
                <NavigationButton direction="prev" className="gallery-prev"/>
                <NavigationButton direction="next" className="gallery-next"/>

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
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt="Gallery" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}