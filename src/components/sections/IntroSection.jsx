import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import Container from '../ui/Container';
import { intro, IMAGES, SITE } from '../../data/siteContent';
import { ShieldCheck, Star } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="inicio" className="hero-pattern relative pt-8 pb-16 md:pb-24">
      <Container>
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Mobile: texto primeiro; desktop: coluna esquerda */}
          <div className="order-1 space-y-6">
            <div className="animate-in-view delay-1 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide bg-primary-muted text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {intro.badge}
            </div>
            <h1 className="animate-in-view delay-2 font-serif text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-ink">
              {intro.doctorName}
            </h1>
            <p className="animate-in-view delay-3 text-sm sm:text-base font-medium text-primary/90 tracking-wide">
              {intro.specialtyLine}
            </p>
            <p className="animate-in-view delay-4 text-base sm:text-lg text-muted leading-relaxed max-w-xl pt-4">
              {intro.paragraph}
            </p>
            <div className="animate-in-view delay-5 flex flex-col sm:flex-row gap-3">
              <PrimaryLinkButton href={SITE.doctoraliaUrl}>Agende sua consulta</PrimaryLinkButton>
              <PrimaryLinkButton href="#sobre-mim" variant="outline" showCalendar={false}>
                Sobre mim
              </PrimaryLinkButton>
            </div>
          </div>

          {/* Mobile: imagem depois do texto; desktop: coluna direita */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-light to-primary-soft shadow-2xl ring-1 ring-black/5">
                <img
                  src={IMAGES.perfil}
                  alt="Dr. Pedro Siqueira"
                  className="w-full h-auto object-cover object-top max-h-[440px] sm:max-h-[520px]"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-left-6 rounded-2xl bg-white p-4 shadow-soft border border-line/80">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-muted">
                    <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink">Atendimento ético</p>
                    <p className="text-[10px] text-subtle">Escuta e sigilo profissional</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-2 sm:-right-5 rounded-2xl bg-white p-4 shadow-soft border border-line/80">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-400" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink">Avaliações</p>
                    <p className="text-[10px] text-subtle">Doctoralia & Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
