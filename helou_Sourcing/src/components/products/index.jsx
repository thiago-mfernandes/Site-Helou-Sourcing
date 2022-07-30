import styles from './Products.module.scss';
import Ferro from 'assets/ferro-silicio.png';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

export default function Products() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.products}>
      <h2 className={styles.products__title}>Produtos e Serviços</h2>
      <h3 className={styles.products__subTitle}>Metais e ligas de ferro que comercializamos:</h3>
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

      {/* div que vai os 3 cards */}
      <div className={styles.products__productsBoxImg}>
        <img src={Ferro} alt="card" className={styles.products__productsBoxImg___img}/>
        <img src={Ferro} alt="card" className={styles.products__productsBoxImg___img}/>
        <img src={Ferro} alt="card" className={styles.products__productsBoxImg___img}/>
      </div>

      <div className={styles.products__productsBoxAnd}>
        <span className={styles.products__productsBoxAnd___span}>Tambem Negociamos em:</span>
        <p className={styles.products__productsBoxAnd___content}>
          COBALTO(Minério/Conc, CoOH, CoSO4) 
          MANGANÊS(Minério, Conc, MnSO4)
          ZINCO(Minério/Conc, ZnSO4, ZnO) 
          COBRE(Minério/Conc, CuSO4, CuO) 
          MOLIBDÊNIO(MoO3 &gt; 57%)
        </p>
      </div>

      {/* div que vai os 3 cards */}
      <div className={styles.products__productsBoxImg}>
        <img src={Ferro} alt="card" className={styles.products__productsBoxImg___img}/>
        <img src={Ferro} alt="card" className={styles.products__productsBoxImg___img}/>
        <img src={Ferro} alt="card" className={styles.products__productsBoxImg___img}/>
      </div>

      <div className={styles.products__productsBoxAnd}>
        <span className={styles.products__productsBoxAnd___span}>Metais Não Ferrosos:</span>
        <p className={styles.products__productsBoxAnd___content}>Todos os tipos e formas de produtos intermediários contendo metais não ferrosos  (V, Ni, Co, W, Mo, Cu, Pb, Sn, etc…)  na forma de FINO, ÓXIDOS, LAMAS, METÁLICOS, CATALISADORES GASTO, etc…</p>
      </div>

    </section>
  );
}
