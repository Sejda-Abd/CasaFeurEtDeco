import Image from 'next/image';
import css from '../../styles/AboutA.module.css';
const AboutA = () => {
    return (
        <div className={css.AboutA}>
            <div className={css.textContent}>
            <div className={css.breadcrumbContainer}>
            <p className={css.breadcrumb}>Accueil / </p>
            <p className={css.ws}>Bouquets de fleurs</p>
        </div>
                <h1>Découvrez plus sur nous</h1>
                <p className={css.description}>
                    Bienvenue chez Casa Fleur et Déco, votre destination florale d'exception. Nous sommes une équipe passionnée de fleuristes dévoués à créer des moments inoubliables. Découvrez notre collection de bouquets uniques, soigneusement conçus pour chaque occasion. De la fraîcheur à l'élégance, Casa Fleur et Déco apporte une touche florale exceptionnelle à votre vie. Explorez notre sélection en ligne et laissez la beauté de nos créations florales illuminer votre quotidien. Merci de choisir Casa Fleur et Déco, où chaque bouquet raconte une histoire.
                </p>
            </div>
            <div className={css.imageContent}>
            <Image src="/s1.png" alt="about-flower" width={500} height={300} />
            </div>
        </div>
    );
};

export default AboutA;
