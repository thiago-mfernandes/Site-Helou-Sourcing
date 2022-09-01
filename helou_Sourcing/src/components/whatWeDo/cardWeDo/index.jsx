import styles from './cardWeDo.module.scss';
import PropTypes from 'prop-types';

export default function CardWeDo({alt, img, content}) {
  return (
    <div className={styles.box}>
      <div className={styles.boxIcon}>
        <img src={img} alt={alt} className={styles.icon} />
      </div>
      <h2 className={styles.boxIcon__weDo}>
        {content}
      </h2>
    </div>
  );
}

CardWeDo.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
};
