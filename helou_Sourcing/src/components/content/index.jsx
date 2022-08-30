import { LanguageContext } from 'context/LanguageContext';
import { useContext } from 'react';
import styles from './Content.module.scss';
import PropTypes from 'prop-types';

export default function Content({content}) {

  const { language, HandleLanguage } = useContext(LanguageContext);
  let idiom = HandleLanguage(language);
  console.log(idiom.companyComponent.contents);
  
  return (
    <>
      <h2 className={styles.content}>{content}</h2>
    </>
  );
}

Content.propTypes = {
  content: PropTypes.string
};
