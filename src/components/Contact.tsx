import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <section>
        <h2>Contactez-moi</h2>
        <div className="section-content">
          <p>Vous souhaitez me proposer une collaboration, une intervention ou simplement échanger sur l'astrophysique ou le café ? N'hésitez pas à me contacter !</p>
          <a href="mailto:contact@itsrealfortune.fr">contact@itsrealfortune.fr</a><br /><br />
          
          
          
          
          <div className="collaboration-info">
            <h3>Pourquoi me contacter ?</h3>
            <p>Si vous avez des questions sur l'astrophysique ou des explications sur des phénomènes cosmiques.</p>
            <p>Si vous souhaitez des conseils sur le café, des techniques d'extraction ou la préparation du café de spécialité.</p>
            <p>Si vous souhaitez des collaborations vidéo, des interventions dans des écoles ou des conférences de vulgarisation.</p>
            <p>Pour des séances de dégustation de café commentées avec une touche scientifique, c'est malheuresement pas possible, désolée.</p>
          </div>
        </div>
      </section>
      <section>
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


