import Image from 'next/image';
import css from '../../styles/AboutC.module.css';

export default function AboutC() {
  return (
    <div className={css.PartieContainer}>
      <Image src="/s2.png" alt="aboutc-flower" width={400} height={200} />
      <p className={css.subheading}>
      <h1 className={css.title}>Informations Supplémentaires :</h1>
        <br />

        notre boutique est ouverte : de 09h00 à 17h00 du lundi au vendredi
        de 10h00 à 17h00 le samedi nous sommes fermés le dimanche.
      </p>
      <div className={css.line}></div>
      <div className={css.contactInfo}>
        <Image src="/phone.png" alt="phone" width={20} height={20} /> 98 404 871
      </div>
      <div className={css.contactInfo}>
        <Image src="/mail.png" alt="mail" width={20} height={20} /> casa.fleur_et.deco@outlook.com
      </div>
      <div className={css.contactInfo}>
        <Image src="/location.png" alt="location" width={20} height={20} /> avenue des palmiers, sousse, tunisia
      </div>
      <div className={css.contactInfo}>
        <Image src="/facebook.png" alt="facebook" width={20} height={20} /> casafleuretdecosousse
      </div>
    </div>
  );
}
