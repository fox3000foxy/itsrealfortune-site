import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>À Propos</h2>
      <div className="section-content">
        <div className="portrait-container" style={{ textAlign: 'center' }}>
          <img 
            src="avatar.jpg" 
            alt="Chloé Rolzhausen - Portrait" 
            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <p style={{ textAlign: 'center' }}>
            <strong>Chloé Rolzhausen</strong>, alias <strong>ItsRealFortune</strong>.
          </p>
        </div>
        <p>
          Je fais le lien entre <strong>science</strong>, <strong>storytelling</strong> et <strong>creation de contenu</strong>.
        </p>
        <p>
          Ce site sert a voir vite: <strong>qui je suis</strong>, <strong>ce que je fais</strong> et <strong>comment me contacter</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;

