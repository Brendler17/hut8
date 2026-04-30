import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Group.svg';
import styles from './index.module.css';
export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.FooterContent}>
        <div className={styles.LogoFooter}>
          <img src={logo} alt="Logo" />
          <p style={{ fontSize: '12px' }}>todos os direitos reservados</p>{' '}
        </div>

        <div className={styles.RooterFooter}>
          {' '}
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Home
            </NavLink>

            <p>
              <br />
            </p>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Projetos
            </NavLink>

            <p>
              <br />
            </p>

            <NavLink
              to="/team"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Nossa equipe
            </NavLink>
          </nav>{' '}
        </div>

        <div>
          {' '}
          <p>Rua Gomes Carneiro, nº 1</p>
          <p> Centro - CEP: 96010-610</p>
          <p> Pelotas, RS - Brasil</p>{' '}
        </div>

        <div className={styles.SocialMedia}>
          <p>Encontre nossas redes sociais</p>
          <div className={styles.SocialIcons}>
            <div className={styles.IconCircle}>
              <FaInstagram />
            </div>
            <div className={styles.IconCircle}>
              <FaLinkedinIn />
            </div>
            <div className={styles.IconCircle}>
              <FaGithub />
            </div>
            <div className={styles.IconCircle}>
              <FaBehance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
