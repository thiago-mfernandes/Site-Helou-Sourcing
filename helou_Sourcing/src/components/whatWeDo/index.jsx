import styles from './WhatWeDo.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import CardWeDo from './cardWeDo';

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

          {
            idiom.whatWeDo.map((item, index) => (
              <CardWeDo 
                key={index}
                alt={item.alt}
                img={item.img}
                content={item.content}
              />
            ))
          }

        </div>   
      </div>
    </section>    
  );
}
