import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Fleur from './BouquetDeFleur/Fleur';
import Op from './BouquetDeFleur/Op';
import Par from './BouquetDeFleur/Par';
import Choi from './BouquetDeFleur/Choi';
import Liv from './Pannier/Liv';


function bouquet() {
    return (
        <div>

            <Header />
            <Fleur />
            <Op />
            <Par/>
            <Choi/>
            <Liv/>
            <Footer />
        </div>
    );
}

export default bouquet;
