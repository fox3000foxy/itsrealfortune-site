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
          <p>Discord: <a href="https://discord.com/users/301492402999263235" target="_blank" rel="noopener noreferrer">discord.com/users/301492402999263235</a></p>
          <p>Instagram: <a href="https://instagram.com/itsrealfortune" target="_blank" rel="noopener noreferrer">instagram.com/itsrealfortune</a></p>
          <p>YouTube: <a href="https://www.youtube.com/@itsrealfortune" target="_blank" rel="noopener noreferrer">youtube.com/@itsrealfortune</a></p>
          <p>PayPal: <a href="https://paypal.me/itsrealfortune" target="_blank" rel="noopener noreferrer">paypal.me/itsrealfortune</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/chloé-rolzhausen-1b0439316/" target="_blank" rel="noopener noreferrer">linkedin.com/in/chloé-rolzhausen-1b0439316</a></p>
          <p>Steam: <a href="https://steamcommunity.com/id/itsrealfortune" target="_blank" rel="noopener noreferrer">steamcommunity.com/id/itsrealfortune</a></p>
          <p>Twitch: <a href="https://twitch.tv/itsrealfortune" target="_blank" rel="noopener noreferrer">twitch.tv/itsrealfortune</a></p>
          <p>GitHub: <a href="https://github.com/itsrealfortune" target="_blank" rel="noopener noreferrer">github.com/itsrealfortune</a></p>
          <p>Ko-fi: <a href="https://ko-fi.com/itsrealfortune" target="_blank" rel="noopener noreferrer">ko-fi.com/itsrealfortune</a></p>
          <p>Reddit: <a href="https://reddit.com/user/Fast_Copy_514/" target="_blank" rel="noopener noreferrer">reddit.com/user/Fast_Copy_514</a></p>
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


