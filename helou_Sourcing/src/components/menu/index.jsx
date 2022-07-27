import Logo from 'assets/logo_helou.png';
import styles from './Menu.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useContext, useState } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { HandleLanguage } from 'services/HandleLanguage';

export default function Menu() {
  
  const {language, setLanguage} = useContext(LanguageContext);

  const [menuState, setMenuState] = useState(false);  
  const [fixedMenu, setFixedMenu] = useState(false);
  const width = window.innerWidth;
  
  let idiom = HandleLanguage(language);
  console.log(idiom.nav.label1);

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
          src={Logo}
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
            <div className={styles.hamburguer} />
            <div className={styles.hamburguer} />
            <div className={styles.hamburguer} />
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

          {/* o menu foi declarado sem uso de map para o AnchorLink funcionar */}
          <ul className={styles.header__nav___itens}>
            <li className={styles.header__nav___itemLi}>
              <AnchorLink 
                className={styles.header__nav___itemAnchor} 
                href='#home' 
                offset={width < 992 ? '100' : '0'}
                onClick={() => setMenuState(false)}
              >
                {idiom.nav.label1}
              </AnchorLink>
            </li>

            <li className={styles.header__nav___itemLi}>
              <AnchorLink 
                className={styles.header__nav___itemAnchor} 
                href='#company' 
                offset={width < 992 ? '90' : '0'}
                onClick={() => setMenuState(false)}
              >
                {idiom.nav.label2}
              </AnchorLink>
            </li>

            <li className={styles.header__nav___itemLi}>
              <AnchorLink 
                className={styles.header__nav___itemAnchor} 
                href='#whatWeDo' 
                offset={width < 992 ? '90' : '0'}
                onClick={() => setMenuState(false)}
              >
                {idiom.nav.label3}
              </AnchorLink>
            </li>

            <li className={styles.header__nav___itemLi}>
              <AnchorLink 
                className={styles.header__nav___itemAnchor} 
                href='#whyUs' 
                offset={width < 992 ? '90' : '0'}
                onClick={() => setMenuState(false)}
              >
                {idiom.nav.label4}
              </AnchorLink>
            </li>

            <li className={styles.header__nav___itemLi}>
              <AnchorLink 
                className={styles.header__nav___itemAnchor} 
                href='#products' 
                offset={width < 992 ? '90' : '0'}
                onClick={() => setMenuState(false)}
              >
                {idiom.nav.label5}
              </AnchorLink>
            </li>

            <li className={styles.header__nav___itemLi}>
              <AnchorLink 
                className={styles.header__nav___itemAnchor} 
                href='#contact'
                offset={width < 992 ? '90' : '0'}
                onClick={() => setMenuState(false)}
              >
                {idiom.nav.label5}
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
