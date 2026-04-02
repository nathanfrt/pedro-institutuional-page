import { Calendar } from 'lucide-react';

export default function PrimaryLinkButton({
  href,
  children,
  variant = 'solid',
  className = '',
  showCalendar = true,
  target,
  rel,
}) {
  const external = /^https?:\/\//i.test(href || '');
  const resolvedTarget = target ?? (external ? '_blank' : undefined);
  const resolvedRel = rel ?? (external ? 'noopener noreferrer' : undefined);

  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';
  const solid =
    'bg-primary text-white shadow-sm hover:bg-primary-light hover:shadow-soft active:scale-[0.99]';
  const outline =
    'border-2 border-primary text-primary bg-transparent hover:bg-primary/5';

  return (
    <a
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      className={`${base} ${variant === 'outline' ? outline : solid} ${className}`}
    >
      {showCalendar && <Calendar className="h-[18px] w-[18px] shrink-0" aria-hidden />}
      {children}
    </a>
  );
}
