import Link from 'next/link';

import css from '../../styles/options.module.css';
export default function Occhoix() {
    return (
        <div className={css.options}>
            
            <div className={css.textContent}>
            <div className={css.breadcrumbContainer}>
            <p className={css.breadcrumb}>Accueil / </p>
            <p className={css.ws}>Bouquets de fleurs</p>
            </div> </div>
            <div className={css.filters}>
            <ul className={css.filterButton}>
            <li><Link href='/bouquet'><a>TYPE DES FLEURS</a></Link></li>
            <li><Link href='/couleur'><a>COULEUR</a></Link></li>
            <li><Link href='/occasion'><a>OCCASION</a></Link></li>
            <li><Link href='/type-plante'><a>TYPE DE PLANTE</a></Link></li>
            </ul>
            </div>
    </div>

    );
}

