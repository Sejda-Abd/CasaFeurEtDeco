import React, { useState } from 'react';
import Image from 'next/image';
import css from '../../styles/Fiche.module.css';

export default function Fiche() {
    const [mainImage, setMainImage] = useState("/s1.png"); // Initialize with the first image

    const images = ["/s1.png", "/s2.png", "/s3.png"]; // List of images

    return (
        <div className={css.fiche}>
            <div className={css.mainContent}>
                <div className={css.imageContainer}>
                    <div className={css.discountTag}>-20%</div>
                    <Image src={mainImage} className={css.mainImage} alt="Main" width={400} height={400} />
                    <div className={css.thumbnailContainer}>
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                className={css.thumbnailImage}
                                alt={`Thumbnail ${index - 1}`}
                                width={100}
                                height={100}
                                onClick={() => setMainImage(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className={css.detailsContainer}>
                    <h1 className={css.title}>Vert Coton</h1>
                    <p className={css.price}>29,90 DT</p>
                    <p className={css.stockStatus}>En stock (Réf: 310)</p>
                    <p className={css.description}>
                        La rose blanche se met au service de vos plus belles occasions avec notre bouquet Vert coton. 
                        Composé par les fleuristes créateurs de la marque Casa Fleur et Décor, ce bouquet raffiné et généreux 
                        vous invite à transmettre vos plus beaux sentiments, du simple plaisir doffrir aux plus grandes cérémonies.
                    </p>
                    <h2 className={css.subtitle}>Composition:</h2>
                    <p className={css.composition}>
                        Fleurs principales : Rose moyen bouton - Lisianthus - Germini
                        Couleurs principales : Camaïeu rose.
                        Chaque bouquet est unique, votre fleuriste peut être amené à substituer une variété de fleur 
                        pour réaliser sa création et vous offrir le plus beau des bouquets.
                    </p>
                    <h2 className={css.subtitle}>Sélectionnez la taille :</h2>
                    <div className={css.sizeOptions}>
                        <div className={css.sizeOption}>Jeanne-Petit bouquet 29,90 DT</div>
                        <div className={css.sizeOption}>Jeanne-Bouquet moyen 50 DT</div>
                        <div className={css.sizeOption}>Jeanne-Grand bouquet 160 DT</div>
                        
                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <center><button className={css.addToCartButton}>Ajouter au panier</button></center>
                </div>
            </div>
        </div>
    );
}
