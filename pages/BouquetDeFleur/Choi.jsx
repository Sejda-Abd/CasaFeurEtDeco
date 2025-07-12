import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from '../../styles/Choi.module.css';

export default function Choi() {
    const bouquets = [
        { src: "/s1.png", name: 'Diane', price: '29,90 DT', discount: true },
        { src: "/s2.png", name: 'Raphaël', price: '29,90 DT', discount: true },
        { src: "/s3.png", name: 'Gabriel', price: '29,90 DT', discount: false },
        { src: "/s4.png", name: 'Scarlett', price: '29,90 DT', discount: true },
        { src: "/x1.png", name: 'Garance', price: '29,90 DT', discount: true },
        { src: "/x2.png", name: 'Opéra de Noel', price: '29,90 DT', discount: false },
        { src: "/x3.png", name: 'Ruby', price: '29,90 DT', discount: true },
        { src: "/x4.png", name: 'Emma', price: '29,90 DT', discount: false },
        { src: "/b1.png", name: 'Jeanne', price: '29,90 DT', discount: false },
        { src: "/s1.png", name: 'Vert coton', price: '29,90 DT', discount: false },
    ];

    return (
        <div className={css.wrapper}>
            <div className={css.breadcrumbContainer}>
                <p className={css.breadcrumb}><br></br><br></br>10 bouquets correspondent à votre recherche </p> 
            </div>
          
            <br></br><br></br> <br></br>
            <div className={css.Choix}>
                {bouquets.map((bouquet, index) => (
                    <div className={css.imageContainer} key={index}>
                        {bouquet.discount && <div className={css.discountTag}>-20%</div>}
                        {bouquet.name === 'Vert coton' ? (
                            <Link href="/fiche">
                                <a>
                                    <Image src={bouquet.src} width={200} height={220} alt={bouquet.name} />
                                    <p className={css.bouquetName}>{bouquet.name}</p>
                                    <p className={css.bouquetPrice}>à partir de {bouquet.price}</p>
                                </a>
                            </Link>
                        ) : (
                            <>
                                <Image src={bouquet.src} width={200} height={220} alt={bouquet.name} />
                                <p className={css.bouquetName}>{bouquet.name}</p>
                                <p className={css.bouquetPrice}>à partir de {bouquet.price}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <br></br><br></br>
        </div>
    );
}
