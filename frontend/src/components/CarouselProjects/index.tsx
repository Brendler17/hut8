import { useState } from 'react';
import projectImage1 from '../../assets/projects/project1.svg';
import projectImage2 from '../../assets/projects/project2.svg';
import projectImage3 from '../../assets/projects/project3.svg';
import styles from './index.module.css';

interface CarouselProjectsProps {
  title: string;
  text: string;
}

export function CarouselProjects({ title, text }: CarouselProjectsProps) {

  const projects = [
    { image: projectImage1 },
    { image: projectImage2 },
    { image: projectImage3 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }

  function prevImage() {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  }

 return (
  <div className={styles.container}>

    <div className={styles.image}>
      <img
        src={projects[currentIndex].image}
        alt="imagem-do-projeto"
      />
    </div>

    <div className={styles.content}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }} />

      <button onClick={prevImage}>Anterior</button>
      <button onClick={nextImage}>Próxima</button>
    </div>

  </div>
);
}
