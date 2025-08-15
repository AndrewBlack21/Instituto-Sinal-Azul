import React from "react";
import styles from "./FormularioSection.module.css";

export default function FormularioSection() {
  return (
    <section className={styles.formSection}>
      <h2 className={styles.title}>Envolva-se conosco</h2>
      <p className={styles.subtitle}>
        Seu apoio, seja por meio de doações ou voluntariado, contribui
        diretamente para nossa missão. Junte-se a nós para causar um impacto
        duradouro na vida daqueles a quem servimos.
      </p>

      <form
        action="https://formsubmit.co/contato@institutosinalazul.org"
        method="POST"
        className={styles.form}
      >
        {/* Campos ocultos para configuração do envio */}
        <input
          type="hidden"
          name="_subject"
          value="Nova mensagem do formulário"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_next"
          value="https://institutosinalazul.org/"
        />

        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="Digite seu telefone"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mensagem">Deixe um recado:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </section>
  );
}
