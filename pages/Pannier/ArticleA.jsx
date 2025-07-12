import React from 'react';
import css from '../../styles/ArticleA.module.css';
import Image from 'next/image';

const ArticleA = () => {
  return (
    <div className={css.servicesContainer}>
      <div className={css.serviceItem}>
        <Image src="/D1.png" alt="Delivery Icon" width={50} height={50} />
        <p>Livraison de fleurs en 24h <br></br> partout en Tunisie</p>
      </div>
      <div className={css.serviceItem}>
        <Image src="/D2.png" alt="Secure Payment Icon" width={50} height={50} />
        <p>Paiement 100% sécurisé</p>
      </div>
      <div className={css.serviceItem}>
        <Image src="/D3.png" alt="Customer Service Icon" width={50} height={50} />
        <p>Service client disponible 6j/7</p>
      </div>
      <div className={css.serviceItem}>
        <Image src="/D4.png" alt="Cash on Delivery Icon" width={50} height={50} />
        <p>Paiement à la livraison</p>
      </div>
    </div>
  );
};

export default ArticleA;
