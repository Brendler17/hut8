import detalheDireito from '../../assets/detalhe-direito.svg';
import styles from './index.module.css';

interface RectangleProps {
  title: string;
  text: string;
}

export function Rectangle({ title, text }: RectangleProps) {
  return (
    <div className={styles.header}>
      <div className={styles.rectangle}>
        <img className={styles.detalheEsquerdo} src={detalheDireito} alt="" />
        <img className={styles.detalheDireito} src={detalheDireito} alt="" />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
