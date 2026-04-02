import Container from '../ui/Container';
import { IMAGES, SITE } from '../../data/siteContent';

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white/90 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img src={IMAGES.logo} alt="" className="h-10 w-auto opacity-95" />
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span className="font-serif text-base">{SITE.doctorName}</span>
              </div>
              <p className="text-xs text-white/50 mt-1">{SITE.specialtyLine}</p>
            </div>
          </div>
          <div className="text-center md:text-right text-xs text-white/45 max-w-md">
            <p>Dr. Pedro Henrique Siqueira © {new Date().getFullYear()}. Todos os direitos reservados.</p>
            <p className="mt-2">
              <a href={SITE.developerCredit.href} className="underline-offset-2 hover:underline text-white/60">
                {SITE.developerCredit.label}
              </a>
            </p>
            <p className="mt-3 text-[11px] leading-relaxed">
              Este site não substitui uma consulta médica. Em caso de emergência, procure serviço de urgência.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
