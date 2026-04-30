import { Contato } from '../../components/Contato';
import { MemberCard } from '../../components/MemberCard';
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

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professores elo</h2>
          <p className={styles.sectionDescription}>
            Responsáveis pela relação legal da empresa com a faculdade. Realizam
            um acompanhamento a distância do projeto.
          </p>
          <div className={styles.cards}>
            <MemberCard
              name="Larissa de Freitas"
              role="Área de atuação"
              instagram="#"
              linkedin="#"
              behance="#"
            />
            <MemberCard
              name="Tobias Mulling"
              role="Coordenador Design UFPel"
              instagram="#"
              linkedin="#"
              behance="#"
            />
          </div>
        </section>

        <Contato />
      </div>
    </div>
  );
}
