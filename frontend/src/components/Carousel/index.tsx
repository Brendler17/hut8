import { useEffect, useState } from 'react';
import projectImage1 from '../../assets/projects/project1.svg';
import projectImage2 from '../../assets/projects/project2.svg';
import projectImage3 from '../../assets/projects/project3.svg';
import { PortfolioButton } from '../PortfolioButton';
import styles from './index.module.css';
import { getProjects } from '../../services/api';

interface Project {
  id: number;
  name: string;
  image: keyof typeof projectImages;
  description: string;
  site: string;
}

/*
const projects: Project[] = [
  {
    name: 'Imobiliária Toni Neutzling',
    description:
      'Visualização e filtros para imóveis disponíveis para venda, locação ou temporada.',
    imageSource: projectImage1,
  },
  {
    name: 'Pastejando',
    description:
      'App desenvolvido em parceria com a Embrapa que realiza cálculos em relação a plantações, hectares e cuidado dos animais',
    imageSource: projectImage2,
  },
  {
    name: 'Plante Saúde',
    description:
      'Desenvolvido com o objetivo de auxiliar a identificação de plantas medicinais, para o tratamento de sintomas clínicos.',
    imageSource: projectImage3,
  },
];
*/

const projectImages = {
  project1: projectImage1,
  project2: projectImage2,
  project3: projectImage3,
}

export function Carousel() {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  useEffect(() => {
    if(projects.length === 0) return;

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
        <img src={projectImages[currentProject.image]} alt="imagem-do-projeto" />
        <h1>{currentProject.name}</h1>
        <p>{currentProject.description}</p>
      </div>
    </div>
  );
}

