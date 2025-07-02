import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./QuemsomosSection.module.css";

import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.webp";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";
import img5 from "/src/assets/img5.webp";

const imagens = [img1, img2, img3, img4, img5];

export default function QuemsomosSection() {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Quem Somos</h2>
        <p className={styles.subtitle}>
          Um instituto feito por pessoas e para todas as pessoas.
        </p>
        <p className={styles.text}>
          O Instituto Sinal Azul (ISA) nasceu do encontro entre pessoas
          neurodivergentes, pais de crianças atípicas, educadores,
          comunicadores, escritores, artistas e produtores culturais que
          compartilham uma visão: a de um mundo mais acessível, inclusivo e
          justo para todos. Nossa missão é promover a cultura, o esporte e a
          educação de forma universal e sem preconceitos. Todas as nossas
          iniciativas são pensadas com cuidado para que ninguém fique de fora –
          seja por uma deficiência visível ou invisível, por ser
          neurodivergente, por ter dificuldades de acesso ou por estar em
          situação de vulnerabilidade social. No Instituto Sinal Azul, a
          inclusão não é um projeto à parte. É o centro de tudo o que fazemos.
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className={styles.mySwiper}
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img src={src} alt={`imagem ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
