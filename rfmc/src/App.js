import { useState } from 'react';
import Menu from 'components/menu';
import Header from 'components/header';
import Company from 'components/company';
import WhatWeDo from 'components/whatWeDo';
import WhyUs from 'components/whyUs';
import { AnimateSharedLayout }  from  'framer-motion';


export default function App() {
  
  let [language, setLanguage] = useState(true);

  return (
    <AnimateSharedLayout>
      <main>
        <Menu language={language} setLanguage={setLanguage}/>
        <Header language={language}/>
        <Company language={language}/>
        <WhatWeDo language={language}/>
        <WhyUs />
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
