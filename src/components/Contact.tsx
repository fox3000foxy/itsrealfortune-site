import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <section id="contact">
        <h2>Contactez-moi</h2>
        <div className="section-content">
          <p>Vous souhaitez proposer une collaboration, une intervention ou un projet concret ? Parlons-en.</p>
          <a href="mailto:contact@itsrealfortune.fr">contact@itsrealfortune.fr</a><br /><br />
          <div className="collaboration-info">
            <h3>Pourquoi me contacter ?</h3>
            <p>Collaboration video ou partenariat sur une campagne.</p>
            <p>Intervention pedagogique autour de la science et de la vulgarisation.</p>
            <p>Projet editorial ou format social orienté storytelling.</p>
          </div>
        </div>
      </section>
      <section id="find-me">
        <h2>Où me trouver</h2>
        <div className="section-content">
          <p>Vous pouvez me retrouver en ligne sur mes différentes plateformes ou physiquement à Caen.</p>
          <p>Email: <a href="mailto:contact@itsrealfortune.fr">contact@itsrealfortune.fr</a></p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


