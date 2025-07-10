import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.webp";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";

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
          <img src={img1} alt="Slide 1" />
          <button className={styles.volunteerButton}>Seja um Parceiro</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
          <button className={styles.volunteerButton}>Seja um Parceiro</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" />
          <button className={styles.volunteerButton}>Seja um Parceiro</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 3" />
          <button className={styles.volunteerButton}>Seja um Parceiro</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
