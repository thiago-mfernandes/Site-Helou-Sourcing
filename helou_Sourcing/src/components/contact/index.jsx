import styles from './Contact.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[subject, setSubject] = useState('');
  const[message, setMessage] = useState('');
  const[sent, setSent] = useState(false);
  
  function formSubmit(e){
    
    e.preventDefault();
    
    let formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    axios.post('/api/forma', formData)
      .then(resp => {
        setSent(true);
      }, resetForm())
      .catch((err) => console.log(err));
  }

  function resetForm() {
    setName(''),
    setEmail(''),
    setSubject(''),
    setMessage(''),

    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

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
          <form className={styles.contact__container___box____boxContent} action="" name="form" onSubmit={formSubmit}>
            <h2 className={styles.contact__container___box____subTitle}>
              {idiom.contact.form}
            </h2>
            <div className={styles.contact__container___box} name="name">
              <label htmlFor="name">
                {idiom.contact.labelName}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="name" 
                required 
                placeholder={idiom.contact.placeHolderName}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className={styles.contact__container___box}>
              <label htmlFor="email">
                {idiom.contact.labelEmail}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="email" 
                name="email" 
                required 
                placeholder={idiom.contact.placeHolderEmail}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles.contact__container___box}>
              <label htmlFor="subject">
                {idiom.contact.labelSubject}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="subject" 
                required 
                placeholder={idiom.contact.placeHolderSubject}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
            <div className={styles.contact__container___box}>
              <label htmlFor="textArea">
                {idiom.contact.labelMessage}
              </label>
              <textarea 
                className={styles.contact__container___box____textArea}
                type="text" 
                name="textArea" 
                required 
                placeholder={idiom.contact.placeHolderMEssage}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <div className={styles.contact__container___box}>
              <input 
                className={styles.contact__container___box____btnForm} 
                type="submit" 
                value={idiom.contact.btnValue} 
              />
              <span className={styles.contact__container___box____span}>
                {sent ? 'Mensagem Enviada!' : ''}
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
            {idiom.contact.addressContentTel}
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {idiom.contact.addressEmail}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {idiom.contact.addressContentEmail}
          </p>
        </div>
      </div>
    </section>
  );
}
