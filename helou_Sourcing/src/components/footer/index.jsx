import styles from './Footer.module.scss';
import Logo from 'assets/logo/logo_branco.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img src={Logo} alt="Logo Helou Sourcing" className={styles.footer__container___logo}/>
        <p  className={styles.footer__container___copy}>&copy; 2022 Helou Sourcing | All rights reserved.</p>
        <p  className={styles.footer__container___buildBy}>Desenvolvido por 
          <a href="https://corework.com.br/" target="_blank" rel="noreferrer">
            CoreWork
          </a> Soluções em Comunicação.</p>
      </div>
    </footer>
  );
}