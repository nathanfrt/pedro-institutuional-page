import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
  {
    q: 'Como sei se devo procurar um atendimento de psiquiatria?',
    a: 'O médico que atua na psiquiatria é especializado no diagnóstico, tratamento e prevenção de transtornos mentais, podendo prescrever medicamentos quando necessário. Quando surgem indícios de sofrimento mental que comprometa o seu bem-estar, você deve procurar um profissional.',
  },
  {
    q: 'Onde o Dr. Pedro atende?',
    a: 'Os atendimentos presenciais ocorrem na Rua Montes Claros, 1201 - Carmo, Belo Horizonte - MG, 30310-702. Já os atendimentos on-line podem ser realizados em todo Brasil.',
  },
  {
    q: 'O Dr. Pedro atende convênio?',
    a: 'Não. O tempo de consulta adequado é essencial na psiquiatria para uma avaliação abrangente e a construção de uma relação terapêutica sólida. Consultas duram entre 45 minutos e 1h30, o que torna inviável a parceria com operadoras de plano de saúde. Muitos pacientes utilizam o sistema de reembolso do próprio plano.',
  },
  {
    q: 'Qual telefone de contato?',
    a: (
      <>
        O telefone de contato é o (31) 99505-4490. Este também é o número do WhatsApp, basta{' '}
        <a
          href="https://wa.me/31995054490"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-2"
        >
          clicar aqui para conversar no WhatsApp
        </a>
        .
      </>
    ),
  },
  {
    q: 'Há a possibilidade de realizar a consulta por meio da telemedicina?',
    a: 'Sim. O atendimento online é uma alternativa prática e segura, permitindo a continuidade do tratamento com a mesma qualidade do atendimento presencial, além de oferecer maior comodidade para o paciente.',
  },
  {
    q: 'Como acontecem os atendimentos por telemedicina?',
    a: (
      <>
        Os atendimentos por telemedicina funcionam de forma similar às consultas presenciais, mas ocorrem por meio de plataformas digitais seguras, como videoconferência.
        <br />
        <br />
        <strong>1. Agendamento da consulta</strong>
        <br />
        O paciente entra em contato com o consultório (por telefone, site ou WhatsApp) e agenda o atendimento para um dia e horário específicos.
        <br />
        <br />
        <strong>2. Plataforma de atendimento</strong>
        <br />
        No momento marcado, o paciente recebe um link de acesso para uma sala virtual (geralmente via Google Meet, Zoom ou outra plataforma segura e de fácil uso).
        <br />
        <br />
        <strong>3. Consulta médica</strong>
        <br />
        O profissional conduz a consulta normalmente: escuta o paciente, faz perguntas, discute sintomas, fornece orientações e, se necessário, prescreve medicações.
        <br />
        <br />
        <strong>4. Prescrição eletrônica</strong>
        <br />
        Receitas médicas, atestados e encaminhamentos são enviados digitalmente, com assinatura eletrônica válida conforme a regulamentação brasileira (ex: via e-mail ou plataformas como Memed).
        <br />
        <br />
        <strong>5. Privacidade e segurança</strong>
        <br />
        Todo o processo segue normas de sigilo e segurança de dados, conforme previsto pela Lei Geral de Proteção de Dados (LGPD) e regulamentações do CFM.
      </>
    ),
  },
  {
    q: 'Não quero ficar dependente de medicamentos',
    a: 'O Dr. Pedro sempre baseia a escolha da medicação em evidências científicas e monitora de perto a evolução do tratamento. O objetivo é proporcionar um tratamento eficaz para o seu sofrimento mental.',
  },
  {
    q: 'Não posso ir ao consultório regularmente',
    a: 'O Dr. Pedro oferece consultas online, o que torna o tratamento mais prático e conveniente.',
  },
  {
    q: 'Qual é a diferença do psicólogo e do psiquiatra?',
    a: (
      <>
        Apesar de psicólogos e psiquiatras estudarem e aplicarem conceitos e técnicas em comum, há diferenças fundamentais na formação e na atuação destes dois profissionais.{' '}
        <br />
        <br />
        Os psicólogos são formados em psicologia, que é a ciência que estuda a mente e o comportamento. Já os psiquiatras são médicos especializados nas doenças da mente.
        Eles são formados em medicina, como todo e qualquer médico de qualquer especialidade e, após o curso médico básico de seis anos, realizaram mais três anos de residência
        médica em psiquiatria para se tornarem especialistas. Aos psiquiatras cabe o <strong>diagnóstico, prevenção e tratamento </strong>
        direto das doenças mentais. <br />
        <br />
        O tratamento com um psiquiatra é essencial para o diagnóstico e manejo de transtornos mentais, como depressão, ansiedade e bipolaridade.
        Ele pode prescrever medicamentos e ajustar o tratamento conforme a necessidade, ajudando a reduzir o sofrimento e melhorar a qualidade de vida.
        O acompanhamento psiquiátrico, muitas vezes aliado à psicoterapia, promove o equilíbrio emocional e o bem-estar a longo prazo.
      </>
    ),
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-sand border-t border-line/80">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" align="center" />
        <div className="max-w-3xl mx-auto mt-4 divide-y divide-line rounded-2xl border border-line bg-white overflow-hidden">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-start gap-3 text-left px-5 py-4 sm:px-6 sm:py-5 hover:bg-primary/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                  <span className="text-sm sm:text-base font-semibold text-ink">{item.q}</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pl-[3.25rem] text-sm text-muted leading-relaxed">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
