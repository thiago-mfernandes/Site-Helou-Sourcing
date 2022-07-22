import { useState } from 'react';
import Menu from 'components/menu';
import Header from 'components/header';
import Company from 'components/company';
import { AnimateSharedLayout }  from  'framer-motion';


export default function App() {
  
  let [language, setLanguage] = useState(true);

  return (
    <AnimateSharedLayout>
      <main>
        <Menu language={language} setLanguage={setLanguage}/>
        <Header language={language}/>
        <Company language={language}/>
        
        {/* inicio o que fazemos*/}
        <section>
          <div>
            {' '}
            {/* container */}
            <section>
              <div>
                <h2>O que Fazemos?</h2>
              </div>
              <div>
                <div>
                  <h2>
                    <span>01.</span>Trabalhamos com todos os tipos de metais e
                    ligas de ferro.
                  </h2>
                </div>
              </div>
              <div>
                <div>
                  <h2>
                    <span>02.</span>Tambem operamos com sucata metalica em
                    diversas variedade.
                  </h2>
                </div>
              </div>
              <div>
                <div>
                  <h2>
                    <span>03.</span>E temos a disposicao de nossos clientes
                    catalisadores e residuos.
                  </h2>
                </div>
              </div>
            </section>
            <section>
              <div>
                <h2>Negociamos em: </h2>
              </div>
              <div>
                <p>
                  <span>Cobalto</span>(Minério/Conc, CoOH, CoSO4)
                </p>
              </div>
              <div>
                <p>
                  <span>Manganês</span>(Minério, Conc, MnSO4)
                </p>
              </div>
              <div>
                <p>
                  <span>Zinco</span>(Minério/Conc, ZnSO4, ZnO)
                </p>
              </div>
              <div>
                <p>
                  <span>Cobre</span>(Minério/Conc, CuSO4, CuO)
                </p>
              </div>
              <div>
                <p>
                  <span>Molibdênio</span>(MoO3 &gt; 57%)
                </p>
              </div>
            </section>
            <section>
              <h2>Metais Não Ferrosos</h2>
              <div>
                <p>
                  E em todos os tipos e formas de produtos intermediários contendo
                  metais não ferrosos (V, Ni, Co, W, Mo, Cu, Pb, Sn, etc…) na
                  forma de FINO, ÓXIDOS, LAMAS, METÁLICOS, CATALISADORES GASTO,
                  etc…
                </p>
              </div>
              <div>
                <img src="" alt="fotos formas nao ferrosos" />
              </div>
            </section>
          </div>
        </section>
        {/* fim o que fazemos */}
        {/* inicio porque a rfmc - bgcol cinza aqui */}
        <section>
          <div>
            {/* container */}
            <div>
              <h2>porque a rfmc</h2>
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
        {/* fim inicio porque a rfmc */}
        {/* inicio produtos */}
        <section>
          <div>
            {/* container */}
            <div>
              <h2>
                Abaixo estão os <span>METAIS E LIGAS DE FERRO</span> que
                comercializamos:
              </h2>
            </div>
            <div>
              <div>
                {/* card produto */}
                <img src="" alt="produto" />
                <div>
                  <h3>Ferro Silicio</h3>
                  <p>
                    Si &gt; 70 / 75% C &lt; 0,1 / 0,2% Al &lt; 0,5 / 1,5 / 2,0%
                  </p>
                </div>
              </div>
              <div>
                {/* card produto */}
                <img src="" alt="produto" />
                <div>
                  <h3>Ferro Silicio</h3>
                  <p>
                    Si &gt; 70 / 75% C &lt; 0,1 / 0,2% Al &lt; 0,5 / 1,5 / 2,0%
                  </p>
                </div>
              </div>
              <div>
                {/* card produto */}
                <img src="" alt="produto" />
                <div>
                  <h3>Ferro Silicio</h3>
                  <p>
                    Si &gt; 70 / 75% C &lt; 0,1 / 0,2% Al &lt; 0,5 / 1,5 / 2,0%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* fim produtos produtos */}
        {/* inicio contato */}
        <section>
          <div>
            {/* container */}
            <div>
              <p>
                Para solicitar um orçamento, entre em contato conosco por telefone
                ou e-mail e forneceremos serviços experientes, profissionais e
                confiáveis.
              </p>
              <h3>Contate-nos</h3>
              <p>
                Seu parceiro para materiais estratégicos: Óxidos, Metais, Ferro
                Ligas e Catalisadores
              </p>
            </div>
            <div>
              <form action="">
                <h2>Formulario</h2>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <input type="submit" value="Enviar Mensagem" />
                </div>
              </form>
            </div>
            <div>
              <p>endereco</p>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p>telefone</p>
              <p>+123 456 789</p>
              <p>email</p>
              <p>seuemail@dominio.com</p>
            </div>
          </div>
        </section>
        {/* fim contato */}
        {/* inicio footer */}
        <footer>
          <div>
            {/* container */}
            <p>incluir apenas um sobre nos</p>
            <p>incluir um copyright</p>
          </div>
        </footer>
        {/* fim footer */}
      </main>
    </AnimateSharedLayout>
  );
}
