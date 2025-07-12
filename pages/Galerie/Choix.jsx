import React from 'react';
import Image from 'next/image';
import css from '../../styles/Choix.module.css';
import Link from 'next/link';

export default function Choix() {
    return (
        <div className={css.wrapper}>
         <div className={css.breadcrumbContainer} style={{ transform: 'translateX(90px)' }}>
    <p className={css.breadcrumb}>
        <br /><br />
        12 bouquets correspondent à votre recherche
    </p>
</div>


            <div className={css.header}>
                 <Link href='./perso'> Bouquet personnalisé</Link>
            </div>
            <br></br>
            <br></br>
            <div className={css.Choix}>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src="/s1.png" width={200} height={220} alt="k1" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s2.png" width={200} height={220} alt="k2" />
                </div>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src="/s3.png" width={200} height={220} alt="k3" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s4.png" width={200} height={220} alt="k4" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x1.png" width={200} height={220} alt="k5" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x2.png" width={200} height={220} alt="k6" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x3.png" width={200} height={220} alt="k7" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x4.png" width={200} height={220} alt="k8" />
                </div>
            </div>
            <br></br><br></br>
        </div>
    );
}
