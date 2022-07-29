import styles from './WhatWeDo.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import MetalIcon from 'assets/beam.png';
import SucataIcon from 'assets/waste.png';
import ResiduoIcon from 'assets/scrap.png';

export default function whatWeDo() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);
  
  return (
    <section className={styles.whatWeDo} id="whatWeDo">
      <div className={styles.whatWeDo__container}>
        <section className={styles.whatWeDo__container___faq}>
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
              <img src={SucataIcon} alt="Icone Sucata" className={styles.icon} />
            </div>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              {idiom.whatWeDoComponent.label2}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <div className={styles.whatWeDo__container___faq____boxIcon}>
              <img src={ResiduoIcon} alt="Icone Residuos" className={styles.icon} />
            </div>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              {idiom.whatWeDoComponent.label3}
            </h2>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____boxTitle}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {idiom.whatWeDoComponent.titleSection2}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent.span1}</span>
              {idiom.whatWeDoComponent.paragraph1}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent.span2}</span>
              {idiom.whatWeDoComponent.paragraph2}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent.span3}</span>
              {idiom.whatWeDoComponent.paragraph3}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent.span4}</span>
              {idiom.whatWeDoComponent.paragraph4}
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>{idiom.whatWeDoComponent.span5}</span>
              {idiom.whatWeDoComponent.paragraph5}
            </p>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____boxTitle}>
            <h2 className={styles.whatWeDo__container___faq____title}>
              {idiom.whatWeDoComponent.titleSection3}
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____boxTitle} name="border-none" >
            <p className={styles.whatWeDo__container___faq____content}>
              {idiom.whatWeDoComponent.content}
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
