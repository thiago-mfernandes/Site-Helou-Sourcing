import propTypes from 'prop-types';
import Logo from 'assets/logo_rfmc.png';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';
import styles from './Menu.module.scss';
import { useState } from 'react';

function Menu({ language, setLanguage }) {
  const [menuState, setMenuState] = useState(false);

  let handleLanguage = language ? portuguese : english;

  return (
    <section>
      <header className={styles.header}>
        <img
          className={styles.header__img}
          src={Logo}
          alt="Logotipo da empresa"
        />

        <button onClick={() => setLanguage(!language)}>Language</button>

        <div
          className={'icone mobile - ou icone desktop'}
          onClick={() => setMenuState(!menuState)}
        >
          <div className={`${styles.hamburguer} ${styles.hamburguerIcon}`} />
          <div className={`${styles.hamburguer} ${styles.hamburguerIcon}`} />
          <div className={`${styles.hamburguer} ${styles.hamburguerIcon}`} />
        </div>

        <nav className={
          menuState ? 
            `${styles.header__nav} ${styles.menuOpen} `: 
            `${styles.header__nav} ${styles.menuClose}`
        }>
          <button 
            className={styles.btnCloseMobile}
            onClick={() => setMenuState(false)}
          >x</button>
          <ul className={styles.header__nav___itens}>
            {handleLanguage.nav.map((item, index) => (
              <li className={styles.header__nav___item} key={index}>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  );
}

Menu.propTypes = {
  language: propTypes.bool.isRequired,
  setLanguage: propTypes.func.isRequired,
};

export default Menu;
