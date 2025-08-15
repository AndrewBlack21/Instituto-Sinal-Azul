import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img7 from "/src/assets/img7.jpg";
import img8 from "/src/assets/img8.png";
import img9 from "/src/assets/img9.png";
import img10 from "/src/assets/img10.jpg";

import { Pagination, Autoplay } from "swiper/modules";
import styles from "./CarouselSection.module.css";

export default function CarouselSection() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        modules={[Pagination, Autoplay]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img src={img7} alt="Slide 1" />
          <button className={styles.volunteerButton}>
            <a href="https://wa.me/5561982495101">Seja um Parceiro</a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Slide 2" />
          <button className={styles.volunteerButton}>
            <a href="https://wa.me/5561982495101">Seja um Parceiro</a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="Slide 3" />
          <button className={styles.volunteerButton}>
            <a href="https://wa.me/5561982495101">Seja um Parceiro</a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="Slide 4" />
          <button className={styles.volunteerButton}>
            <a href="https://wa.me/5561982495101">Seja um Parceiro</a>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
