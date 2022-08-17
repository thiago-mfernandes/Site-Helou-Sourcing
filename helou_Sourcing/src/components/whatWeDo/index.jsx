import styles from './WhatWeDo.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import MetalIcon from 'assets/icons/beam.png';
import SucataIcon from 'assets/icons/waste.png';
import ResiduoIcon from 'assets/icons/scrap.png';

export default function whatWeDo() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);
  
  return (
    <section className={styles.whatWeDo} id="whatWeDo">
      <div className={styles.whatWeDo__container}>
        <div className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____boxTitle}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {idiom.whatWeDoComponent.titleSection1}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <div className={styles.whatWeDo__container___faq____boxIcon}>
              <img src={MetalIcon} alt="Icone Metal" className={styles.icon} />
            </div>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              {idiom.whatWeDoComponent.label1}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <div className={styles.whatWeDo__container___faq____boxIcon}>
              <img src={ResiduoIcon} alt="Icone Sucata" className={styles.icon} />
            </div>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              {idiom.whatWeDoComponent.label2}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <div className={styles.whatWeDo__container___faq____boxIcon}>
              <img src={SucataIcon} alt="Icone Residuos" className={styles.icon} />
            </div>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              {idiom.whatWeDoComponent.label3}
            </h2>
          </div>
        </div>   
      </div>
    </section>    
  );
}
