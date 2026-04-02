import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { testimonialCards, testimonialsIntro, SITE, IMAGES } from '../../data/siteContent';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-line/80">
      <Container>
        <SectionHeading eyebrow="Depoimentos" title={testimonialsIntro.title} align="center" />
        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-muted -mt-6 mb-12">
          {testimonialsIntro.blurb}
        </p>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr] items-start">
          <a
            href={SITE.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm hover:shadow-soft transition-shadow mx-auto w-full max-w-sm lg:mx-0"
          >
            <p className="text-sm font-semibold text-ink">Excelente</p>
            <img src={IMAGES.stars} alt="" className="h-8 object-contain my-3" />
            <p className="text-xs text-subtle">
              Com base em <b>20 avaliações</b>
            </p>
            <img src={IMAGES.google} alt="Google" className="h-9 mt-4 object-contain" />
          </a>

          <div className="min-w-0">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5200, disableOnInteraction: false }}
              loop
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonialCards.map((item) => (
                <SwiperSlide key={item.id}>
                  <article className="h-full rounded-2xl border border-line bg-surface p-6 flex flex-col transition-transform hover:-translate-y-0.5 hover:shadow-soft">
                    <div className="flex gap-0.5 mb-4" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted leading-relaxed flex-1">&ldquo;{item.desc}&rdquo;</p>
                    <div className="mt-6 pt-4 border-t border-line flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                        {item.title.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.title}</p>
                        <p className="text-xs text-subtle">Paciente</p>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
