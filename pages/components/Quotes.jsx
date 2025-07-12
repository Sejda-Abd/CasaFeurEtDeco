import css from '../../styles/Quotes.module.css';
import Image from 'next/image';

export default function Quotes() {
  return (
    <div className={css.QuotesContainer}>
      <div className={css.section}>
        <Image src="/s1.png" className={css.image} alt="quote1" width={463} height={570} />
        <div className={css.textRight}>
          <p className={css.quote}>Transformer vous idée en merveilles florales. Nos experts ont des mains magiques.<br /><span className={css.author}><center>(Robert Welch)</center></span></p>
        </div>
      </div>
      <div className={css.section}>
        <div className={css.textLeft}>
          <p className={css.caption}>Des fleurs fraîches cueillies à la main rien que pour vous.</p>
        </div>
        <Image src="/x1.png" className={css.imageSmall} alt="quote2" width={400} height={400} />
      </div>
      <div className={css.section}>
        <Image src="/s2.png" className={css.image} alt="quote3" width={463} height={570} />
        <div className={css.textRight}>
          <p className={css.quote}>Des solutions créatives pour tous vos besoins floraux où les rêves deviennent réalité.<br /><span className={css.author}><center>(Jasmin Blanc)</center></span></p>
        </div>
      </div>
    </div>
  );
}
