import { useState } from 'react';
import { X } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import PrimaryLinkButton from '../ui/PrimaryLinkButton';
import { topicCards, topicModalCategories, SITE, IMAGES } from '../../data/siteContent';

export default function TopicsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="saude-mental" className="py-16 md:py-24 bg-white border-t border-line/80">
      <Container>
        <SectionHeading
          eyebrow="Temas"
          title="Áreas que atendo"
          subtitle="Informação educativa — o diagnóstico e o plano terapêutico são individualizados na consulta."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {topicCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted">
                <img src={card.img} alt="" className="h-9 w-9 object-contain" />
              </div>
              <h3 className="font-serif text-lg text-ink mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            Ver todos os tratamentos
          </button>
          <PrimaryLinkButton href={SITE.doctoraliaUrl} showCalendar={false}>
            <span className="inline-flex items-center gap-2">
              <img src={IMAGES.calender} alt="" className="h-5 w-5" />
              Marque sua consulta
            </span>
          </PrimaryLinkButton>
        </div>
      </Container>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Lista de tratamentos"
        >
          <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-2xl my-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-surface"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-6 sm:p-10">
              <h3 className="font-serif text-2xl text-ink mb-8 pr-10">Todos os tratamentos</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topicModalCategories.map((cat) => (
                  <div key={cat.title} className="rounded-2xl border border-line p-5 bg-surface">
                    <div className="flex items-start gap-3 mb-3">
                      <img src={cat.img} alt="" className="h-10 w-10 object-contain shrink-0" />
                      <p className="text-sm font-semibold text-ink leading-snug">{cat.title}</p>
                    </div>
                    <ul className="text-sm text-muted space-y-1.5 list-disc list-inside">
                      {cat.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
