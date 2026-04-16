import { MenuItems } from '../../components/Menu-Items';
import styles from './styles.module.css';

export function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <MenuItems />
      </div>

      <div className={styles.bannerContent}>
        <div className={styles.rectangle}>
  <div>
    <h1>Projetos desenvolvidos aqui</h1>
    <p className={styles.subtitle}>Pessoas que confiaram na Hut8 e tiveram sua <br/></p>
    <p className={styles.subtitle}>presença digital renovada</p>
  </div>
</div>
      </div>
    </div>
  );
}