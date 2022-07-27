import styles from './WhyUs.module.scss';
import Sustainability from 'assets/sustainability.jpg';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { HandleLanguage } from 'services/HandleLanguage';

export default function whyUs() {

  const {language} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.whyUs} id="whyUs">
      <div className={styles.whyUs__container}>
        <div className={styles.whyUs__container___box}>
          <h2 className={styles.whyUs__container___title}>{idiom.whyUs[0].title}</h2>
        </div>

        <div className={styles.whyUs__container___box}>
          <p className={styles.whyUs__container___content}>
            {idiom.whyUs[1].content}
          </p>
          <img 
            src={Sustainability} 
            alt={idiom.whyUs[2].forAltImg} 
            className={styles.whyUs__container___img}
          />
        </div>

        <div  className={styles.whyUs__container___box}>
          <p className={styles.whyUs__container___content}>
            {idiom.whyUs[3].content}
          </p>
        </div>
      </div>
    </section>
  );
}
