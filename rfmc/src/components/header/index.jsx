import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import propTypes from 'prop-types';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';


export default function Header({language}) {

  let handleLanguage = language ? portuguese : english;
  //console.log(handleLanguage.header[0].title);
  //console.log(portuguese);
  //console.log(english);


  return (
    <div className={styles.header}>
      {/* aqui vai o background img 100%*/}
      <div className={styles.header__container}>{/* aqui vai o container com as margens laterais*/}
        <div className={styles.header__container___boxContent}>{/* aqui vai o container do titulo e subtitulo*/}
          <motion.div
            initial={{ opacity:0, y:-30 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }} 
            transition={{ delay: 0.6, duration: 2 }}
            className={styles.headerTitle}
          >
            {handleLanguage.header[0].title}
          </motion.div>
          <motion.div 
            initial={{ opacity:0, y:-40 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }}
            transition={{ delay: 1.8, duration: 2 }}
            className={styles.contentHeader}
          >
            {handleLanguage.header[1].subTitle}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  language: propTypes.bool.isRequired,
};
