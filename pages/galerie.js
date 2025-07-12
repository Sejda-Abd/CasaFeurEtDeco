import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Liv from './Pannier/Liv';
import Galerie from './Galerie/Galerie';
import Acc from './Galerie/Acc';
import Plante from './Galerie/Plante';
import Choix from './Galerie/Choix';
import Choix2 from './Galerie/Choix2';
import Choix3 from './Galerie/Choix3';

const galerie = () => {
  return (
    <div>
     
         <Header/>
          <Galerie/>
            <Acc/>
            <Plante/>
            <Choix/>
            <Choix2/>
            <Choix3/>
            <Liv/>
          <Footer/>
          
    </div>
  );
};

export default galerie;
