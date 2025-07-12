import Image from 'next/image';
import css from '../../styles/Abou.module.css';
export default function Occa() {
    return (
        <div className={css.Galerie}>
        <Image src="/mari.png" className={css.galerie} alt="galerie" width={500} height={300} />
    </div>

    );
}

