import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import { NAV_LINKS, SITE, IMAGES } from '../../data/siteContent';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-nav' : ''
        }`}
        style={{ backgroundColor: 'rgba(250,250,248,0.92)', backdropFilter: 'blur(14px)' }}
      >
        <Container>
          <div className="flex h-16 md:h-20 items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-3 min-w-0" onClick={close}>
              <img
                src={IMAGES.logo}
                alt=""
                className="h-10 w-auto max-w-[140px] object-contain shrink-0"
              />
              <span className="min-w-0">
                <span className="block font-serif text-base sm:text-lg text-ink truncate">{SITE.doctorName}</span>
                <span className="hidden sm:block text-[11px] font-medium uppercase tracking-wide text-primary">
                  Psiquiatria · BH
                </span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-muted hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              ))}
              <PrimaryLinkButton href={SITE.doctoraliaUrl} className="!py-2.5 !px-5 text-sm">
                Agendar consulta
              </PrimaryLinkButton>
            </nav>

            <button
              type="button"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:bg-primary/10"
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>

        <div
          className={`lg:hidden overflow-hidden border-t border-line transition-[max-height,opacity] duration-300 ${
            open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#FAFAF8' }}
        >
          <div className="px-4 pb-5 pt-2 space-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-primary/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <PrimaryLinkButton href={SITE.doctoraliaUrl} className="w-full justify-center mt-2">
              Agendar consulta
            </PrimaryLinkButton>
          </div>
        </div>
      </header>
      <div aria-hidden className="h-16 md:h-20 shrink-0" />
    </>
  );
}
