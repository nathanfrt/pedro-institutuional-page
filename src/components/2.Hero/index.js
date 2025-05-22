import React, { useState } from "react";
import styles from "./Hero.module.css";
import chat from "../../Images/chat.png";
import world from "../../Images/worldwide.png";
import medicine from "../../Images/drugs.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  const contactText = 'https://www.doctoralia.com.br/pedro-henrique-siqueira-2';
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
    <div className={`container ${styles.hero}`} id="telemedicina">
      <section className={styles.sectionHero}>
      <div className={styles.introduction}>
          <p>Atendimentos em Psiquiatria</p>
          <p>
            Cuidar da saúde mental é essencial para viver com mais equilíbrio e qualidade de vida. Isso ajuda a enfrentar desafios,
            fortalecer relacionamentos e promover o bem-estar — <strong>buscar apoio quando necessário é um ato de coragem.</strong>
          </p>
        </div>

        <div className={`d-flex justify-content-between align-items-center mb-5 ${styles.heroCard}`}>
          {cards.map((item, index) => (
            <div key={index} className={`col-lg-4 col-md-12 animate-on-visible ${styles.card}`}>            
              <div className={`${styles.content}`}>
              <img src={item.icon} alt={item.title} className={styles.iconCard} />
                <p className={`${styles.title}`}>{item.title}</p>
                <p className={`${styles.description}`}>{item.desc}</p>
              </div>
              <button className={`btn btn-success`}>
                <a target="_blank" href={contactText}>
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
