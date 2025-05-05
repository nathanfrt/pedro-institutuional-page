import React, { useEffect } from 'react';
import './Questions.css';

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
            answer: "Os atendimentos presenciais ocorrem na rua Afonso Pena, número 2770. Belo Horizonte. Já os atendimentos on-line podem ser realizados em todo Brasil."
        },
        {
            question: "O Dr. Pedro atende convênio?",
            answer: "Não. O tempo de consulta adequado é essencial na psiquiatria para uma avaliação abrangente e a construção de uma relação terapêutica sólida. Consultas duram entre 45 minutos e 1h30, o que torna inviável a parceria com operadoras de plano de saúde. Muitos pacientes utilizam o sistema de reembolso do próprio plano."
        },
        {
            question: "Qual telefone de contato?",
            answer: "O telefone de contato é o (31) 99505-4490. Este também é o número do WhatsApp, basta clicar aqui para conversar no WhatsApp."
        },
        {
            question: "Como acontecem os atendimentos por telemedicina?",
            answer: "Sim, é possível fazer uma consulta online com Dr. Pedro. A telemedicina está regulamentada no Brasil. Entre em contato para combinarmos o melhor horário (agende sua consulta)."
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
            answer: "Apesar de psicólogos e psiquiatras estudarem e aplicarem conceitos e técnicas em comum, há diferenças fundamentais na formação. Os psicólogos são formados em psicologia, enquanto os psiquiatras são médicos especializados em doenças mentais, podendo prescrever medicamentos para tratamento."
        }
    ];

    const toggleFaq = (e) => {
        const answer = e.currentTarget.nextElementSibling;
        const icon = e.currentTarget.querySelector('.toggle-icon');
        answer.classList.toggle('show');
        icon.classList.toggle('rotate');
    };

    return (
        <div className="container faq">
            <section className="section-faq">
                <div className="faq-introduction">
                    <p className="section-title">Perguntas Frequentes</p>
                </div>

                <div className="faq-cards animate-on-visible ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={toggleFaq}>
                                <span className="toggle-icon">⮟</span>
                                <span>{faq.question}</span>
                            </div>
                            <div className="faq-answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Questions;
