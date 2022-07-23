import styles from './Products.module.scss';
import ferroSilicio from 'assets/ferro-silicio.png';

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.products__container}>        
        <div className={styles.products__container___box}>
          <h2 className={styles.products__container___box____title}>
            Abaixo estão os <span>METAIS E LIGAS DE FERRO</span> que
            comercializamos:
          </h2>
        </div>
        <div className={styles.products__container___box}>
          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>Ferro Silício</h3>
              <p className={styles.products__container___boxContent____content}>
                Si &gt; 70 / 75% C &lt; 0,1 / 0,2% Al &lt; 0,5 / 1,5 / 2,0%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}