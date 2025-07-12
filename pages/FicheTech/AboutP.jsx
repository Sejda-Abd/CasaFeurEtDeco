import Image from 'next/image';
import css from '../../styles/AboutP.module.css';

const AboutP = () => {
    return (
        <div className={css.AboutA}>
            <div className={css.textContent}>
                <div className={css.breadcrumbContainer}>
                </div>
                <center> <strong><p  className={css.titre}>L'INSPIRATION DE NOTRE FLEURISTE CRÉATEUR</p></strong></center>
                <p className={css.description}>
                    "Ce bouquet chic, intemporel a été rondement réalisé avec des roses de différents gabarits : petits boutons à gros boutons parsemés de petites fleurettes qui apportent légèreté et douceur. Il est tout à la fois ! Chic, nature, doux et élégant…"
                </p>
            </div>
            <div className={css.imageContent}>
                <Image src="/fiche.png" alt="phH" width={500} height={300}/>
            </div>
        </div>
    );
};

export default AboutP;
