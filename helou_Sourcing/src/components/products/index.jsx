import styles from './Products.module.scss';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';
import OtherProducts from './otherProducts';

export default function Products() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.products}>
      <h2 className={styles.products__title}>{idiom.productsSectionHeader.title}</h2>
      <h3 className={styles.products__subTitle}>{idiom.productsSectionHeader.subTitle}</h3>
      <div className={styles.products__productsBox}>
        {
          idiom.products.map((item, index) => (
            <div key={index} className={styles.products__productsBox___container}>
              <span className={styles.products__productsBox___container____span}>
                {item.span}
              </span>
              <p className={styles.products__productsBox___container____content}>
                {item.content}
              </p>
            </div>
          ))
        }
      </div>

      {
        idiom.otherProducts.map((item, index) => (
          <OtherProducts 
            key={index} 
            titleProduct={item.title} 
            content={item.content}
          />
        ))
      }

    </section>
  );
}
