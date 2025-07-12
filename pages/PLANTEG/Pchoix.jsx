import React from 'react';
import css from '../../styles/PChoix.module.css';

export default function Pchoix() {
    const bouquets = [
        { src: "/g1.png", discount: false },
        { src: "/g2.png", discount: false },
        { src: "/g3.png", discount: false },
        { src: "/g4.png", discount: false },
        { src: "/g5.png", discount: false },
        { src: "/g6.png", discount: false },
        { src: "/g7.png", discount: false },
        { src: "/g8.png", discount: false },
        { src: "/g9.png", discount: false },
        { src: "/g10.png", discount: false },
        { src: "/g11.png", discount: false },
        { src: "/g12.png", discount: false },
        { src: "/g13.png", discount: false },
        { src: "/g14.png", discount: false },
        { src: "/g15.png", discount: false },
        { src: "/g16.png", discount: false },
        { src: "/g17.png", discount: false },
        { src: "/g18.png", discount: false },
        { src: "/g19.png", discount: false },
        { src: "/g20.png", discount: false },
        { src: "/g21.png", discount: false },
        { src: "/g22.png", discount: false },
        { src: "/g23.png", discount: false },
        { src: "/g24.png", discount: false },
    ];

    return (
        <div className={css.wrapper}>
            <br></br>
            <div className={css.breadcrumbContainer}>
                <p className={css.breadcrumb}>12 bouquets correspondent à votre recherche</p>
            </div>
            <br></br><br></br>
            <div className={css.Choix}>
                {bouquets.map((bouquet, index) => (
                    <div className={css.imageContainer} key={index}>
                        {bouquet.discount && <div className={css.discountTag}>-20%</div>}
                        <img src={bouquet.src} width={200} height={220} alt={`g${index + 1}`} />
                    </div>
                ))}
            </div>
            <br></br> <br></br>
        </div>
    );
}
