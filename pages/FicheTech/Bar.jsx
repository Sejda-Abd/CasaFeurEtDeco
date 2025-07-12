import React from 'react';

import css from '../../styles/Bar.module.css';

export default function Bar() {
    return (
        <div className={css.Bar}>
            <br></br>
            <div className={css.breadcrumbContainer}>
                <p className={css.breadcrumb}>Accueil / Bouquets de fleurs / <span className={css.currentBreadcrumb}>Vert Coton</span> <br></br> <br></br></p>
            <br></br>
            </div>
           
            
        </div>
    );
}
