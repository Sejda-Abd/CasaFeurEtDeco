import React from 'react';
import Image from 'next/image';
import css from '../../styles/Flo.module.css';

export default function Flo() {
    return (
        <div className={css.wrapper}>
            <div className={css.breadcrumbContainer}>
                <p className={css.breadcrumb}><br></br><br></br>12 bouquets correspondent à votre recherche </p>
            </div>
           
            <br></br> <br></br>
            <div className={css.Choix}>
                <div className={css.imageContainer}>
                    <Image src="/b1.png" width={200} height={220} alt="b1" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s1.png" width={200} height={220} alt="b2" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s2.png" width={200} height={220} alt="b3" />
                </div>
                <div className={css.imageContainer}>
                <div className={css.discountTag}>-20%</div>

                    <Image src="/s3.png" width={200} height={220} alt="b4" />
                </div>
                <div className={css.imageContainer}>
                <div className={css.discountTag}>-20%</div>

                    <Image src="/s4.png" width={200} height={220} alt="b5" />
                </div>
                <div className={css.imageContainer}>
                <div className={css.discountTag}>-20%</div>

                    <Image src="/x1.png" width={200} height={220} alt="b6" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x2.png" width={200} height={220} alt="b7" />
                </div>
                <div className={css.imageContainer}>
                <div className={css.discountTag}>-20%</div>

                    <Image src="/x3.png" width={200} height={220} alt="b8" />
                </div>
            </div>
           
        </div>
    );
}
