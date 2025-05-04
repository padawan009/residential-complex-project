import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import React, { useRef } from "react";
import "swiper/css"; 
import 'swiper/css/bundle';

import leftArr from "./images/leftarr.png"
import rightArr from "./images/rightarr.png"
import styles from "./Clusters.module.css"

function CustomSwiper({ images }) {
  const swiperRef = useRef(null);

  function goToNextSlide() {
    swiperRef.current.swiper.slideNext(); 
  }

  function goToPrevSlide() {
    swiperRef.current.swiper.slidePrev(); 
  }

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        0: { spaceBetween: 5, slidesPerView: 1.1 },
        550: { spaceBetween: 20, slidesPerView: 1.5 }
      }}
      navigation={{
        prevEl: '.customPrev',
        nextEl: '.customNext',
      }}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        speed: 1000,
      }}
      className={styles.viewSwiper}
    >
      {images.map((imgSrc, index) => (
        <SwiperSlide className={styles.viewSlide} key={index}>
          <img src={imgSrc} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}

      <div className={styles.customPrev} onClick={goToPrevSlide}>
        <img src={leftArr} alt="Left Arrow" />
      </div>
      <div className={styles.customNext} onClick={goToNextSlide}>
        <img src={rightArr} alt="Right Arrow" />
      </div>
    </Swiper>
  );
}

export default CustomSwiper;
