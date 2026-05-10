import { useEffect, useState } from 'react';
import vectorUrl from '../../assets/vector.svg';
import { Contato } from '../../components/Contato';
import { Footer } from '../../components/Footer';
import { MemberCard } from '../../components/MemberCard';
import { MenuItems } from '../../components/Menu-Items';
import { Rectangle } from '../../components/Rectangle';
import { getTeam } from '../../services/api';
import styles from './styles.module.css';

interface Member {
  id: number;
  name: string;
  role: 'teachers' | 'directors' | 'counselors' | 'associated';
  areaOfActivity: string;
  social: {
    instagram: string;
    linkedin: string;
    github?: string;
    behance?: string;
  };
}

export function NossaEquipe() {
  const [team, setTeam] = useState<Member[]>([]);

  useEffect(() => {
    getTeam().then(setTeam).catch(console.error);
  }, []);

  const teachers = team.filter(m => m.role === 'teachers');
  const directors = team.filter(m => m.role === 'directors');
  const counselors = team.filter(m => m.role === 'counselors');
  const associated = team.filter(m => m.role === 'associated');

  return (
    <div className={styles.page}>
      <img
        src={vectorUrl}
        className={styles.vectorLeft}
        alt=""
        aria-hidden="true"
      />
      <img
        src={vectorUrl}
        className={styles.vectorRight}
        alt=""
        aria-hidden="true"
      />

      <div className={styles.container}>
        <MenuItems />
        <Rectangle
          title="Conheça nossa equipe"
          text="Nosso time de jovens universitários apaixonados por tecnologia, empreendedorismo e inovação."
        />

        {teachers.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professores elo</h2>
            <p className={styles.sectionDescription}>
              Responsáveis pela relação legal da empresa com a faculdade.
              Realizam um acompanhamento a distância do projeto.
            </p>
            <div className={styles.cards}>
              {teachers.map(m => (
                <MemberCard
                  key={m.id}
                  name={m.name}
                  role={m.areaOfActivity}
                  instagram={m.social.instagram}
                  linkedin={m.social.linkedin}
                  behance={m.social.behance}
                />
              ))}
            </div>
          </section>
        )}

        {directors.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Diretores</h2>
            <p className={styles.sectionDescription}>
              Planejam e desenvolvem atividades de acordo a respectiva área da
              diretoria. Cargo eletivo em modelo anual.
            </p>
            <div className={styles.cards}>
              {directors.map(m => (
                <MemberCard
                  key={m.id}
                  name={m.name}
                  role={m.areaOfActivity}
                  instagram={m.social.instagram}
                  linkedin={m.social.linkedin}
                  github={m.social.github}
                />
              ))}
            </div>
          </section>
        )}

        {counselors.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Conselheiros</h2>
            <p className={styles.sectionDescription}>
              Auxiliam os diretores no desenvolvimento das tarefas de gestão da
              empresa. Cargo eletivo em modelo semestral.
            </p>
            <div className={styles.cards}>
              {counselors.map(m => (
                <MemberCard
                  key={m.id}
                  name={m.name}
                  role={m.areaOfActivity}
                  instagram={m.social.instagram}
                  linkedin={m.social.linkedin}
                  github={m.social.github}
                />
              ))}
            </div>
          </section>
        )}

        {associated.length > 0 && (
          <section className={styles.section}>
            <div className={styles.associadosDivider}>
              <span>✦</span>
            </div>
            <h2 className={styles.sectionTitle}>Associados</h2>
            <p className={styles.sectionDescription}>
              Atuam nos projetos técnicos e recebem horas de ensino e extensão.
            </p>
            <div className={styles.cards}>
              {associated.map(m => (
                <MemberCard
                  key={m.id}
                  name={m.name}
                  role={m.areaOfActivity}
                  instagram={m.social.instagram}
                  linkedin={m.social.linkedin}
                  github={m.social.github}
                  behance={m.social.behance}
                />
              ))}
            </div>
          </section>
        )}

        <Contato />
      </div>

      <Footer />
    </div>
  );
}
