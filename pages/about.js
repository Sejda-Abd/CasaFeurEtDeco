import React from 'react';
import Abou from './About/Abou';
import AboutA from './About/AboutA';
import AboutB from './About/AboutB';
import AboutC from './About/AboutC';
import AboutD from './About/AboutD';
import Header from './components/Header';
import Footer from './components/Footer';

const About = () => {
  return (
    <div>
     
         <Header/>
          <Abou/>  
          <AboutA/>
          <AboutB/>
          <AboutC/>
          <AboutD/>
          <Footer/>
    </div>
  );
};

export default About;
