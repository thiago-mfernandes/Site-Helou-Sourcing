import styles from './Header.module.scss';


export default function Header() {
  return (
    <div className={styles.header}>
      {/* aqui vai o background img 100%*/}
      <div className={styles.header__container}>{/* aqui vai o container com as margens laterais*/}
        <div className={styles.header__container___boxContent}>{/* aqui vai o container do titulo e subtitulo*/}
          <h1 className={styles.headerTitle}>Metais<br />Ferros<br />Catalisadores</h1>
          <p className={styles.contentHeader}>Qualidade, Confiabilidade e Sustentabilidade</p>
        </div>
      </div>
    </div>
  );
}