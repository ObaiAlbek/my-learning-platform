import React from "react";

// WICHTIG: Hier oben { onStartClick } in die Klammern schreiben!
function Hero({ onStartClick }) {
  return (
    <div className="hero-section" style={{textAlign: 'center', padding: '50px 20px'}}>
      
      <h1 style={{fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a'}}>
        Lerne Code.<br />
        <span style={{color: '#243b55'}}>Baue die Zukunft.</span>
      </h1>
      
      <p style={{fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 40px'}}>
        Deine moderne Plattform für HTML und CSS. Vergiss langweilige Tutorials. 
        Hier lernst du praxisnah.
      </p>

      {/* WICHTIG: Hier unten onClick hinzufügen! */}
      <button 
        className="btn btn-primary" 
        style={{padding: '15px 40px', fontSize: '1.1rem'}}
        onClick={onStartClick} 
      >
        Jetzt starten
      </button>

    </div>
  );
}

export default Hero;