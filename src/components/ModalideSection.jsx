import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./ModalidadeSection.module.css";

import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.webp";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";
import img5 from "/src/assets/img5.webp";

export default function ModalidadeSection() {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <img src={img1} alt="" />
            <p>
              Pesquisas e publicações, difundindo conhecimento sobre inclusão,
              diversidade e inovação social.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={img2} alt="" />
            <p>
              Consultoria e formação, voltadas à acessibilidade, inclusão e
              comunicação universal.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={img3} alt="" />
            <p>
              Eventos e ações públicas, como seminários, oficinas, feiras,
              mostras, hackathons e rodas de conversa.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img src={img4} alt="" />
            <p>
              Educação inclusiva e tecnologias pedagógicas para todas as idades.{" "}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <img src={img5} alt="" />
            <p>
              Consultoria e formação, voltadas à acessibilidade, inclusão e
              comunicação universal.{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
