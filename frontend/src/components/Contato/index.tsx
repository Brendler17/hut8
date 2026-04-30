import { BsEnvelopeFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import styles from './index.module.css';
export function Contato() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>Entre em contato conosco</h2>
        <h2>Para futuros projetos</h2>
        <p>
          <strong>Estamos prontos para te ajudar!</strong>
        </p>
      </div>
      <div className={styles.columnRight}>
        <h2>Augusto Menchaca</h2>
        <p>Diretor de Projetos</p>
        <p>
          {' '}
          <br />
        </p>
        <p className={styles.email}>
          <BsEnvelopeFill size={15} />
          hut8@inf.ufpel.edu.br
        </p>
        <p className={styles.phone}>
          <FaPhone size={15} />
          (51) 9 9296-3600
        </p>
      </div>
    </div>
  );
}
