import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./About.css";
import sobre from "../../Images/Sobre.jpeg";
import calender from "../../Images/calendar.png";

function About() {
  return (
    <div className="container herself" id="sobre-mim">
      <section className={styles.sectionAbout}>
        <div className="d-flex justify-content-between align-items-center mb-5 herself-card flex-wrap">
          
          <div className="order-2 col-lg-5 col-md-12 herself animate-on-visible">
            <div className={styles.content} >
              <img src={sobre} alt="Dr. Pedro Siqueira" className="icon-herself" />
            </div>
          </div>

          <div className="order-1 col-lg-7 col-md-12 herself">
            <div className="herself-introduction animate-on-visible ">
              <p>Sobre mim</p>
              <p className="description">
                Sou médico formado com <strong>Honraria Acadêmica Cum Laude pela Universidade Federal do Rio de Janeiro (UFRJ)</strong> e tive a formação voltada a psiquiatria desde minha base, com passagem pelo <strong>Instituto de Psiquiatria da UFRJ (IPUB)</strong>, um dos mais renomados polos de formação da psiquiatria no Brasil. <br /><br />
                Faço parte da equipe médica de residência de psiquiatria do <strong>Hospital da Polícia Militar de Minas Gerais (HPM-MG)</strong>. Possuo experiências no cuidado médico nas mais diversas esferas, desde a atenção primária à saúde, pronto-atendimentos e instituições hospitalares.<br /><br />
                <strong>Será um prazer te ajudar da melhor forma possível, te ouvindo e buscando, junto a você, o melhor tratamento.</strong>
              </p>
              <br /><br />
              <button className="btn btn-success buttonp animate-on-visible ">
                <a href="https://wa.me/5531995054490?text=Ol%C3%A1,%20Dr.%20Pedro!%20%F0%9F%A7%A0%F0%9F%98%8A%0A%0AEncontrei%20o%20seu%20site%20e%20me%20interessei%20pela%20consulta.%20Gostaria%20de%20saber%20como%20funciona%20o%20atendimento%20e%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis.%0AObrigado(a)!">
                <img src={calender} alt="Ícone calendário" className="calender-img" />
                  Marque sua consulta
                </a>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
