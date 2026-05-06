import { Contato } from '../../components/Contato';
import { MemberCard } from '../../components/MemberCard';
import { MenuItems } from '../../components/Menu-Items';
import { Rectangle } from '../../components/Rectangle';
import { Footer } from '../../components/Footer';
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
            <MemberCard name="Larissa de Freitas" role="área de atuação" instagram="#" linkedin="#" behance="#" />
            <MemberCard name="Tobias Mulling" role="Coordenador Design UFPel" instagram="#" linkedin="#" behance="#" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Diretores</h2>
          <p className={styles.sectionDescription}>
            Planejam e desenvolvem atividades de acordo a respectiva
            área da diretoria. Cargo eletivo em modelo anual.
          </p>
          <div className={styles.cards}>
            <MemberCard name="Samuel Lettnin" role="Diretor Geral de dev" instagram="#" linkedin="#" github="#" />
            <MemberCard name="Augusto Menchaca" role="área de atuação" instagram="#" linkedin="#" github="#" />
            <MemberCard name="Inácio Teixeira" role="área de atuação" instagram="#" linkedin="#" github="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conselheiros</h2>
          <p className={styles.sectionDescription}>
            Auxiliam os diretores no desenvolvimento das tarefas de
            gestão da empresa. Cargo eletivo em modelo semestral.
          </p>
          <div className={styles.cards}>
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.associadosDivider}>
            <span>✦</span>
          </div>
          <h2 className={styles.sectionTitle}>Associados</h2>
          <p className={styles.sectionDescription}>
            Atuam nos projetos técnicos e recebem horas de ensino e extensão.
          </p>
          <div className={styles.cards}>
            <MemberCard name="Amanda Schiller" role="Designer" instagram="#" linkedin="#" behance="#" />
            <MemberCard name="Ruan Rodrigues" role="Designer" instagram="#" linkedin="#" behance="#" />
            <MemberCard name="Amanda Vieira" role="Designer" instagram="#" linkedin="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
            <MemberCard name="Nome e sobrenome" role="área de atuação" instagram="#" linkedin="#" github="#" behance="#" />
          </div>
        </section>

        <Contato />
      </div>

      <Footer />
    </div>
  );
}
