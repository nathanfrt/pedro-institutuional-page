import { IMAGES, SITE } from '../../data/siteContent';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const link = `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(SITE.whatsappPresetMessage)}`;

  return (
    <a href={link} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <img src={IMAGES.wppFloat} alt="" />
    </a>
  );
}
