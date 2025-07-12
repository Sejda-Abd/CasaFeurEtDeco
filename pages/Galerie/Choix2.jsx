import React from 'react';
import Image from 'next/image';
import css from '../../styles/Choix2.module.css';
import Link from 'next/link';


export default function Choix2() {
    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <Link href='./type-plante'>  Plantes décoratives  </Link>

            </div>
            <br></br>
            <div className={css.Choix}>
                <div className={css.imageContainer}>
                    <Image src="/s1.png" width={200} height={220} alt="o1" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s2.png" width={200} height={220} alt="o2" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s3.png" width={200} height={220} alt="o3" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/s4.png" width={200} height={220} alt="o4" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x1.png" width={200} height={220} alt="o5" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x2.png" width={200} height={220} alt="o6" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x3.png" width={200} height={220} alt="o7" />
                </div>
                <div className={css.imageContainer}>
                    <Image src="/x4.png" width={200} height={220} alt="o8" />
                </div>
            </div>
            <br></br><br></br>
        </div>
    );
}
