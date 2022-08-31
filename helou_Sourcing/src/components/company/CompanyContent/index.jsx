import PropTypes from 'prop-types';
import styles from './CompanyContent.module.scss';

export default function CompanyContent({content}) {  
  return (
    <p className={styles.content}>{content}</p>
  );
}

CompanyContent.propTypes = {
  content: PropTypes.string
};

