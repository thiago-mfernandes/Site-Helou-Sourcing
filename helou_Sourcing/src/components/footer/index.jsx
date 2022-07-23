import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p  className={styles.footer__container___copy}>&copy; 2022 Helou Sourcing | All rights reserved.</p>
        <p  className={styles.footer__container___buildBy}>Desenvolvido por 
          <a href="https://corework.com.br/" target="_blank" rel="noreferrer">
             CoreWork
          </a> Soluções em Comunicação.</p>
      </div>
    </footer>
  );
}