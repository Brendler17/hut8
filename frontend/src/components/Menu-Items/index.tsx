import logoHut from '../../assets/logo-hut.svg';
import styles from './index.module.css';

export function MenuItems() {
  return (
    <div className={styles.menuItemsContainer}>
      <div className={styles.menuItemsLogo}>
        <img src={logoHut} alt="logotipo-hut" />
      </div>
      <div className={styles.menuItemsLinks}>
        <a href="/">Home</a>
        <a href="/projects">Projetos</a>
        <a href="/team">Nossa equipe</a>
      </div>
      <div className={styles.menuItemsButton}>
        <button type="button">Entre pra hut</button>
      </div>
    </div>
  );
}
