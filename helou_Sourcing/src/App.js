import Menu from 'components/menu';
import Header from 'components/header';
import Company from 'components/company';
import WhatWeDo from 'components/whatWeDo';
import WhyUs from 'components/whyUs';
import Products from 'components/products';
import Contact from 'components/contact';
import Footer from 'components/footer';
import { AnimateSharedLayout }  from  'framer-motion';
import { LanguageContextProvider } from 'context/LanguageContext';

export default function App() {

  return (
    <AnimateSharedLayout>
      <LanguageContextProvider>
        <main>
          <Menu />
          <Header />
          <Company />
          <WhatWeDo />
          <WhyUs />
          <Products />
          <Contact />
          <Footer />
        </main>
      </LanguageContextProvider>
    </AnimateSharedLayout>
  );
}
