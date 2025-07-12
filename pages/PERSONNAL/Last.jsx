import Image from 'next/image';
import css from '../../styles/Abou.module.css';
export default function Last() {
    return (
        <div className={css.About}>
        <Image src="/last.png" className={css.hand} alt="hand" width={500} height={300} />
    </div>

    );
}

