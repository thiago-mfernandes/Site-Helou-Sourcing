import styles from './WhyUs.module.scss';
import Sustainability from 'assets/sustainability.jpg';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';
import propTypes from 'prop-types';

export default function whyUs({language}) {

  let handleLanguage = language ? portuguese : english;

  return (
    <section className={styles.whyUs}>
      <div className={styles.whyUs__container}>
        <div className={styles.whyUs__container___box}>
          <h2 className={styles.whyUs__container___title}>{handleLanguage.whyUs[0].title}</h2>
        </div>

        <div className={styles.whyUs__container___box}>
          <p className={styles.whyUs__container___content}>
            {handleLanguage.whyUs[1].content}
          </p>
          <img 
            src={Sustainability} 
            alt={handleLanguage.whyUs[2].forAltImg} 
            className={styles.whyUs__container___img}
          />
        </div>

        <div  className={styles.whyUs__container___box}>
          <p className={styles.whyUs__container___content}>
            {handleLanguage.whyUs[3].content}
          </p>
        </div>
      </div>
    </section>
  );
}

whyUs.propTypes = {
  language: propTypes.bool.isRequired,
};