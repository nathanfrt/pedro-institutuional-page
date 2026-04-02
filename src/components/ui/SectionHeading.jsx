export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', dark = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">{eyebrow}</p>
      )}
      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl leading-tight ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-sm sm:text-base ${dark ? 'text-white/75' : 'text-muted'}`}>{subtitle}</p>
      )}
    </div>
  );
}
