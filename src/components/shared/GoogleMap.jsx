export default function GoogleMap() {
  return (
    <div className="w-full h-[min(420px,70vw)] rounded-2xl overflow-hidden shadow-soft border border-line">
      <iframe
        title="Dr. Pedro Siqueira — Rua Montes Claros, 1201 - Carmo, Belo Horizonte - MG"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.4231744489107!2d-43.9254189!3d-19.948698099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699ca133802e1%3A0xa6ba181bffbad98!2sRua%20Montes%20Claros%2C%201201%20-%20Carmo%2C%20Belo%20Horizonte%20-%20MG%2C%2030310-702!5e0!3m2!1spt-BR!2sbr!4v1760400940478!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
