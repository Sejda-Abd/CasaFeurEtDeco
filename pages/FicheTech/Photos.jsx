import React from 'react';
import Image from 'next/image';
import css from '../../styles/Photos.module.css';

export default function Photos() {
    return (
        <div className={css.photos}>
            <div className={css.photoContainer}>
                <Image src="/x1.png" className={css.photo} alt="Aimé" width={200} height={300} />
                <div className={css.caption}>
                    <h2>Aimé</h2>
                    <p>à partir de 29,90 DT</p>
                </div>
            </div>
            <div className={css.photoContainer}>
                <Image src="/x2.png" className={css.photo} alt="Carmen" width={200} height={300} />
                <div className={css.caption}>
                    <h2>Carmen</h2>
                    <p>à partir de 29,90 DT</p>
                </div>
            </div>
            <div className={css.photoContainer}>
                <Image src="/x3.png" className={css.photo} alt="Anaëlle" width={200} height={300} />
                <div className={css.caption}>
                    <h2>Anaëlle</h2>
                    <p>à partir de 29,90 DT</p>
                </div>
            </div>
            <div className={css.photoContainer}>
                <Image src="/x4.png" className={css.photo} alt="Margaux" width={200} height={300} />
                <div className={css.caption}>
                    <h2>Margaux</h2>
                    <p>à partir de 29,90 DT</p>
                </div>
            </div>
        </div>
    );
}
