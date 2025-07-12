import React from 'react';
import Footer from './components/Footer';
import Article from './Pannier/Article';
import Header from './components/Header';
import ArticleA from './Pannier/ArticleA';
import Liv from './Pannier/Liv';
import Top from './Pannier/Top';


const Pannier = () => {
  return (
    <div>
     
         <Header/>
         <Top/>
          <Article/>
            <ArticleA/>
            
            <Liv/>
          <Footer/>
    </div>
  );
};

export default Pannier;
