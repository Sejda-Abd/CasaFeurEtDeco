import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Liv from './Pannier/Liv';
import Occa from './OCCASION/Occa';
import Occhoix from './OCCASION/Occhoix';
import Quo from './OCCASION/Quo';
import Produ from './OCCASION/Produ';


const occasion = () => {
  return (
    <div>
     
         <Header/>
          <Occa/>
          <Occhoix/>
          <Quo/>
          <Produ/>
            <Liv/>
          <Footer/>
    </div>
  );
};

export default occasion;
