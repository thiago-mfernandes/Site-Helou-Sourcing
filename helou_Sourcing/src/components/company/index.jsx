import styles from './Company.module.scss';
import OurCompany from 'assets/img/company.jpg';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import CompanyContent from 'components/company/CompanyContent';

export default function Company() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.company} id="company">
      <div className={styles.company__container}>
        <img src={OurCompany} className={styles.company__container___img}/>
        <div className={styles.company__container___descriptionBox}>
          <span>
            {idiom.companyComponent.whoWeAre}
          </span>
          <h2 className={styles.company__container___descriptionBox____title}>
            {idiom.companyComponent.title}
          </h2>
          
          {idiom.companyComponent.contents.map((item, index) => (
            <CompanyContent 
              key={index} 
              content={item.content} 
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}
