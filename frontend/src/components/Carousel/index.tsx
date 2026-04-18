import { useEffect, useState } from 'react';
import projectImage1 from '../../assets/projects/project1.svg';
import projectImage2 from '../../assets/projects/project2.svg';
import projectImage3 from '../../assets/projects/project3.svg';
import styles from './index.module.css';
import { PortfolioButton } from '../PortfolioButton';

interface Project {
  name: string;
  description: string;
  imageSource: string;
}

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

export function Carousel() {
  const [index, setIndex] = useState(0);
  const currentProject = projects[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
        <img src={currentProject.imageSource} alt="imagem-do-projeto" />
        <h1>{currentProject.name}</h1>
        <p>{currentProject.description}</p>
      </div>
    </div>
  );
}
