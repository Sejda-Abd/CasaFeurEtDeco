import css from '../../styles/Top.module.css';


export default function Panier() {
  return (
        <div className={css.breadcrumbContainer}>
          <p className={css.breadcrumb}>Accueil / </p>
          <p className={css.breadcrumb}>Bouquet de fleurs / vert coton / </p>
          <p className={css.greenText}>Panier</p>
        </div>
        
    
  );
}
