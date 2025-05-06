import React from 'react';
import wpp from '../../Images/whatsappf.png'
import './WhatsAppButton.css'; 

const WhatsAppButton = () => {
  const contactText = "Olá, Dr. Pedro!\n\nEncontrei seu site e me interessei pela consulta. Gostaria de saber como funciona o atendimento e quais são as opções disponíveis.\n\nObrigado(a)!";
  const phoneNumber = '5531995054490';
  const message = `${encodeURIComponent(contactText)}`;
  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={link} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <img src={wpp} alt="WhatsApp" />
      <span className="whatsapp-badge">1</span>
    </a>
  );
};

export default WhatsAppButton;
