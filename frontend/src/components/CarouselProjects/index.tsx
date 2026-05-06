import { useState } from 'react';
import passarIcon from '../../assets/passar.svg';
import voltarIcon from '../../assets/voltar.svg';
import styles from './index.module.css';

interface CarouselProjectsProps {
  title: string;
  text: string;
  link: string;
  link1?: string;
  link2?: string;
  link3?: string;
  images: string[];
}

export function CarouselProjects({
  title,
  text,
  link,
  link1,
  link2,
  link3,
  images,
}: CarouselProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <button className={styles.carouselButton} onClick={prevImage}>
          <img src={voltarIcon} alt="Voltar para a imagem anterior" />
        </button>

        <div className={styles.image}>
          <img src={images[currentIndex]} alt="imagem-do-projeto" />
        </div>

        <button className={styles.carouselButton} onClick={nextImage}>
          <img src={passarIcon} alt="Passar para a próxima imagem" />
        </button>
      </div>

      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.buttonContainer}>
          <a
            href={link1}
            target="_blank"
            rel="noreferrer"
            className={styles.buttonTop}
          >
            Site
          </a>
          <a
            href={link2}
            target="_blank"
            rel="noreferrer"
            className={styles.buttonTop}
          >
            Filtros
          </a>
          <a
            href={link3}
            target="_blank"
            rel="noreferrer"
            className={styles.buttonTop}
          >
            Especificação 3
          </a>
        </div>

        <p dangerouslySetInnerHTML={{ __html: text }} />

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.linkButton}
        >
          confira no link
        </a>
      </div>
    </div>
  );
}
