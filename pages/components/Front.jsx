import css from '../../styles/Front.module.css';
import Image from 'next/image';

export default function Front() {
  return (
    <div className={css.container}>
      <Image 
        src="/home.png" 
        className={css.home} 
        alt="home" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
      />
      <p className={css.text}>
        
      </p>
    </div>
  );
}
