import React, { useEffect } from 'react';
import styles from './Faq.module.css';

import opened from "../../Images/opened.png";
import closed from "../../Images/closed.png";

function Questions() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/faq.js';
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const faqs = [
        {
            question: "Como sei se devo procurar um atendimento de psiquiatria?",
            answer: "O médico que atua na psiquiatria é especializado no diagnóstico, tratamento e prevenção de transtornos mentais, podendo prescrever medicamentos quando necessário. Quando surgem indícios de sofrimento mental que comprometa o seu bem-estar, você deve procurar um profissional."
        },
        {
            question: "Onde o Dr. Pedro atende?",
            answer: "Os atendimentos presenciais ocorrem na Rua Montes Claros, 1201 - Carmo, Belo Horizonte - MG, 30310-702. Já os atendimentos on-line podem ser realizados em todo Brasil."
        },
        {
            question: "O Dr. Pedro atende convênio?",
            answer: "Não. O tempo de consulta adequado é essencial na psiquiatria para uma avaliação abrangente e a construção de uma relação terapêutica sólida. Consultas duram entre 45 minutos e 1h30, o que torna inviável a parceria com operadoras de plano de saúde. Muitos pacientes utilizam o sistema de reembolso do próprio plano."
        },
        {
            question: "Qual telefone de contato?",
            answer: (
                <>
                    O telefone de contato é o (31) 99505-4490. Este também é o número do WhatsApp, basta{" "}
                    <a
                        href="https://wa.me/31995054490"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", textDecoration: "underline" }}
                    >
                        clicar aqui para conversar no WhatsApp
                    </a>.
                </>
            )
        },
        {
            question: "Há a possibilidade de realizar a consulta por meio da telemedicina?",
            answer: "Sim. O atendimento online é uma alternativa prática e segura, permitindo a continuidade do tratamento com a mesma qualidade do atendimento presencial, além de oferecer maior comodidade para o paciente."
        },
        {
            question: "Como acontecem os atendimentos por telemedicina?",
            answer: (<>
                Os atendimentos por telemedicina funcionam de forma similar às consultas presenciais, mas ocorrem por meio de plataformas digitais seguras, como videoconferência.
                
                    <br/><br/><p><strong>1. Agendamento da consulta</strong></p>
                    O paciente entra em contato com o consultório (por telefone, site ou WhatsApp) e agenda o atendimento para um dia e horário específicos.
                    <br/><br/><p><strong>2. Plataforma de atendimento</strong></p>
                    No momento marcado, o paciente recebe um link de acesso para uma sala virtual (geralmente via Google Meet, Zoom ou outra plataforma segura e de fácil uso).
                    <br/><br/><p><strong>3. Consulta médica</strong></p>
                    O profissional conduz a consulta normalmente: escuta o paciente, faz perguntas, discute sintomas, fornece orientações e, se necessário, prescreve medicações.
                    <br/><br/><p><strong>4. Prescrição eletrônica</strong></p>
                    Receitas médicas, atestados e encaminhamentos são enviados digitalmente, com assinatura eletrônica válida conforme a regulamentação brasileira (ex: via e-mail ou plataformas como Memed).
                    <br/><br/><p><strong>5. Privacidade e segurança</strong></p>
                    Todo o processo segue normas de sigilo e segurança de dados, conforme previsto pela Lei Geral de Proteção de Dados (LGPD) e regulamentações do CFM.
            </>)            
        },
        {
            question: "Não quero ficar dependente de medicamentos",
            answer: "O Dr. Pedro sempre baseia a escolha da medicação em evidências científicas e monitora de perto a evolução do tratamento. O objetivo é proporcionar um tratamento eficaz para o seu sofrimento mental."
        },
        {
            question: "Não posso ir ao consultório regularmente",
            answer: "O Dr. Pedro oferece consultas online, o que torna o tratamento mais prático e conveniente."
        },
        {
            question: "Qual é a diferença do psicólogo e do psiquiatra?",
            answer: (<>
                Apesar de psicólogos e psiquiatras estudarem e aplicarem conceitos e técnicas em comum, há diferenças fundamentais na formação e na atuação destes dois profissionais. <br /><br />
                Os psicólogos são formados em psicologia, que é a ciência que estuda a mente e o comportamento. Já os psiquiatras são médicos especializados nas doenças da mente.
                Eles são formados em medicina, como todo e qualquer médico de qualquer especialidade e, após o curso médico básico de seis anos, realizaram mais três anos de residência
                médica em psiquiatria para se tornarem especialistas. Aos psiquiatras cabe o <strong>diagnóstico, prevenção e tratamento </strong>direto das doenças mentais. <br /><br />
                O tratamento com um psiquiatra é essencial para o diagnóstico e manejo de transtornos mentais, como depressão, ansiedade e bipolaridade.
                Ele pode prescrever medicamentos e ajustar o tratamento conforme a necessidade, ajudando a reduzir o sofrimento e melhorar a qualidade de vida.
                O acompanhamento psiquiátrico, muitas vezes aliado à psicoterapia, promove o equilíbrio emocional e o bem-estar a longo prazo.
            </>

            )
        }
    ];

    const toggleFaq = (e) => {
        const answer = e.currentTarget.nextElementSibling;
        const icon = e.currentTarget.querySelector('.toggle-icon');
        answer.classList.toggle('show');
        icon.classList.toggle('rotate');
    };

    return (
        <div className={`container ${styles.faq}`}>
            <section className={styles.card}>
                <div className={styles.introduction}>
                    <p className="title">Perguntas Frequentes</p>
                </div>

                <div className={`${styles.cards} animate-on-visible`}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="item">
                            <div className="question" onClick={toggleFaq}>
                                <span className="toggle-icon"><img src={opened}/></span>
                                <span>{faq.question}</span>
                            </div>
                            <div className="answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Questions;
