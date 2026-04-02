import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import { heroIntro, serviceCards, SITE } from '../../data/siteContent';

const CARD_MIN_H = 'min-h-[340px] sm:min-h-[360px]';

export default function ServiceHighlightsSection() {
  return (
    <section id="telemedicina" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Atendimentos"
          title={heroIntro.kicker}
          subtitle="Cuidado centrado na pessoa, com tempo e escuta — presencial ou online."
          align="center"
        />
        <p className="max-w-3xl mx-auto text-center text-muted leading-relaxed mb-12 -mt-6">{heroIntro.text}</p>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {serviceCards.map((item) => (
            <article
              key={item.title}
              className={`group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${CARD_MIN_H}`}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted shrink-0">
                <img src={item.icon} alt="" className="h-8 w-8 object-contain" />
              </div>
              <h3 className="font-serif text-lg text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-6">{item.desc}</p>
              <PrimaryLinkButton href={SITE.doctoraliaUrl} className="w-full justify-center !py-3 text-sm mt-auto shrink-0">
                Agendar
              </PrimaryLinkButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
