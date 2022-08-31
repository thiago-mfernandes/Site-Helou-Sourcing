//import styles from './InputBox.module.scss';
import PropTypes from 'prop-types';
import styles from './InputBox.module.scss';

export default function InputBox({labelHtmlFor, labelContent, inputType, inputName, placeholder}){
  return (
    <div className={styles.box}>
      <label htmlFor={labelHtmlFor}>{labelContent}</label>
      <input
        className={styles.box__input}
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        required 
      />
    </div>
  );
}

InputBox.propTypes = {
  labelHtmlFor: PropTypes.string,
  labelContent: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
};
