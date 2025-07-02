import styles from "./Principios.module.css";

import img1 from "/src/assets/Missao/missao1.png";
import img2 from "/src/assets/Missao/missao2.png";
import img3 from "/src/assets/Missao/missao3.png";

const icon = [img1, img2, img3];

export default function PrincipiosSection() {
  return (
    <section className={styles.principiosSection}>
      <h1 className={styles.title}>Nossos Princípios</h1>
      <div className={styles.principiosContainer}>
        <div className={styles.principio}>
          <img src={img1} alt="Imagem de princípio 1" className={styles.icon} />
          <h3 className={styles.principioTitle}>
            A valorização da diversidade e das diferenças como potência.
          </h3>
          <p className={styles.principioText}>
            Quando abraçamos as diferenças, descobrimos a verdadeira força da
            diversidade, onde cada singularidade se torna uma potência.
          </p>
        </div>

        <div className={styles.principio}>
          <img src={img2} alt="Imagem de princípio 2" className={styles.icon} />
          <h3 className={styles.principioTitle}>
            A luta por uma sociedade democrática, justa e acessível.
          </h3>
          <p className={styles.principioText}>
            Juntos, devemos lutar por uma sociedade onde a democracia seja real,
            a justiça seja para todos e o acesso a direitos seja incondicional,
            para que ninguém fique para trás.
          </p>
        </div>

        <div className={styles.principio}>
          <img src={img3} alt="Imagem de princípio 3" className={styles.icon} />
          <h3 className={styles.principioTitle}>
            A defesa dos direitos humanos e da convivência inclusiva.
          </h3>
          <p className={styles.principioText}>
            Defender os direitos humanos é garantir um mundo onde cada pessoa é
            respeitada, e a convivência inclusiva é a chave para um futuro mais
            justo para todos.
          </p>
        </div>
      </div>
    </section>
  );
}
