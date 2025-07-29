import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styles from "./FormularioSection.module.css";

export default function FormularioSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // Enviar email com EmailJS
    emailjs
      .sendForm
      // "service_afsqj7d",
      // "template_9mxv35b",
      // e.target,
      // "JO9RmYnGzJtQDeB1c"
      ()
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar mensagem.");
        }
      );
  };
  return (
    <section className={styles.formSection}>
      <h2 className={styles.title}>Envolva-se conosco</h2>
      <p className={styles.subtitle}>
        Seu apoio, seja por meio de doações ou voluntariado, contribui
        diretamente para nossa missão. Junte-se a nós para causar um impacto
        duradouro na vida daqueles a quem servimos.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            {...register("nome", { required: "Nome é obrigatorio" })}
            placeholder="Digite seu nome"
          />
          {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "E-mail é obrigatório" })}
            placeholder="Digite seu e-mail"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="telefone">Telefone:</label>
          <input
            id="telefone"
            {...register("telefone", { required: "Telefone é obrigatório" })}
            placeholder="Digite seu telefone"
          />
          {errors.telefone && (
            <p className={styles.error}>{errors.telefone.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mensagem">Deixe um recado:</label>
          <textarea
            id="mensagem"
            {...register("mensagem")}
            placeholder="Digite sua mensagem"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </section>
  );
}
