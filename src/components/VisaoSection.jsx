import styles from "./VisaoSection.module.css";
import img from "/src/assets/img6.png"; // Certifique-se de usar o caminho correto da imagem

export default function VisaoSection() {
  return (
    <section className={styles.visaoSection}>
      <h1 className={styles.title}>Nossa Visão</h1>
      <div className={styles.visaoContainer}>
        <div className={styles.imageWrapper}>
          <img src={img} alt="Imagem de Visão" className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.quote}>
            O autismo é parte deste mundo, não um mundo à parte.
          </p>
          <p className={styles.description}>
            Acreditamos que todas as pessoas - típicas e atípicas - devem viver,
            conviver, criar e aproveitar o mundo juntas. Inclusão, para nós,
            significa remover os obstáculos que impedem esse convívio. E isso só
            se faz com empatia, responsabilidade e escuta.
          </p>
        </div>
      </div>
    </section>
  );
}
