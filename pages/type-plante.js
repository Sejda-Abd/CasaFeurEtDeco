import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Liv from './Pannier/Liv';
import Plant from './PLANTEG/Plant';
import Pli from './PLANTEG/Pli';
import Desc from './PLANTEG/Desc';
import Pchoix from './PLANTEG/Pchoix';



const occasion = () => {
  return (
    <div>
     
         <Header/>
            <Plant/>
            <Pli/>
            <Desc/>
            <Pchoix/>
            <Liv/>

          <Footer/>
    </div>
  );
};

export default occasion;
