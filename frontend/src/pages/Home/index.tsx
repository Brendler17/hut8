import bannerImage from '../../assets/banner-image.svg';
import separator from '../../assets/separator.svg';
import { Carousel } from '../../components/Carousel';
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
          <div className={styles.about}>
            <h1>
              Trazemos o mercado de trabalho para dentro do meio acadêmico
            </h1>
            <div className={styles.timeline}>
              <div className={styles.leftTimeline}>
                <p>
                  <span>Fundada em maio de 2014</span>, a Hut8 é a empresa
                  júnior dos cursos de Ciência e Engenharia da Computação,
                  vinculada a Universidade Federal de Pelotas.
                </p>
                <p>
                  Por meio do uso de tecnologias modernas para o desenvolvimento
                  de aplicações reais,{' '}
                  <span>
                    oferecemos para nossos clientes produtos de qualidade por um
                    melhor custo benefício.
                  </span>
                </p>
              </div>
              <img src={separator} alt="separador" />
              <div className={styles.rightTimeline}>
                <p>
                  <span>Sem fins lucrativos</span>, somos constituídos por uma
                  equipe de jovens universitários que buscam obter conhecimento
                  e experiência de mercado além das grades curriculares, dentro
                  da área da tecnologia da informação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <Carousel />
      </div>
    </div>
  );
}
