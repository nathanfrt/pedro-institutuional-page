import styles from "./Contact.module.css";
import GoogleMap from './GoogleMap';
import whatsApp from "../../Images/whastapp.png";
import instagram from "../../Images/instagram.png";
import calender from "../../Images/calendar.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedbacks() {
    const contactText = 'https://www.doctoralia.com.br/pedro-henrique-siqueira-2';

    return (
        <div className={`container ${styles.contact}`} id="contato">
            <section className={styles.section}>
                <div className={`d-flex justify-content-between align-items-center mb-5 ${styles.card}`}>
                    <div className={`col-lg-6 col-md-12 ${styles.content}`}>
                        <div className={styles.introduction}>
                            <p>Entre em Contato</p>
                            <p>
                                Indique o melhor horário que gostaria de ser atendido.<br />
                                <strong>Entraremos em contato para confirmar e passar mais orientações</strong>
                            </p>
                        </div>

                        <div className={`${styles.buttonGroup} animate-on-visible `}>
                            <ButtonLink
                                href={contactText}
                                text="Agendar consulta"
                                img={calender}
                            />
                            <ButtonLink
                                href="https://www.instagram.com/siqueirapsiquiatria/"
                                text="siqueirapsiquiatria"
                                img={instagram}
                            />
                            <ButtonLink
                                href={`https://wa.me/5531995054490?text=${encodeURIComponent(contactText)}`}
                                text="(31) 99505-4490"
                                img={whatsApp}
                            />
                        </div>

                        <div className={styles.informations}>
                            <p>
                                Para pacientes de outras cidades ou países, ofereço consultas online com a mesma qualidade e sigilo do atendimento presencial.
                                Atenda-se de qualquer lugar com conforto e segurança.
                                <br /><br /><strong>Se precisar de ajustes ou mais detalhes, me avise!</strong>
                            </p>
                        </div>
                    </div>

                    <div className={`col-lg-6 col-md-12 ${styles.content}`}>
                        <div className={styles.introduction}>
                            <p>Onde estou localizado?</p>
                            <p>Av. Afonso Pena, 2770 - Savassi, Belo Horizonte - MG, 30130-012</p>
                        </div>
                        <GoogleMap />
                    </div>
                </div>
            </section>
        </div>
    );
}

const ButtonLink = ({ href, text, img }) => (
    <button className="btn btn-success">
        <a href={href} className="d-flex align-items-center gap-2">
            {img && <img src={img} alt={text} style={{ height: "25px" }} />}
            <span>{text}</span>
        </a>
    </button>
);

export default Feedbacks;
