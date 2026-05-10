import { useEffect, useState } from 'react';
import projectImage1 from '../../assets/projects/project1.svg';
import projectImage2 from '../../assets/projects/project2.svg';
import projectImage3 from '../../assets/projects/project3.svg';
import { CarouselProjects } from '../../components/CarouselProjects';
import { Contato } from '../../components/Contato';
import { Footer } from '../../components/Footer';
import { MenuItems } from '../../components/Menu-Items';
import { Rectangle } from '../../components/Rectangle';
import { getProjects } from '../../services/api';
import homestyles from '../Home/styles.module.css';
import styles from './styles.module.css';

const projectImages = {
  project1: projectImage1,
  project2: projectImage2,
  project3: projectImage3,
};

interface Project {
  id: number;
  name: string;
  description: string;
  images: (keyof typeof projectImages)[];
  link?: string;
  link1?: string;
  link2?: string;
  link3?: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  return (
    <div className={homestyles.page}>
      <div className={homestyles.container}>
        <MenuItems />

        <Rectangle
          title="Projetos desenvolvidos aqui!"
          text="Pessoas que confiaram na Hut8 e tiveram sua presença digital renovada"
        />

        {projects.map(project => (
          <CarouselProjects
            key={project.id}
            title={project.name}
            text={project.description}
            link={project.link || '#'}
            link1={project.link1}
            link2={project.link2}
            link3={project.link3}
            images={project.images.map(img => projectImages[img])}
          />
        ))}

        <Contato />
      </div>

      <Footer />
    </div>
  );
}
