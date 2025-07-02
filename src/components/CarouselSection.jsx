import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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
          <img src="./src/assets/img1.jpg" alt="Slide 1" />
          <button className={styles.volunteerButton}>Seja Voluntário</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img2.webp" alt="Slide 2" />
          <button className={styles.volunteerButton}>Seja Voluntário</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img3.jpg" alt="Slide 2" />
          <button className={styles.volunteerButton}>Seja Voluntário</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/img4.jpg" alt="Slide 2" />
          <button className={styles.volunteerButton}>Seja Voluntário</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
