import styles from './otherProducts.module.scss';
import PropTypes from 'prop-types';

export default function OtherProducts({titleProduct, content}) {

  return (
    <div className={styles.products}>
      <span className={styles.products__span}>{titleProduct}</span>
      <p className={styles.products__content}>
        {content}
      </p>
    </div>
  );
}

OtherProducts.propTypes = {
  titleProduct: PropTypes.string,
  content: PropTypes.string
};
