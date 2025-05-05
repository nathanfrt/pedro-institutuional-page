const GoogleMap = () => {
    return (
      <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <iframe
          title="Dr. Pedro Siqueira - Av. Afonso Pena, 2770 - Savassi"
          src="https://www.google.com/maps?q=Av.+Afonso+Pena,+2770+-+Savassi,+Belo+Horizonte+-+MG&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  