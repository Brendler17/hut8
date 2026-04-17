import { MenuItems, Rectangle} from '../../components/Menu-Items';
import styles from './styles.module.css';
import homestyles from '../Home/styles.module.css'
export function Projects() {
  return (
    <div className={homestyles.page}>
        <div className={homestyles.container}>
        <MenuItems />
         
        <Rectangle
          title="Projetos desenvolvidos aqui!"
          text="Pessoas que confiaram na Hut8 e tiveram sua presença digital renovada"
        />
     
      </div>     
    </div>

  
  );
}