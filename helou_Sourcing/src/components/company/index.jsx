import styles from './Company.module.scss';
import OurCompany from 'assets/company.jpg';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { HandleLanguage } from 'services/HandleLanguage';

export default function Company() {
  const{language} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.company} id="company">
      <div className={styles.company__container}>
        <img src={OurCompany} className={styles.company__container___img}/>
        <div className={styles.company__container___descriptionBox}>
          <span>
            {idiom.companyComponent[0].whoWeAre}
          </span>
          <h2 className={styles.company__container___descriptionBox____title}>         {idiom.companyComponent[1].title}
          </h2>
          <p className={styles.company__container___descriptionBox____content}>
            {idiom.companyComponent[2].content}
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            {idiom.companyComponent[3].content}
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            {idiom.companyComponent[4].content}
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            {idiom.companyComponent[5].content}
          </p>
        </div>
      </div>
    </section>
  );
}
