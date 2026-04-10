import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact">
        <h2>Contactez-moi</h2>
        <div className="section-content">
          <p><strong>Collaboration</strong>, <strong>intervention</strong> ou <strong>projet média</strong> ? Parlons-en.</p>
          <a href="mailto:contact@itsrealfortune.fr">contact@itsrealfortune.fr</a><br /><br />
          <div className="collaboration-info">
            <h3>Pourquoi me contacter ?</h3>
            <p><strong>Vidéo</strong> ou partenariat de campagne.</p>
            <p><strong>Vulgarisation</strong> et intervention pédagogique.</p>
            <p><strong>Format social</strong> orienté storytelling.</p>
          </div>
        </div>
      </section>
      <section id="find-me">
        <h2>Où me trouver</h2>
        <div className="section-content">
          <p>Liens directs et utiles.</p>
          <p>Email: <a href="mailto:contact@itsrealfortune.fr">contact@itsrealfortune.fr</a></p>
          <p>GitHub: <a href="https://github.com/itsrealfortune" target="_blank" rel="noopener noreferrer">github.com/itsrealfortune</a></p>
          <div className="social-icons">
            <a href="https://instagram.com/itsrealfortune" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@itsrealfortune" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/chloé-rolzhausen-1b0439316/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="GitHub ItsRealFortune">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


