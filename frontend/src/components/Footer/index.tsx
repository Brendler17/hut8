import styles from './index.module.css';
import logoHut from '../../assets/logo-hut.svg';
import { InstagramLogo, LinkedinLogo, GithubLogo, BehanceLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logoHut} alt="logo hut8" />
        <span>Todos os direitos reservados</span>
      </div>

      <nav className={styles.links}>
        <a href="/">Home</a>
        <a href="/projects">Projetos</a>
        <a href="/team">Nossa equipe</a>
      </nav>

      <address className={styles.address}>
        Rua Gomes Carneiro, nº 1<br />
        Centro - CEP: 96010-610<br />
        Pelotas, RS - Brasil
      </address>

      <div className={styles.social}>
        <span>Encontre nossas redes sociais</span>
        <div className={styles.socialIcons}>
          <a href="#" target="_blank" rel="noreferrer"><InstagramLogo size={20} /></a>
          <a href="#" target="_blank" rel="noreferrer"><LinkedinLogo size={20} /></a>
          <a href="#" target="_blank" rel="noreferrer"><GithubLogo size={20} /></a>
          <a href="#" target="_blank" rel="noreferrer"><BehanceLogo size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
