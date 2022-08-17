import styles from './WhyUs.module.scss';
import Company from 'assets/img/company.jpg';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function whyUs() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.whyUs} id="whyUs">
      <div className={styles.whyUs__container}>
        <h2 className={styles.whyUs__container___title}>{idiom.whyUs.title}</h2>
        <p className={styles.whyUs__container___content}>
          {idiom.whyUs.content1}
        </p>
        <p className={styles.whyUs__container___content}>
          {idiom.whyUs.content2}
        </p>
      </div>
      <img 
        src={Company} 
        alt={idiom.whyUs.forAltImg} 
        className={styles.whyUs__img}
      />
    </section>
  );
}
