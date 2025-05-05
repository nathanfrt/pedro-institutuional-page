import 'bootstrap/dist/css/bootstrap.min.css';
import chat from "../../Images/chat.png";
import world from "../../Images/worldwide.png";
import medicine from "../../Images/drugs.png";
import "./Hero.css";

function Hero() {
  const cards = [
    {
      icon: chat,
      title: "Consulta médica presencial",
      desc: "Consulta médica com foco na escuta do paciente e tratamento. Duração média de 1 hora"
    },
    {
      icon: world,
      title: "Teleconsulta: Brasil e exterior",
      desc: "Possibilidade de ser atendido com qualidade via consulta online, sem precisar sair de casa para começar seu atendimento"
    },
    {
      icon: medicine,
      title: "Tratamento e Acompanhamento",
      desc: "Suporte contínuo para evolução e bem-estar ao longo do tratamento"
    }
  ];

  return (
    <div className="container hero" id="telemedicina">
      <section className="section-hero">
        <div className="hero-introduction animate-on-visible">
          <p>Atendimentos em Psiquiatria</p>
          <p>
            Cuidar da saúde mental é essencial para viver com mais equilíbrio e qualidade de vida. Isso ajuda a enfrentar desafios,
            fortalecer relacionamentos e promover o bem-estar — <strong>buscar apoio quando necessário é um ato de coragem.</strong>
          </p>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-5 hero-card">
          {cards.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-12 card d-flex flex-column animate-on-visible">
              <div className="content">
                <img src={item.icon} alt={item.title} className="icon-card" />
                <p className="title">{item.title}</p>
                <p className="description">{item.desc}</p>
              </div>
              <button className="btn btn-success buttonp animate-on-visible ">
                <a href="https://wa.me/5531995054490?text=Ol%C3%A1,%20Dr.%20Pedro!%20%F0%9F%A7%A0%F0%9F%98%8A%0A%0AEncontrei%20o%20seu%20site%20e%20me%20interessei%20pela%20consulta.%20Gostaria%20de%20saber%20como%20funciona%20o%20atendimento%20e%20quais%20s%C3%A3o%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis.%0AObrigado(a)!">
                  Agendar
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
