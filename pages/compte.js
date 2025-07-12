import React from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import Liv from './Pannier/Liv';
import Compte from './compte/Compte';

const compte = () => {
  return (
    <div>
     
         <Header/>
          <Compte/>
            
            
            <Liv/>
          <Footer/>
    </div>
  );
};

export default compte;
