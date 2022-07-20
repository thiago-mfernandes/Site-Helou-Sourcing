import { motion } from 'framer-motion';
import styles from './Header.module.scss';


export default function Header() {
  return (
    <div className={styles.header}>
      {/* aqui vai o background img 100%*/}
      <div className={styles.header__container}>{/* aqui vai o container com as margens laterais*/}
        <div className={styles.header__container___boxContent}>{/* aqui vai o container do titulo e subtitulo*/}
          <motion.div
            initial={{ opacity:0, y:-30 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }} 
            transition={{ delay: 0.6, duration: 2 }}
            className={styles.headerTitle}>Metais<br />Ferros<br />Catalisadores</motion.div>
          <motion.div 
            initial={{ opacity:0, y:-40 }}
            animate={{ opacity:1, y:0, animationTimingFunction: 'ease-in-out' }}
            transition={{ delay: 1.8, duration: 2 }}
            className={styles.contentHeader}>Qualidade, Confiabilidade e Sustentabilidade</motion.div>
        </div>
      </div>
    </div>
  );
}