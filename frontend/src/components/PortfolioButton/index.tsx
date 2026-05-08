import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

export function PortfolioButton() {
  return (
    <button className={styles.button} type="button">
      <NavLink to="projects">
        Confira nosso portfólio
      </NavLink>
    </button>
  );
}
