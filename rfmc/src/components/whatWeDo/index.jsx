import propTypes from 'prop-types';
import styles from './WhatWeDo.module.scss';
//import portuguese from 'data/portugueseVersion.json';
//import english from 'data/englishVersion.json';
import cobre from 'assets/cobre.jpg';
import nickel from 'assets/nickel.jpg';
import zinco from 'assets/zinco.jpg';
import nr5 from 'assets/nr5.jpg';

export default function whatWeDo() {

  //let handleLanguage = language ? portuguese : english;

  const formasDosMetais = [cobre, nickel, zinco, nr5];
  
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.whatWeDo__container}>{/* container */}
        <section className={styles.whatWeDo__container___faq}>
          <div>
            <h2 className={styles.whatWeDo__container___faq____title}>O que Fazemos?</h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>01.</span>Trabalhamos com todos os tipos de metais e
              ligas de ferro;
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>02.</span>Também operamos com sucata metálica em
              diversas variedades;
            </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____weDo}>
              <span>03.</span>E temos a disposição de nossos clientes
              catalisadores e resíduos.
            </h2>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____title}>Negociamos em: </h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>Cobalto</span>(Minério/Conc, CoOH, CoSO4)
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>Manganês</span>(Minério, Conc, MnSO4)
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>Zinco</span>(Minério/Conc, ZnSO4, ZnO)
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>Cobre</span>(Minério/Conc, CuSO4, CuO)
            </p>
          </div>
          <div className={styles.whatWeDo__container___faq____box}>
            <p>
              <span>Molibdênio</span>(MoO3 &gt; 57%)
            </p>
          </div>
        </section>

        <section className={styles.whatWeDo__container___faq}>
          <div className={styles.whatWeDo__container___faq____box}>
            <h2 className={styles.whatWeDo__container___faq____title}>Metais Não Ferrosos</h2>
          </div>
          <div className={styles.whatWeDo__container___faq____box} name="border-none" >
            <p className={styles.whatWeDo__container___faq____content}>
              E em todos os tipos e formas de produtos intermediários contendo
              metais não ferrosos: 
              <br/> (V, Ni, Co, W, Mo, Cu, Pb, Sn, etc…)<br/> nas
              formas de FINO, ÓXIDOS, LAMAS, METÁLICOS, CATALISADORES GASTO,
              etc…
            </p>
          </div>
          {
            formasDosMetais.map((item, index) => (
              <div 
                key={index} 
                className={styles.whatWeDo__container___faq____boxImg}
              >
                <img 
                  src={item} 
                  alt="Material em forma não ferrosa" 
                  className={styles.whatWeDo__container___faq____img}
                />
                <div className={styles.whatWeDo__container___faq____hoverInfo} name="hover">
                  {/* mocar os dados aqui */}
                  Cobre
                </div>
              </div>
            ))
          }
        </section>
      </div>
    </section>
    
  );
}

whatWeDo.propTypes = {
  language: propTypes.bool.isRequired,
};