import css from '../../styles/Map.module.css';
import Image from 'next/image';

export default function Map() {
  return (
    <div className={css.map}>
      <div className={css.imageContainer}>
        <Image src="/Map.png" className={css.image} alt="map" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
