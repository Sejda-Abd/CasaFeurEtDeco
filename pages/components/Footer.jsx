import React from 'react';
import Image from 'next/image';
import css from '../../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.logoContainer}>
                <div className={css.casaContainer}>
                    <Image src="/logoF.png" className={css.logoF} alt="Logo" width={250} height={138} />
                </div>
                <div className={css.text}>Décoration florale - Mariage - Réception</div>
            </div>
            <div className={css.footerColumn}>
                <h4>Archiver</h4>
                <ul>
                    <li><a href="#gallery">Galerie</a></li>
                    <li><a href="#pricing">Tarification</a></li>
                </ul>
            </div>
            <div className={css.footerColumn}>
                <h4>Aide</h4>
                <ul>
                    <li><a href="#returns">Retours et remboursements</a></li>
                    <li><a href="#shop">Magasins en ligne</a></li>
                </ul>
            </div>
            <div className={css.footerColumn}>
                <h4>Entreprise</h4>
                <ul>
                    <li><a href="#order-tracking">Suivi de commande</a></li>
                </ul>
            </div>
        </footer>
    );
}
