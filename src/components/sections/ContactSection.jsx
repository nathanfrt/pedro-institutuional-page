import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import GoogleMap from '../shared/GoogleMap';
import { SITE } from '../../data/siteContent';

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-muted">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-subtle">{label}</p>
        <div className="mt-1 text-sm font-semibold text-ink">{children}</div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const wa = `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(SITE.whatsappPresetMessage)}`;

  return (
    <section id="contato" className="py-16 md:py-24 bg-white border-t border-line/80">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <SectionHeading eyebrow="Contato" title="Entre em contato" />
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-10">
              Indique o melhor horário que gostaria de ser atendido.
              <br />
              <strong>Entraremos em contato para confirmar e passar mais orientações.</strong>
            </p>

            <div className="space-y-6">
              <PrimaryLinkButton href={SITE.doctoraliaUrl} className="w-full sm:w-auto justify-center">
                Agendar consulta
              </PrimaryLinkButton>
              <ContactRow icon={Phone} label="Telefone / WhatsApp">
                <a href={wa} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                  {SITE.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Instagram">
                <a
                  href={SITE.instagramUrl}
                  className="hover:text-primary font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @siqueirapsiquiatria
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Endereço">
                <span className="font-normal text-muted">{SITE.address}</span>
              </ContactRow>
            </div>

            <p className="mt-10 text-sm text-muted leading-relaxed">
              Para pacientes de outras cidades ou países, ofereço consultas online com a mesma qualidade e sigilo do atendimento presencial.
              Atenda-se de qualquer lugar com conforto e segurança.
              <br />
              <br />
              <strong>Se precisar de ajustes ou mais detalhes, me avise!</strong>
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Localização" title="Onde estou?" />
            <GoogleMap />
          </div>
        </div>
      </Container>
    </section>
  );
}
