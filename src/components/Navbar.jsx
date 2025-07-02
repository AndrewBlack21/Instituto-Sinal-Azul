import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Importando o CSS Module
import img from "/src/assets/logo.jpg";

const Navbar = () => {
  // Estado para alternar o menu
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a classe do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div>
          <a href="">
            <img src={img} alt="Logo" className={styles.logo} />
          </a>
        </div>

        {/* Menu Hamburguer */}
        <div
          className={`${styles.menuToggle} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Links de navegação */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#trabalho">Nosso Trabalho</a>
          </li>
          <li>
            <a href="#doacao">
              <button className={styles.doacao}>Doação</button>
            </a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
