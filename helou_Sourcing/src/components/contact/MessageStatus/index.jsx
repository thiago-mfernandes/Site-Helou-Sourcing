import styles from './MessageStatus.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function MessageStatus() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <span className={styles.span}>
      {idiom.contact.messageStatus}
    </span>
  );
}
