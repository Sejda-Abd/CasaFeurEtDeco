import React from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import Liv from './Pannier/Liv';
import Fiche from './FicheTech/FIche';
import Bar from './FicheTech/Bar';
import AboutP from './FicheTech/AboutP';
import Fi from './FicheTech/Fi';
import Photos from './FicheTech/Photos';
import ArticleA from './Pannier/ArticleA';

const fiche = () => {
  return (
    <div>
     
         <Header/>
          <Bar/>
            <Fiche/>
            <AboutP/>
            <Fi/>
            <Photos/>
            <ArticleA/>
            <Liv/>
          <Footer/>
    </div>
  );
};

export default fiche;
