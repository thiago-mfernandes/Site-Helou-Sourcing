import styles from './Company.module.scss';
import OurCompany from 'assets/company.jpg';
import propTypes from 'prop-types';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';

export default function Company({language}) {
  let handleLanguage = language ? portuguese : english;

  return (
    <section className={styles.company} id="company">
      <div className={styles.company__container}>
        <img src={OurCompany} className={styles.company__container___img}/>
        <div className={styles.company__container___descriptionBox}>
          <span>
            {handleLanguage.companyComponent[0].whoWeAre}
          </span>
          <h2 className={styles.company__container___descriptionBox____title}>         {handleLanguage.companyComponent[1].title}
          </h2>
          <p className={styles.company__container___descriptionBox____content}>
            {handleLanguage.companyComponent[2].content}
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            {handleLanguage.companyComponent[3].content}
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            {handleLanguage.companyComponent[4].content}
          </p>
          <p className={styles.company__container___descriptionBox____content}>
            {handleLanguage.companyComponent[5].content}
          </p>
        </div>
      </div>
    </section>
  );
}

Company.propTypes = {
  language: propTypes.bool.isRequired,
};