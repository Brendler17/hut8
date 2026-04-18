import { MenuItems } from '../../components/Menu-Items';
import { Rectangle } from '../../components/Rectangle';
import styles from './styles.module.css';

export function NossaEquipe() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <MenuItems />
        <Rectangle
          title="Conheça nossa equipe"
          text="Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação."
        />
      </div>
    </div>
  );
}