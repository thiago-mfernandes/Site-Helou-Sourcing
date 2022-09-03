import styles from './Contact.module.scss';
import { LanguageContext } from 'context/LanguageContext';
import { useState, useContext } from 'react';
import axios from 'axios';
import MessageStatus from './MessageStatus';

export default function Contact() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[subject, setSubject] = useState('');
  const[message, setMessage] = useState('');
  const[showSendMessage, setShowSendMessage] = useState(false);

  function handleShowMessage() {    
    setTimeout(() => {
      setShowSendMessage(true);
    }, 1);
    setTimeout(() => {
      setShowSendMessage(false);
    }, 5000);
  }

  function handleFormSubmit(event){  
    event.preventDefault(); 

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    axios.post('/send', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => 
        response 
          ? handleShowMessage()
          : setShowSendMessage(false)
      );
  }  

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

          <form 
            onSubmit={handleFormSubmit}
            className={styles.contact__container___box____boxContent} 
            name="form" 
            method='post'
            action='/send'
          >
            <h2 className={styles.contact__container___box____subTitle}>
              {idiom.contact.form}
            </h2>

            <div className={styles.contact__container___box}>
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
              />
            </div>

            <div className={styles.contact__container___box}>
              <label htmlFor="message">
                {idiom.contact.labelMessage}
              </label>
              <textarea 
                className={styles.contact__container___box____textArea}
                type="text" 
                name="message" 
                required 
                placeholder={idiom.contact.placeHolderMessage}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className={styles.contact__container___box}>
              {
                showSendMessage && <MessageStatus />
              }
              <input 
                className={styles.contact__container___box____btnForm} 
                type="submit" 
                value={idiom.contact.btnValue} 
              />  
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

{/*

  1. Pegar os valores dos valores digitados nos inputs e armazena-los em estados, para que os estados sejam passados para o back-end;
  2. qdo clicar no botao submit, os estados serao enviados
  3. criar a funcao de handle
  4. colocar a propriedade de onChange nos inputs, para quando houver alteracao no campo, os estados sejam alterados
*/}
