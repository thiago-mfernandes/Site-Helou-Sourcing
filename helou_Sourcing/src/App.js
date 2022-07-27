import { useState } from 'react';
import Menu from 'components/menu';
import Header from 'components/header';
import Company from 'components/company';
import WhatWeDo from 'components/whatWeDo';
import WhyUs from 'components/whyUs';
import Products from 'components/products';
import Contact from 'components/contact';
import Footer from 'components/footer';
import { AnimateSharedLayout }  from  'framer-motion';

export default function App() {
  
  //true: portugues; 
  //false: ingles;
  let [language, setLanguage] = useState(true);

  return (
    <AnimateSharedLayout>
      <main>
        <Menu language={language} setLanguage={setLanguage}/>
        <Header language={language}/>
        <Company language={language}/>
        <WhatWeDo language={language}/>
        <WhyUs language={language}/>
        <Products language={language}/>
        <Contact language={language}/>
        <Footer />
      </main>
    </AnimateSharedLayout>
  );
}
