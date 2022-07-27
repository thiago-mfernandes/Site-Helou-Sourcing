import styles from './WhyUs.module.scss';
import Sustainability from 'assets/sustainability.jpg';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function whyUs() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.whyUs} id="whyUs">
      <div className={styles.whyUs__container}>
        <div className={styles.whyUs__container___box}>
          <h2 className={styles.whyUs__container___title}>{idiom.whyUs.title}</h2>
        </div>

        <div className={styles.whyUs__container___box}>
          <p className={styles.whyUs__container___content}>
            {idiom.whyUs.content1}
          </p>
          <img 
            src={Sustainability} 
            alt={idiom.whyUs.forAltImg} 
            className={styles.whyUs__container___img}
          />
        </div>

        <div  className={styles.whyUs__container___box}>
          <p className={styles.whyUs__container___content}>
            {idiom.whyUs.content2}
          </p>
        </div>
      </div>
    </section>
  );
}
