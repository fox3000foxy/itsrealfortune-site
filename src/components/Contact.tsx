import React from 'react';
import ContactForm from './ContactForm';

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
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;


