import css from '../../styles/Produit.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Produit() {
  return (
    <div className={css.produitContainer}>
      <h1 className={css.title}>Nos Produits</h1>
      <div className={css.filters}>
        <ul className={css.filterButton}>
          <li><Link href='/bouquet'><a>TYPE DES FLEURS</a></Link></li>
          <li><Link href='/perso'><a>COULEUR</a></Link></li>
          <li><Link href='/occasion'><a>OCCASION</a></Link></li>
          <li><Link href='/type-plante'><a>TYPE DE PLANTE</a></Link></li>
        </ul>
      </div>
      <br></br> <br></br>
      <div className={css.products}>
        <div className={css.productContainer}>
          <Image src="/s1.png" className={css.productImage} alt="1" width={300} height={400} />
        </div>
        <div className={css.productContainer}>
          <Image src="/s2.png" className={css.productImage} alt="2" width={300} height={400} />
        </div>
        <div className={css.productContainer}>
          <Image src="/s3.png" className={css.productImage} alt="3" width={300} height={400} />
        </div>
        <div className={css.productContainer}>
          <Image src="/s4.png" className={css.productImage} alt="4" width={300} height={400} />
        </div>
      </div>
      <div className={css.bannerAndAbout}>
            <div className={css.bannerContainer}>
        <Image src="/x1.png" className={`${css.flo} ${css.moveRight}`} alt="flo" width={500} height={400} />
      </div>

        <div className={css.about}>
          <h2 className={css.aboutTitle}>à propos de nous</h2>
          <p className={css.aboutText}>
           <center> Casa fleur et déco est une boutique spécialisée dans la vente des fleurs et la confection de<br></br> bouquets de <span className={css.pik}>fleurs que ce soit pour décorer votre intérieur ou célébrer une occasion <br></br></span> <span className={css.pk}>particulière (naissance, mariage ou autre).</span> </center>
          </p>
        </div>
      </div>
    </div>
  );
}
