import { useEffect, useState } from 'react';
import projectImage1 from '../../assets/projects/project1.svg';
import projectImage2 from '../../assets/projects/project2.svg';
import projectImage3 from '../../assets/projects/project3.svg';
import { getProjects } from '../../services/api';
import { PortfolioButton } from '../PortfolioButton';
import styles from './index.module.css';

interface Project {
  id: number;
  name: string;
  images: (keyof typeof projectImages)[];
  description: string;
  site: string;
}

const projectImages = {
  project1: projectImage1,
  project2: projectImage2,
  project3: projectImage3,
};

export function Carousel() {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  if (projects.length === 0) {
    return <p>Carregando...</p>;
  }

  const currentProject = projects[index];

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>
          Temos a solução e as ferramentas perfeitas para a sua necessidade
        </h1>
        <p>
          A Hut8 conta com uma equipe de universitários prontos para atender
          você. Desde a definição do projeto até o desenvolvimento da sua
          aplicação, estaremos presentes para oferecer a você a melhor
          experiência.
        </p>
        <PortfolioButton />
      </div>
      <div className={styles.image}>
        <img
          src={projectImages[currentProject.images[0]]}
          alt="imagem-do-projeto"
        />
        <h1>{currentProject.name}</h1>
        <p>{currentProject.description}</p>
      </div>
    </div>
  );
}
