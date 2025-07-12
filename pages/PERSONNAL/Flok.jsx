import React from 'react';
import Image from 'next/image';
import css from '../../styles/Flo.module.css';

export default function Flok() {
    return (
        <div className={css.wrapper}>
            
            <br></br>
            <div className={css.Choix}>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src="/s1.png" width={200} height={220} alt="z1" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s2.png" width={200} height={220} alt="z2" />
                </div>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src="/s3.png" width={200} height={220} alt="z3" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s4.png" width={200} height={220} alt="z4" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x1.png" width={200} height={220} alt="z5" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x2.png" width={200} height={220} alt="z6" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x3.png" width={200} height={220} alt="z7" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x4.png" width={200} height={220} alt="z8" />
                </div>
            </div>
            
        </div>
    );
}
