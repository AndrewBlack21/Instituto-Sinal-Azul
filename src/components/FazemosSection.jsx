import styles from "./FazemosSection.module.css";

export default function FazemosSection() {
  return (
    <div id="trabalho" className={styles.container}>
      <h2 className={styles.title}> O Que Fazemos</h2>{" "}
      <h4 className={styles.subtitle}>
        {" "}
        Desenvolvemos e executamos projetos e ações nas seguintes areas{" "}
      </h4>
    </div>
  );
}
