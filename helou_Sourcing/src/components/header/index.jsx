import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { HandleLanguage } from 'services/HandleLanguage';

export default function Header() {

  const {language} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <div className={styles.header} id="home">
      <div className={styles.container}>
        <div className={styles.header__boxContent}>
          <motion.div
            initial={{ opacity:0, y:-30 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }} 
            transition={{ delay: 0.6, duration: 2 }}
            className={styles.headerTitle}
          >
            {idiom.header[0].title}
          </motion.div>
          <motion.div 
            initial={{ opacity:0, y:-40 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }}
            transition={{ delay: 1.8, duration: 2 }}
            className={styles.contentHeader}
          >
            {idiom.header[1].subTitle}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

