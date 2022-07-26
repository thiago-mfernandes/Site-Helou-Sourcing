import styles from './Contact.module.scss';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';
import propTypes from 'prop-types';

export default function Contact({language}) {

  let handleLanguage = language ? portuguese : english;

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__container}>
        <div className={styles.contact__container___box}>
          <p className={styles.contact__container___box____content}>
            {handleLanguage.contact[0].content}
          </p>
          <h3 className={styles.contact__container___box____subTitle}>
            {handleLanguage.contact[1].callToAction}
          </h3>
          <p className={styles.contact__container___box____content}>
            {handleLanguage.contact[2].content}
          </p>
        </div>

        <div className={styles.contact__container___box}>
          <form className={styles.contact__container___box____boxContent} action="" name="form">
            <h2 className={styles.contact__container___box____subTitle}>
              {handleLanguage.contact[3].form}
            </h2>
            <div className={styles.contact__container___box} name="name">
              <label htmlFor="name">
                {handleLanguage.contact[4].label}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="name" 
                required 
                placeholder={handleLanguage.contact[4].placeHolder}
              />
            </div>

            <div>
              <label htmlFor="email">
                {handleLanguage.contact[5].label}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="email" 
                name="email" 
                required 
                placeholder={handleLanguage.contact[5].placeHolder}
              />
            </div>
            <div>
              <label htmlFor="subject">
                {handleLanguage.contact[6].label}
              </label>
              <input 
                className={styles.contact__container___box____input} 
                type="text" 
                name="subject" 
                required 
                placeholder={handleLanguage.contact[6].placeHolder}
              />
            </div>
            <div>
              <label htmlFor="textArea">
                {handleLanguage.contact[7].label}
              </label>
              <textarea 
                className={styles.contact__container___box____textArea}
                type="text" 
                name="textArea" 
                required 
                placeholder={handleLanguage.contact[7].placeHolder}/>
            </div>
            <div>

              <input 
                className={styles.contact__container___box____btnForm} 
                type="submit" 
                value={handleLanguage.contact[8].value} 
              />
            </div>
          </form>
        </div>
        <div className={styles.contact__container___box____boxContent}>
          <p className={styles.contact__container___box____addressTitle}>
            {handleLanguage.contact[9].addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {handleLanguage.contact[9].addressContent}
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {handleLanguage.contact[10].addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {handleLanguage.contact[10].addressContent}
          </p>
          <p className={styles.contact__container___box____addressTitle}>
            {handleLanguage.contact[11].addressTitle}
          </p>
          <p className={styles.contact__container___box____addressContent}>
            {handleLanguage.contact[11].addressContent}
          </p>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  language: propTypes.bool.isRequired,
};