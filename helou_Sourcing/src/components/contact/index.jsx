import styles from './Contact.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import InputBox from './InputBox';

export default function Contact() {
  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__container}>
        
        <div className={styles.contact__container___callToAction}>
          <p className={styles.contact__container___callToAction____content}>
            {idiom.contact.content1}
          </p>
          <h3 className={styles.contact__container___callToAction____subTitle}>
            {idiom.contact.callToAction}
          </h3>
          <p className={styles.contact__container___callToAction____content}>
            {idiom.contact.content2}
          </p>
        </div>

        <div className={styles.contact__container___box}>
          <form className={styles.contact__container___box____boxContent} action="" name="form" >
            <h2 className={styles.contact__container___box____subTitle}>
              {idiom.contact.form}
            </h2>

            {
              idiom.contact.inputBox.map((item, index) => (
                <InputBox 
                  key={index}
                  labelHtmlFor={item.labelHtmlFor}
                  labelContent={item.labelContent}
                  inputType={item.inputType}
                  inputName={item.inputName}
                  placeholder={item.placeholder}
                />
              ))
            }

            <div className={styles.contact__container___box}>
              <label htmlFor="textArea">
                {idiom.contact.labelMessage}
              </label>
              <textarea 
                className={styles.contact__container___box____textArea}
                type="text" 
                name="textArea" 
                required 
                placeholder={idiom.contact.placeHolderMessage}
              />
            </div>

            <div className={styles.contact__container___box}>
              <input 
                className={styles.contact__container___box____btnForm} 
                type="submit" 
                value={idiom.contact.btnValue} 
              />
              <span className={styles.contact__container___box____span}>
                {}
              </span>
            </div>
            
          </form>
        </div>
        <div className={styles.contact__container___box____boxContent}>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact.addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {idiom.contact.addressContent}
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact.addressTel}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            <a href="https://wa.me/34663853886" 
              target="_blank" rel="noreferrer">
              {idiom.contact.addressContentTel}
            </a>
            
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact.addressEmail}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            <a href="mailto:silvia.diaz@helousourcing.com">{idiom.contact.addressContentEmail}</a>
            
          </p>
        </div>
      </div>
    </section>
  );
}
