import styles from './WhyUs.module.scss';

export default function whyUS() {
  return (
    <section className={styles.whyUs}>
      <div className={styles.whyUs__container}>
        <div>
          <h2 className={styles.whyUs__container___title}>porque a rfmc</h2>
        </div>
        <div>
          <p>
            Somos especializados no comércio internacional de metais e na
            gestão de resíduos industriais. Acreditamos que nossas ações
            operacionais de reciclagem de resíduos nos permitem não apenas
            economizar recursos minerais naturais, mas principalmente proteger
            o meio ambiente do uso incorreto e do descarte e disposição
            inadequada dos referidos resíduos.
          </p>
          <img src="" alt="imagem sustentabilidade" />
        </div>
        <div>
          <p>
            Nós da RFMC, acreditamos que para fazer diferente é preciso
            paixão. Sabemos que não somos perfeitos, mas nos esforçamos para
            fazer a nossa parte. Venha conhecer mais sobre nosso trabalho e
            como estamos fazendo a diferença.
          </p>
        </div>
      </div>
    </section>
  );
}