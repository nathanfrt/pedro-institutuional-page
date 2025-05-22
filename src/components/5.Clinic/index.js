import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Clinic.module.css";
import consultorio from "../../Images/consultorio.jpeg";
import calender from "../../Images/calendar.png";

function Clinic() {
  const contactText = 'https://www.doctoralia.com.br/pedro-henrique-siqueira-2';

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
                <a target="_blank" href={contactText}>
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
