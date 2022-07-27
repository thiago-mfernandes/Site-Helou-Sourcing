import styles from './Contact.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { HandleLanguage } from 'services/HandleLanguage';

export default function Contact() {
  const {language} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__container}>
        <div className={styles.contact__container___box}>
          <p className={styles.contact__container___box____content}>
            {idiom.contact[0].content}
          </p>
          <h3 className={styles.contact__container___box____subTitle}>
            {idiom.contact[1].callToAction}
          </h3>
          <p className={styles.contact__container___box____content}>
            {idiom.contact[2].content}
          </p>
        </div>

        <div className={styles.contact__container___box}>
          <form className={styles.contact__container___box____boxContent} action="" name="form">
            <h2 className={styles.contact__container___box____subTitle}>
              {idiom.contact[3].form}
            </h2>
            <div className={styles.contact__container___box} name="name">
              <label htmlFor="name">
                {idiom.contact[4].label}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="name" 
                required 
                placeholder={idiom.contact[4].placeHolder}
              />
            </div>

            <div>
              <label htmlFor="email">
                {idiom.contact[5].label}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="email" 
                name="email" 
                required 
                placeholder={idiom.contact[5].placeHolder}
              />
            </div>
            <div>
              <label htmlFor="subject">
                {idiom.contact[6].label}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="subject" 
                required 
                placeholder={idiom.contact[6].placeHolder}
              />
            </div>
            <div>
              <label htmlFor="textArea">
                {idiom.contact[7].label}
              </label>
              <textarea 
                className={styles.contact__container___box____textArea}
                type="text" 
                name="textArea" 
                required 
                placeholder={idiom.contact[7].placeHolder}/>
            </div>
            <div>

              <input 
                className={styles.contact__container___box____btnForm} 
                type="submit" 
                value={idiom.contact[8].value} 
              />
            </div>
          </form>
        </div>
        <div className={styles.contact__container___box____boxContent}>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact[9].addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {idiom.contact[9].addressContent}
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact[10].addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {idiom.contact[10].addressContent}
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact[11].addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {idiom.contact[11].addressContent}
          </p>
        </div>
      </div>
    </section>
  );
}
