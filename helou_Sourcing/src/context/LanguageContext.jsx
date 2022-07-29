import { createContext, useState } from 'react';
import propTypes from 'prop-types';
import portuguese from 'data/portugueseVersion.json';
import english from 'data/englishVersion.json';

export const LanguageContext = createContext();
export function LanguageContextProvider({children}) {
  
  //true: portugues; //false: ingles;
  let [language, setLanguage] = useState(true);

  function HandleLanguage(language) {
    let handleLanguage = language ? portuguese : english;
    return handleLanguage;
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage, HandleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageContextProvider.propTypes = {
  children: propTypes.any,
};

//------------------------------------------->
//   1. criar uma variavel que recebe a funcao createContext;
//   2. no App, envolver os filhos que irao consumir os estados;
//   3. criar a função LanguageContextProvider que recebe como parametro so children (os componentes que vao acessar os estados);
//   4. declarar os estados que serao consumidos pelos componentes;
//   5. retornar o LanguageContext.Provider com os valores do estados que estaram 
//      disponiveis atraves do atributo value;


//------------------------------------------->
//   6. DENTRO DO COMPONENTE, fazer o import useContext e o contexto a ser usado 
//      (LanguageContext);
//   7. const {language} = useContext(LanguageContext);
//      o contexto(LanguageContext) contem um objeto que vai ser desestruturado 
//      no componente;
//   8. o objeto no componente recebe da funcao useContext(LanguageContext) o contexto 
//      a ser usado;