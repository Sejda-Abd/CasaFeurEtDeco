import css from '../../styles/Partie.module.css';

export default function Partie() {
  return (
    <div className={css.PartieContainer}>
      <h2 className={css.heading}>Les fleurs, source inspiration pour nos designers</h2>
      <p className={css.subheading}>
        Les fleurs sont effectivement une source inspiration pour nos designers. Il faut <br></br>dire 
        quune décoration végétale fait toujours son petit effet. Ainsi, une maison <br></br> fleurie 
        donne une atmosphère gaie et accueillante
      </p>
    </div>
  );
}
