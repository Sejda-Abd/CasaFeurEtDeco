import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Liv from './Pannier/Liv';
import Last from './PERSONNAL/Last';
import Op from './BouquetDeFleur/Op';
import Kill from './PERSONNAL/kill';
import Flo from './PERSONNAL/Flo';
import Flok from './PERSONNAL/Flok';


const Pannier = () => {
  return (
    <div>
     
         <Header/>
          <Last/>
            <Op/>
            <Kill/>
            <Flo/>
            <Flok/>
            <Liv/>
          <Footer/>
    </div>
  );
};

export default Pannier;
