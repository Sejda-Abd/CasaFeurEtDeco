import css from '../../styles/Quotes.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={css.Home}>
        <Image src="/home.png" className={css.home} alt="home" width={900} height={700} />
      
    </div>
  );
}
