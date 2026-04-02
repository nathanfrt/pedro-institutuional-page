import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import { GraduationCap, HeartPulse, Microscope } from 'lucide-react';
import { about, IMAGES, SITE } from '../../data/siteContent';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formação sólida',
    text: 'UFRJ · IPUB · HPM-MG',
  },
  {
    icon: HeartPulse,
    title: 'Atendimento humanizado',
    text: 'Escuta ativa e plano individualizado',
  },
  {
    icon: Microscope,
    title: 'Prática baseada em evidências',
    text: 'Conduta alinhada à literatura e ao contexto clínico',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-mim" className="py-16 md:py-24 bg-white border-t border-line/80">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Mobile: texto primeiro; desktop: segunda coluna (direita) */}
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Sobre o médico" title={about.title} />
            <div className="text-sm sm:text-base text-muted leading-relaxed space-y-4">{about.body}</div>

            <ul className="mt-10 space-y-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <li key={h.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-muted">
                      <Icon className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{h.title}</p>
                      <p className="text-xs text-subtle mt-0.5">{h.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <PrimaryLinkButton href={SITE.doctoraliaUrl}>Marque sua consulta</PrimaryLinkButton>
            </div>
          </div>

          {/* Mobile: imagem depois; desktop: primeira coluna (esquerda) */}
          <div className="order-2 lg:order-1 relative animate-in-view">
            <div className="overflow-hidden rounded-[2rem] ring-1 ring-black/5 shadow-soft bg-gradient-to-br from-primary-muted to-white min-h-[240px]">
              <img
                src={IMAGES.sobre}
                alt="Dr. Pedro Siqueira"
                className="w-full h-full min-h-[240px] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 sm:right-4 rounded-2xl bg-primary px-6 py-4 text-white shadow-soft">
              <p className="font-serif text-3xl font-bold leading-none">Residência</p>
              <p className="text-xs text-white/80 mt-2 max-w-[12rem]">Psiquiatria · HPM-MG</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
