import Image from 'next/image';
import css from '../../styles/Abou.module.css';
export default function About() {
    return (
        <div className={css.About}>
        <Image src="/c.png" className={css.hand} alt="about-flower" width={5000} height={900} />
    </div>

    );
}

