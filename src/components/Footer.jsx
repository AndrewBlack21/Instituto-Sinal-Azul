import styles from "./Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // Importando os ícones do React Icons
import img from "/src/assets/logo.jpg";
import { useState } from "react"; // 1. Importar o useState

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.containerlogo}>
            <img src={img} alt="logo" className={styles.img} />
            <h3 className={styles.tituloInstituto}>Instituto Sinal Azul</h3>
            <p className={styles.slogan}>Venha fazer parte da transformação</p>
          </div>
          <div className={styles.social}>
            <h4 className={styles.tituloSocial}>Redes Sociais</h4>
          </div>

          <div className={styles.socialicon}>
            <a
              href="https://twitter.com"
              target="_blank"
              className={styles.link}
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className={styles.link}
            >
              <FaFacebook size={30} />
            </a>

            {/* 3. Container para o ícone do Instagram e o menu dropdown */}
            <div className={styles.instagramContainer}>
              {/* Este botão agora abre o menu em vez de navegar */}
              <button
                className={styles.link}
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o menu entre aberto/fechado
              >
                <FaInstagram size={30} />
              </button>

              {/* 4. O menu só aparece se isMenuOpen for true */}
              {isMenuOpen && (
                <div className={styles.instagramMenu}>
                  <a
                    href="https://www.instagram.com/sinal.azul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    Sina Azul
                  </a>
                  <a
                    href="https://www.instagram.com/institutosinalazul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    Instituto Sina Azul
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <h4 className={styles.tituloContato}>Contato</h4>
          <p>Fale com a a gente!</p>
          <p>
            E-mail: <a href="">contato@institutosinalazul.com.br</a>
          </p>
        </div>

        <div className={styles.location}>
          <h4 className={styles.tituloLocalizacao}>Localização</h4>
          <p>QSA 18, Lote 42, Sala 102 - Taguatinga Sul, Brasília/DF</p>
        </div>

        <div className={styles.legal}>
          <h4 className={styles.tituloCompromisso}>Nosso compromisso legal</h4>
          <p>
            O Instituto é regido pela Lei nº 13.019/2014 (Marco Regulatório das
            Organizações da Sociedade Civil) e pelo seu estatuto social, tendo
            por finalidade atuar com responsabilidade, transparência e impacto
            social positivo.
          </p>
          <p>CNPJ: 02.851.670/0001-47</p>
          <p>Sede: QSA 18, Lote 42, Sala 102 - Taguatinga Sul, Brasília - DF</p>
          <p>CEP: 72015-180</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2025 Instituto Sinal Azul - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
