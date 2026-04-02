import { Calendar, Phone } from 'lucide-react';
import Container from '../ui/Container';
import { SITE } from '../../data/siteContent';

export default function CtaBanner() {
  const wa = `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(SITE.whatsappPresetMessage)}`;
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-ink via-[#243528] to-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">Pronto para dar o próximo passo?</h2>
          <p className="text-sm sm:text-base text-white/75 mb-10">
            Agende pelo Doctoralia ou fale com o consultório pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold bg-primary-light text-white hover:opacity-95 transition-opacity shadow-soft"
            >
              <Calendar className="h-[18px] w-[18px]" />
              Agendar consulta
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-[18px] w-[18px]" />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
