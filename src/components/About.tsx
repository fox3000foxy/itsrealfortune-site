import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section" style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
          Je fais le lien entre <strong>science</strong>, <strong>storytelling</strong> et <strong>création de contenu</strong>.
        </p>
        <p>
          En deux mots : qui je suis, ce que je fais, comment me joindre.
        </p>
        {/* <div className="social-icons">
          <a href="https://discord.com/users/301492402999263235" target="_blank" rel="noopener noreferrer" aria-label="Discord ItsRealFortune">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://instagram.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Instagram ItsRealFortune">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="YouTube ItsRealFortune">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/chloé-rolzhausen-1b0439316/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Chloé Rolzhausen">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="GitHub ItsRealFortune">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitch.tv/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Twitch ItsRealFortune">
            <i className="fab fa-twitch"></i>
          </a>
          <a href="https://ko-fi.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Ko-fi ItsRealFortune">
            <i className="fab fa-ko-fi"></i>
          </a>
          <a href="https://paypal.me/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="PayPal ItsRealFortune">
            <i className="fab fa-paypal"></i>
          </a>
          <a href="https://steamcommunity.com/id/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Steam ItsRealFortune">
            <i className="fab fa-steam"></i>
          </a>
          <a href="https://reddit.com/user/Fast_Copy_514/" target="_blank" rel="noopener noreferrer" aria-label="Reddit ItsRealFortune">
            <i className="fab fa-reddit"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default About;
