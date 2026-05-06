import styles from './index.module.css';
import { InstagramLogo, GithubLogo, LinkedinLogo, BehanceLogo } from '@phosphor-icons/react';

interface MemberCardProps {
  name: string;
  role: string;
  photo?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  behance?: string;
}

export function MemberCard({ name, role, photo, instagram, github, linkedin, behance }: MemberCardProps) {
  return (
    <div className={styles.card}>
      {photo ? (
        <img src={photo} alt={name} className={styles.photo} />
      ) : (
        <div className={styles.photoPlaceholder} />
      )}
      <div className={styles.info}>
        <strong className={styles.name}>{name}</strong>
        <span className={styles.role}>{role}</span>
        <div className={styles.socials}>
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <InstagramLogo size={16} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <GithubLogo size={16} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <LinkedinLogo size={16} />
            </a>
          )}
          {behance && (
            <a href={behance} target="_blank" rel="noreferrer">
              <BehanceLogo size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}