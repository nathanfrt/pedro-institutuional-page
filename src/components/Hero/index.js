import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Hero.module.css";
import Cards from "../../components/cards";
import Title from "../../components/title";

import chat from "../../assets/icons/chat.png";
import world from "../../assets/icons/world.png";
import medicine from "../../assets/icons/medicine.png";

const cards = [
  {
    icon: chat,
    title: "Consulta médica presencial",
    description:
      "Consulta médica com foco na escuta do paciente e tratamento. Duração média de 1 hora",
  },
  {
    icon: world,
    title: "Teleconsulta: Brasil e exterior",
    description:
      "Possibilidade de ser atendido com qualidade via consulta online, sem precisar sair de casa para começar seu atendimento",
  },
  {
    icon: medicine,
    title: "Tratamento e Acompanhamento",
    description:
      "Suporte contínuo para evolução e bem-estar ao longo do tratamento",
  },
];

const title = "Atendimentos em Psiquiatria";
const description = (
  <>
    Cuidar da saúde mental é essencial para viver com mais equilíbrio e
    qualidade de vida. Isso ajuda a enfrentar desafios, fortalecer
    relacionamentos e promover o bem-estar —
    <strong>buscar apoio quando necessário é um ato de coragem.</strong>
  </>
);

function Hero() {
  return (
    <section
      className={`${styles.hero}`}
      id="telemedicina"
    >
      <div className="container">
        <Title title={title} description={description} />
        <div
          className={`d-flex justify-content-between align-items-center mb-5 ${styles.heroCard}`}
        >
          {cards.map((item, index) => (
            <Cards
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              bg={"white"}
              buttonOn={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
