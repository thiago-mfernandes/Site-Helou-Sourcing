import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './ItemNav.module.scss';
import PropTypes from 'prop-types';

export default function ItemNav({setMenuState, label, href, offset}) {
  
  const width = window.innerWidth;  

  return (
    <li className={styles.itemLi}>
      <AnchorLink 
        className={styles.itemAnchor} 
        href={href} 
        offset={width < 992 ? `${offset}` : '0'}
        onClick={() => setMenuState(false)}
      >
        {label}
      </AnchorLink>
    </li>
  );
}

ItemNav.propTypes = {
  setMenuState: PropTypes.func,
  label: PropTypes.string,
  href: PropTypes.string,
  offset: PropTypes.string
};
