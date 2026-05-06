import { MenuItems } from '../../components/Menu-Items';
import { Rectangle } from '../../components/Rectangle';
import { CarouselProjects } from '../../components/CarouselProjects';
import { Contato } from '../../components/Contato'
import homestyles from '../Home/styles.module.css';
import styles from './styles.module.css';
import projectImage1 from '../../assets/projects/project1.svg';
import projectImage2 from '../../assets/projects/project2.svg';
import projectImage3 from '../../assets/projects/project3.svg';

export function Projects() {
  const defaultImages = [projectImage1, projectImage2, projectImage3];

  return (
    <div className={homestyles.page}>
      <div className={homestyles.container}>
        <MenuItems />

        <Rectangle
          title="Projetos desenvolvidos aqui!"
          text="Pessoas que confiaram na Hut8 e tiveram sua presença digital renovada"
        />

       <CarouselProjects 
         title="Imobiliária Toni Neutzling" 
         text=" <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod diam eget mi sagittis cursus. Praesent ullamcorper vitae est sed porttitor. Aliquam non ullamcorper purus. Etiam finibus felis eget pretium rhoncus. Nunc nec ornare nisi. Donec vitae vehicula felis. Sed non sem quis nisl lacinia malesuada eu at ipsum. Praesent id lacus pellentesque, auctor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod diam eget mi sagittis cursus. Praesent ullamcorper vitae est sed porttitor. Aliquam non ullamcorper purus. Etiam finibus felis eget pretium rhoncus. Nunc nec ornare nisi." 
         link="#"
         link1="#"
         link2="#"
         link3="#"
         images={defaultImages}
       />
      <CarouselProjects 
         title="Imobiliária Toni Neutzling" 
         text=" <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod diam eget mi sagittis cursus. Praesent ullamcorper vitae est sed porttitor. Aliquam non ullamcorper purus. Etiam finibus felis eget pretium rhoncus. Nunc nec ornare nisi. Donec vitae vehicula felis. Sed non sem quis nisl lacinia malesuada eu at ipsum. Praesent id lacus pellentesque, auctor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod diam eget mi sagittis cursus. Praesent ullamcorper vitae est sed porttitor. Aliquam non ullamcorper purus. Etiam finibus felis eget pretium rhoncus. Nunc nec ornare nisi." 
         link="#"
         link1="#"
         link2="#"
         link3="#"
         images={defaultImages}
       />

       <CarouselProjects 
         title="Imobiliária Toni Neutzling" 
         text=" <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod diam eget mi sagittis cursus. Praesent ullamcorper vitae est sed porttitor. Aliquam non ullamcorper purus. Etiam finibus felis eget pretium rhoncus. Nunc nec ornare nisi. Donec vitae vehicula felis. Sed non sem quis nisl lacinia malesuada eu at ipsum. Praesent id lacus pellentesque, auctor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod diam eget mi sagittis cursus. Praesent ullamcorper vitae est sed porttitor. Aliquam non ullamcorper purus. Etiam finibus felis eget pretium rhoncus. Nunc nec ornare nisi." 
         link="#"
         link1="#"
         link2="#"
         link3="#"
         images={defaultImages}
       />

       <Contato/>
      </div>


    </div>
    
  );
}
