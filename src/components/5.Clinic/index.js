import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Clinic.module.css";
import consultorio from "../../Images/consultorio.jpeg";
import calender from "../../Images/calendar.png";

function Clinic() {
  return (
    <div className={`container ${styles.clinic}`} id="consultorio">
      <section className={styles.sectionClinic}>
        <div className={`d-flex justify-content-between align-items-start mb-5 flex-wrap ${styles.cards}`}>

          <div className={`col-lg-7 col-md-12 animate-on-visible ${styles.card}`}>
            <div className={`title animate-on-visible`}>
              <p>Como será nosso atendimento?</p>
              <p className={`description`}>
                Nosso foco é a <strong>escuta do paciente</strong> para, com base em seu contexto e vivências, entender melhor sua realidade e construirmos juntos um caminho terapêutico. <br /><br />
                Cada consulta tem, em média, <strong>1 hora de duração, proporcionando um atendimento de qualidade</strong> com uma abordagem centrada no paciente. <br /><br />
                <strong>Oferecemos suporte contínuo por meio do WhatsApp e E-mail.</strong> <br /><br />
                Criamos um ambiente seguro e acolhedor, onde cada paciente é ouvido, compreendido e valorizado. Cuidamos de cada detalhe para garantir uma experiência positiva e confortável, pois acreditamos que um espaço aconchegante faz toda a diferença!
              </p><br/>
              <button className="btn btn-success animate-on-visible">
                <a href="https://wa.me/5531995054490?text=Ol%C3%A1,%20Dr.%20Pedro!%20%F0%9F%A7%A0%F0%9F%98%8A%0A%0AEncontrei%20o%20seu%20site%20e%20me%20interessei%20pela%20consulta.%20Gostaria%20de%20saber%20como%20funciona%20o%20atendimento%20e%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis.%0AObrigado(a)!">
                  <img src={calender} alt="Ícone calendário" className="calenderImg" />
                  Agende sua consulta
                </a>
              </button>
            </div>
          </div>

          <div className={`col-lg-5 col-md-12 animate-on-visible ${styles.card}`}>
            <div className={styles.content}>
              <img src={consultorio} alt="Dr. Pedro Siqueira" className={styles.iconService} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Clinic;
