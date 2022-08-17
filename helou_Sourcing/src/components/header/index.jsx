import { motion } from 'framer-motion';
import Logo from 'assets/logo/logo_branco.png';
import styles from './Header.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function Header() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <div className={styles.header} id="home">
      <div className={styles.container}>
        <div className={styles.header__boxContent}>
          <img src={Logo} alt="Logotipo Hello Sourcing"className={styles.container__img} />
          <motion.div
            initial={{ opacity:0, y:-30 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }} 
            transition={{ delay: 0.6, duration: 2 }}
            className={styles.headerTitle}
          >
            {idiom.header.title}
          </motion.div>
          <motion.div 
            initial={{ opacity:0, y:-40 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }}
            transition={{ delay: 1.8, duration: 2 }}
            className={styles.contentHeader}
          >
            {idiom.header.subTitle}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

