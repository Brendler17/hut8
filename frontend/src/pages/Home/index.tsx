import bannerImage from '../../assets/banner-image.svg';
import { MenuItems } from '../../components/Menu-Items';
import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.banner}>
        <div className={styles.container}>
          <MenuItems />
          <div className={styles.bannerContent}>
            <h1>Empresa Júnior da Computação UFPel</h1>
            <div>
              <p>
                Desenvolvemos soluções tecnológicas personalizadas e inovadoras
                por um melhor custo benefício, aproximando jovens universitários
                do mercado de trabalho.
              </p>
              <button type="button">Confira nosso portfólio</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.bannerImage}>
            <img src={bannerImage} alt="imagem-do-banner" />
          </div>
          <h1>Trazemos o mercado de trabalho para dentro do meio acadêmico</h1>
        </div>
      </section>
    </div>
  );
}
