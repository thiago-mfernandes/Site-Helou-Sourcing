import LogoAzul from 'assets/logo/logo-topo.png';
import LogoBranco from 'assets/logo/logo_branco.png';
import styles from './Menu.module.scss';
import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { FiMenu } from 'react-icons/fi';
import ItemNav from './itemNav';

export default function Menu() {
  
  const {language, setLanguage, HandleLanguage} = useContext(LanguageContext);
  const [menuState, setMenuState] = useState(false);  
  const [fixedMenu, setFixedMenu] = useState(false);
  const width = window.innerWidth;
  
  let idiom = HandleLanguage(language);
  

  function scrollPosition(){
    if(scrollY > 50) {
      setFixedMenu(true);
    } else {
      setFixedMenu(false);
    }
  }
  window.addEventListener('scroll', scrollPosition);


  return (
    <section>
      <header 
        className={
          fixedMenu
            ? `${styles.header} ${styles.stickyMenu}`
            : `${styles.header}`
        }
      >
        <img
          className={styles.header__img}
          src={fixedMenu ? LogoBranco : LogoAzul}
          alt="Logotipo da empresa"
        />

        <div className={styles.header__containerButtons}>
          <button className={styles.languageButton}
            onClick={() => setLanguage(!language)}>
            {language ? 'English' : 'Português'}
          </button>
          <div
            className={styles.hamburguerIcon}
            onClick={() => setMenuState(!menuState)}
          >
            <FiMenu className={
              fixedMenu 
                ? styles.hamburguerWhite 
                : styles.hamburguerBlue
            }/>
          </div>
        </div>

        <nav className={
          width < 1000 && menuState 
            ? `${styles.header__nav} ${styles.menuOpen}`
            : `${styles.header__nav} ${styles.menuClose}`
        }>
          <button 
            className={styles.btnCloseMobile}
            onClick={() => setMenuState(false)}
          >x</button>

          <ul className={styles.header__nav___itens}>
            {
              idiom.nav.map((navItem, index) => (
                <ItemNav 
                  key={index} 
                  setState={setMenuState}
                  label={navItem.label}
                  href={navItem.href}
                  offset={navItem.offset}
                />          
              ))
            }   
          </ul>
        </nav>
      </header>
    </section>
  );
}
