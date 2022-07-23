import propTypes from 'prop-types';
import styles from './WhatWeDo.module.scss';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';

export default function whatWeDo({language}) {

  let handleLanguage = language ? portuguese : english;
  
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.whatWeDo__container}>
        <section className={styles.whatWeDo__container___faq}>
          <div>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {handleLanguage.whatWeDoComponent[0].titleSection1}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>01.</span>
              {handleLanguage.whatWeDoComponent[1].label}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>02.</span>
              {handleLanguage.whatWeDoComponent[2].label}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>03.</span>
              {handleLanguage.whatWeDoComponent[3].label}
            </h2>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {handleLanguage.whatWeDoComponent[4].titleSection2}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{handleLanguage.whatWeDoComponent[5].span}</span>
              {handleLanguage.whatWeDoComponent[5].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{handleLanguage.whatWeDoComponent[6].span}</span>
              {handleLanguage.whatWeDoComponent[6].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{handleLanguage.whatWeDoComponent[7].span}</span>
              {handleLanguage.whatWeDoComponent[7].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{handleLanguage.whatWeDoComponent[8].span}</span>
              {handleLanguage.whatWeDoComponent[8].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{handleLanguage.whatWeDoComponent[9].span}</span>
              {handleLanguage.whatWeDoComponent[9].paragraph}
            </p>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {handleLanguage.whatWeDoComponent[10].titleSection3}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box} name="border-none" >
            <p className={styles.whatWeDo__container___faq____content}>
              {handleLanguage.whatWeDoComponent[11].content}
            </p>
          </div>
          {
            handleLanguage.metalFormsImg.map((item, index) => (
              <div 
                key={index} 
                className={styles.whatWeDo__container___faq____boxImg}
              >
                <img 
                  src={item.url}
                  alt="Material em forma não ferrosa | Non-ferrous Metals" 
                  className={styles.whatWeDo__container___faq____img}
                />
                <div className={styles.whatWeDo__container___faq____hoverInfo} name="hover">{item.label}
                </div>
              </div>
            ))
          }
        </section>
      </div>
    </section>    
  );
}

whatWeDo.propTypes = {
  language: propTypes.bool.isRequired,
};