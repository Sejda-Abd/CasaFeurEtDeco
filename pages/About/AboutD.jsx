import css from '../../styles/AboutD.module.css';
import Image from 'next/image';

export default function AboutD() {
  return (
    <div className={css.PartieContainer}>
      <Image src="/x2.png" alt="aboutd-flower" width={400} height={200} />
      <p className={css.subheading}>
        <br></br>
      Livraison gratuite dès 120DT d'achats
      </p>
    </div>
  );
}
