import React from 'react';
import Image from 'next/image';
import css from '../../styles/Choix3.module.css';
import Link from 'next/link';

export default function Choix3() {
    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                               <Link href='./bouquet'>   Bouquet de fleur   </Link>

            </div>
            <br></br>
            <div className={css.Choix}>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src="/s1.png" width={200} height={220} alt="m1" />
                </div>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src="/s2.png" width={200} height={220} alt="m2" />
                </div>
                <div className={css.imageContainer}>
                   
                    <Image src="/s3.png" width={200} height={220} alt="m3" />
                </div>
                <div className={css.imageContainer}>
                <div className={css.discountTag}>-20%</div>
                    <Image src="/s4.png" width={200} height={220} alt="m4" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x1.png" width={200} height={220} alt="m5" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x2.png" width={200} height={220} alt="m6" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x3.png" width={200} height={220} alt="m7" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x4.png" width={200} height={220} alt="m8" />
                </div>
                <br></br> <br></br>
            </div>
        </div>
    );
}
