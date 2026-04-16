import { Link } from 'react-router-dom';
import logoHut from '../../assets/logo-hut.svg';
import styles from './index.module.css';

export function MenuItems() {
  return (
    <div className={styles.menuItemsContainer}>
      <div className={styles.menuItemsLogo}>
        <img src={logoHut} alt="logotipo-hut" />
      </div>
      <div className={styles.menuItemsLinks}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/team">Nossa equipe</Link>
      </div>
      <div className={styles.menuItemsButton}>
        <button type="button">Entre pra hut</button>
      </div>
    </div>
  );
}
