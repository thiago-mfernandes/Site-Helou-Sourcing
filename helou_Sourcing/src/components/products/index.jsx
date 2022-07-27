import styles from './Products.module.scss';
import ferroSilicio from 'assets/ferro-silicio.png';
import { useContext } from 'react';
import { LanguageContext } from 'context/LanguageContext';

//1. criar um estado para decidir se vai usar portugues ou ingles
//2. passar o estado para o componente (o estado esta acima do componente)
//3. receber o estado no componente
//4. criar uma variavel que armazena o estado true ou false

export default function Products() {

  const{language, HandleLanguage} = useContext(LanguageContext);
  let idiom = HandleLanguage(language);

  return (
    <section className={styles.products} id="products">
      <div className={styles.products__container}>        
        <div className={styles.products__container___box}>
          <h2 className={styles.products__container___box____title}>
            {idiom.products[0].title}
          </h2>
        </div>
        <div className={styles.products__container___box}>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[1].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[1].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[2].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[2].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[3].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[3].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[4].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[4].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[1].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[1].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[2].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[2].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[3].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[3].label}
              </p>
            </div>
          </div>

          <div className={styles.products__container___card}>
            <img 
              className={styles.products__container___card____img} 
              src={ferroSilicio} 
              alt="produto" />
            <div className={styles.products__container___boxContent}>
              <h3 className={styles.products__container___boxContent____title}>
                {idiom.products[4].product}
              </h3>
              <p className={styles.products__container___boxContent____content}>
                {idiom.products[4].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
