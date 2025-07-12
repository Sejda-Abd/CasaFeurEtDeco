import Image from 'next/image';
import css from '../../styles/Abou.module.css';
export default function Galerie() {
    return (
        <div className={css.Galerie}>
        <Image src="/c.png" className={css.hand} alt="about-flower" width={5000} height={900} />
        </div>

    );
}

