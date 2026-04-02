import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import { clinic, IMAGES, SITE } from '../../data/siteContent';

export default function ClinicSection() {
  return (
    <section id="consultorio" className="py-16 md:py-24 bg-sand">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <SectionHeading title={clinic.title} eyebrow="Consultório" />
            <div className="text-sm sm:text-base text-muted leading-relaxed space-y-4">{clinic.body}</div>
            <div className="mt-10">
              <PrimaryLinkButton href={SITE.doctoraliaUrl}>Agende sua consulta</PrimaryLinkButton>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-soft ring-1 ring-black/5 bg-white">
            <img src={IMAGES.consultorio} alt="Consultório" className="w-full h-auto object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
