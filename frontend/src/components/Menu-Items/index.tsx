import { NavLink } from 'react-router-dom';
import logoHut from '../../assets/logo-hut.svg';
import styles from './index.module.css';

export function MenuItems() {
  return (
    <header className={styles.menuItemsContainer}>
      <div className={styles.menuItemsLogo}>
        <img src={logoHut} alt="logotipo-hut" />
      </div>
      <nav className={styles.menuItemsLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Projetos
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Nossa equipe
        </NavLink>
      </nav>
      <div className={styles.menuItemsButton}>
        <button type="button">Entre pra hut</button>
      </div>
    </header>
  );
}
