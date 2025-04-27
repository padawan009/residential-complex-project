import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import citi from "./images/citi.jpg"
import matveevskiy from "./images/matveevskiy.jpeg"
import ramenki from "./images/ramenki.jpg"
import poklonnaya from "./images/poklonnaya.jpg"
import leftArr from "./images/leftarr.png"
import rightArr from "./images/rightarr.png"

import 'swiper/css';
import 'swiper/css/bundle';

import styles from "./Views.module.css"

const picNames = ['Поклонная гора', 'Москва Сити', 'Матвеевский лес', 'Район Раменки']

function Views() {

  const swiperRef = useRef(null);

  function goToNextSlide() {
    swiperRef.current.swiper.slideNext(); 
  };

  function goToPrevSlide() {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <section className={styles.viewSection}>
      <h1>Наслаждайтесь видами из окон своей квартиры</h1>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          0: {
            spaceBetween: 7,
          },
          550: {
            spaceBetween: 20
          }
        }}
        navigation={{
          prevEl: '.customPrev',  // кастомные стрелки
          nextEl: '.customNext',
        }}
        pagination={{ 
          clickable: true,
          type: 'custom',
          renderCustom: (swiper, current) => {  // кастомная пагинация
            return (
              `<div class="${styles.customPagination}">
                ${picNames.map((name, index) => (
                  `<span class="${current === index + 1 ? styles.active : ''}">${name}</span>`
                )).join(' ')}
              </div>`
            );
          },
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
          speed: 1000,
        }}
        className={styles.viewSwiper}
      >
        <SwiperSlide className={styles.viewSlide}><img src={poklonnaya} alt="Поклонная" /></SwiperSlide>
        <SwiperSlide className={styles.viewSlide}><img src={citi} alt="Сити" /></SwiperSlide>
        <SwiperSlide className={styles.viewSlide}><img src={matveevskiy} alt="Матвеевский" /></SwiperSlide>
        <SwiperSlide className={styles.viewSlide}><img src={ramenki} alt="Раменки" /></SwiperSlide>

        <div className={styles.customPrev} onClick={goToPrevSlide}>
          <img src={leftArr} alt="left arrow" />
        </div>
        <div className={styles.customNext} onClick={goToNextSlide}>
          <img src={rightArr} alt="right arrow" />
        </div>
      </Swiper>
    </section>
  )
}

export default Views;
