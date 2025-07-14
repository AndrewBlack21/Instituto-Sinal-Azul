import styles from "./InstitutoSection.module.css";

export default function InstitutoSection() {
  return (
    <section id="sobre" className={styles.wrapper}>
      <div class="container">
        <h4 className={styles.life}>Vidas Mudadas 10.000+ </h4>
        <h2 className={styles.title}> Instituto Sinal Azul </h2>
        <p className={styles.subtitle}>
          O Instituto Sinal Azul (ISA) é uma associação sem fins lucrativos, com
          sede no Distrito Federal e atuação nacional, que existe para
          transformar o mundo em um lugar mais acessível, inclusivo e acolhedor
          para todas as pessoas – sejam elas típicas ou atípicas.
        </p>
        <div className={styles.highlightBox}>
          <p>
            Formado por uma rede diversa de educadores, artistas, produtores,
            comunicadores, escritores, pais e pessoas neurodivergentes, o
            Instituto Sinal Azul promove projetos nas áreas da cultura,
            educação, esporte e cidadania, com o compromisso de garantir o
            acesso universal, sem preconceitos, barreiras ou exclusões. No ISA,
            acreditamos que inclusão verdadeira significa retirar os obstáculos
            que impedem o convívio e a participação plena de todos. Por isso,
            nossas ações têm como prioridade a acessibilidade ampla – física,
            sensorial, comunicacional e attitudinal – incluindo pessoas com
            deficiências visíveis e invisíveis, como os daltônicos e os
            neurodivergentes.
          </p>
        </div>
      </div>
    </section>
  );
}
