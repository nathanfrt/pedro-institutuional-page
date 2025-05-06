import React, { useState } from 'react';
import styles from "./Approaches.module.css";
import dependencias from "../../Images/dependência.png";
import bipolar from "../../Images/bipolar.png";
import depressao from "../../Images/depressão.png";
import ansiedade from "../../Images/ansiedade.png";
import toc from "../../Images/toc.png";
import tdah from "../../Images/tdah.png";
import audicao from "../../Images/audicao.png";
import insonia from "../../Images/insonia.png";
import fobias from "../../Images/fobia.png";
import trauma from "../../Images/tept.png";
import humor from "../../Images/mudancas-de-humor.png";
import alimentar from "../../Images/transtorno-alimentar.png";
import frustado from "../../Images/frustrado.png";
import calender from "../../Images/calendar.png";

import 'bootstrap/dist/css/bootstrap.min.css';

function Topics() {
  const contactText = "Olá, Dr. Pedro!\n\nEncontrei seu site e me interessei pela consulta. Gostaria de saber como funciona o atendimento e quais são as opções disponíveis.\n\nObrigado(a)!";
  const [showModal, setShowModal] = useState(false);

  const cards = [
    {
      img: dependencias,
      title: "Dependência de Substâncias",
      desc: "Uso compulsivo de substâncias (álcool, drogas, medicamentos) que causa prejuízos físicos, psicológicos e sociais, além de sintomas de abstinência quando interrompido."
    },
    {
      img: bipolar,
      title: "Transtorno Bipolar",
      desc: "Transtorno caracterizado por oscilações extremas de humor, indo de episódios depressivos a episódios de euforia"
    },
    {
      img: depressao,
      title: "Depressão",
      desc: "Transtorno caracterizado por tristeza persistente, perda de interesse em atividades, fadiga, alterações no sono e apetite, além de pensamentos negativos"
    },
    {
      img: ansiedade,
      title: "Ansiedade",
      desc: "Transtorno caracterizado por preocupação excessiva, tensão constante e sintomas físicos como palpitações e sudorese"
    },
    {
      img: toc,
      title: "TOC (Transtorno Obsessivo-Compulsivo)",
      desc: "Comportamentos compulsivos e pensamentos obsessivos que interferem na vida diária"
    },
    {
      img: tdah,
      title: "TDAH (Déficit de Atenção e Hiperatividade)",
      desc: "Desatenção, impulsividade e hiperatividade persistentes desde a infância"
    }
  ];

  const modalCards = [
    {
      img: humor,
      title: "Transtornos de Humor",
      items: ["Depressão", "Transtorno afetivo bipolar"]
    },
    {
      img: audicao,
      title: "Transtornos Psicóticos",
      items: ["Esquizofrenia", "Transtornos Psicóticos"]
    },
    {
      img: alimentar,
      title: "Transtornos Alimentares",
      items: ["Anorexia e Bulimia", "Compulsão Alimentar"]
    },
    {
      img: insonia,
      title: "Transtornos do Sono",
      items: ["Insônia"]
    },
    {
      img: frustado,
      title: "Estresse Ocupacional",
      items: ["Síndrome de Burnout"]
    },
    {
      img: ansiedade,
      title: "Transtornos de Ansiedade",
      items: ["Ansiedade", "TAG (Ansiedade Generalizada)"]
    },
    {
      img: fobias,
      title: "Transtornos Fóbicos",
      items: ["Fobias", "Síndrome do Pânico"]
    },
    {
      img: trauma,
      title: "Transtornos Relacionados ao Trauma",
      items: ["Transtorno de Estresse Pós-traumático (TEPT)", "Trauma e Estresse"]
    }
  ];

  return (
    <div className={`container ${styles.approaches}`} id="saude-mental">
      <section className={`${styles.section}`}>
        <div className={`${styles.introduction}`}>
          <p className={`${styles.title}`}>Temas que atendo</p>
        </div>

        <div className={`d-flex justify-content-between align-items-start mb-5 flex-wrap ${styles.card}`}>
          {cards.map((card, index) => (
            <div key={index} className={`col-lg-4 col-md-12 ${styles.theme} animate-on-visible`}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <img src={card.img} alt={card.title} className={styles.iconCard} />
                  <p className={styles.title}>{card.title}</p>
                </div>
                <p className={styles.description}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <button className={`${styles.buttont} btn btn-success mb-3}`} onClick={() => setShowModal(true)}>
            Veja todos os tratamentos aqui
          </button>
          <br />
          <button className="btn btn-success">
            <a target="_blank" href={`https://wa.me/5531995054490?text=${encodeURIComponent(contactText)}`} className="text-white text-decoration-none">
            <img src={calender} alt="Ícone calendário" className="calenderImg" />
              Marque sua consulta
            </a>
          </button>
        </div>
      </section>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
            <p>Todos os Tratamentos</p>
            
            <div className={`d-flex justify-content-between align-items-center mb-5 flex-wrap ${styles.modalCards}`}>
              {modalCards.map((item, idx) => (
                <div key={idx} className={`col-lg-3 col-md-6 ${styles.modalCategory}`}>
                  <div className={styles.content}>
                    <div className={styles.icon}>
                      <img src={item.img} alt={item.title} className={styles.iconCard} />
                      <p className={styles.title}>{item.title}</p>
                    </div>
                    <ul className={styles.description}>
                      {item.items.map((el, i) => <li key={i}>{el}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topics;
