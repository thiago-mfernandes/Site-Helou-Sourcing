import styles from './WhatWeDo.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { HandleLanguage } from 'services/HandleLanguage';

export default function whatWeDo() {

  const {language} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);
  
  return (
    <section className={styles.whatWeDo} id="whatWeDo">
      <div className={styles.whatWeDo__container}>
        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____boxTitle}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {idiom.whatWeDoComponent[0].titleSection1}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>01.</span>
              {idiom.whatWeDoComponent[1].label}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>02.</span>
              {idiom.whatWeDoComponent[2].label}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>03.</span>
              {idiom.whatWeDoComponent[3].label}
            </h2>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____boxTitle}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {idiom.whatWeDoComponent[4].titleSection2}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent[5].span}</span>
              {idiom.whatWeDoComponent[5].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent[6].span}</span>
              {idiom.whatWeDoComponent[6].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent[7].span}</span>
              {idiom.whatWeDoComponent[7].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent[8].span}</span>
              {idiom.whatWeDoComponent[8].paragraph}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent[9].span}</span>
              {idiom.whatWeDoComponent[9].paragraph}
            </p>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____boxTitle}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {idiom.whatWeDoComponent[10].titleSection3}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____boxTitle} name="border-none" >
            <p className={styles.whatWeDo__container___faq____content}>
              {idiom.whatWeDoComponent[11].content}
            </p>
          </div>
          {
            idiom.metalFormsImg.map((item, index) => (
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
