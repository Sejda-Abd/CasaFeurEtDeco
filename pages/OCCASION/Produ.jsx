import React from 'react';
import Image from 'next/image';
import css from '../../styles/Produ.module.css';

export default function Produ() {
    const bouquets = [
        { src: "/s1.png", discount: false },
        { src: "/s2.png", discount: false },
        { src: "/s3.png", discount: false },
        { src: "/s4.png", discount: false },
        { src: "/x1.png", discount: false },
        { src: "/x2.png", discount: false },
        { src: "/x3.png", discount: false },
        { src: "/x4.png", discount: false },
        { src: "/b1.png", discount: false },
        { src: "/s1.png", discount: false },
        { src: "/s2.png", discount: false },
        { src: "/s3.png", discount: false },
    ];

    return (
        <div className={css.wrapper}>
            <div className={css.breadcrumbContainer}>
                <p className={css.breadcrumb}><br></br><br></br>12 bouquets correspondent à votre recherche </p>
            </div>
            
            <br></br> <br></br>
            <div className={css.Choix}>
                {bouquets.map((bouquet, index) => (
                    <div className={css.imageContainer} key={index}>
                        {bouquet.discount && <div className={css.discountTag}>-20%</div>}
                        <Image src={bouquet.src} width={200} height={220} alt={`w${index + 1}`} />
                    </div>
                ))}
            </div>
            <br></br><br></br>
        </div>
    );
}
