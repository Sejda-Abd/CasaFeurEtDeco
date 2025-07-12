import css from '../../styles/Article.module.css';
import Image from 'next/image';

export default function Article() {
  return (
    <div className={css.outerContainer}>
      <div className={css.container}>
        <div className={css.breadcrumbContainer}></div>

        <div className={css.header}>
          <div className={css.headerItem}>Articles du panier</div>
          <div className={css.headerItem}>Prix</div>
          <div className={css.headerItem}>Quantité</div>
          <div className={css.headerItem}>Total</div>
          <div className={css.headerItem}>Retirer</div>
        </div>

        <div className={css.table}>
          <div className={css.tableRow}>
            <div className={css.tableCell}>
              <Image src="/s1.png" alt="Product 1" width={100} height={100} />
            </div>
            <div className={css.tableCell}>40 DT</div>
            <div className={css.tableCell}>
              <select defaultValue="02">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
              </select>
            </div>
            <div className={css.tableCell}>80 DT</div>
            <div className={css.tableCell}>
              <Image src="/D.png" alt="Remove" width={20} height={20} />
            </div>
          </div>

          <div className={css.tableRow}>
            <div className={css.tableCell}>
              <Image src="/s2.png" alt="Product 2" width={100} height={100} />
            </div>
            <div className={css.tableCell}>29.90 DT</div>
            <div className={css.tableCell}>
              <select defaultValue="01">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
              </select>
            </div>
            <div className={css.tableCell}>29.90 DT</div>
            <div className={css.tableCell}>
              <Image src="/D.png" alt="Remove" width={20} height={20} />
            </div>
          </div>
        </div>

        <p className={css.infoText}>
          Le prix et la disponibilité des articles sur Amazon sont sujets à changement. Le panier est un lieu temporaire où est stockée une liste de vos articles et où se reflète le prix le plus récent de chaque article.
        </p>

        <div className={css.totalContainer}>
          <p>Total panier</p>
          <p>109.90 DT</p>
        </div>
      </div>
      <br />
      <div className={css.footer}>
        <button className={css.continueButton}>Continuer vos achats</button>
        <button className={css.checkoutButton}>Valider la commande</button>
      </div>
      <br />
    </div>
  );
}
