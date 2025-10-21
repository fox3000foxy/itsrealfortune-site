import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
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
      <p>&copy; 2025 ItsRealFortune. Tous droits réservés.</p>
      <p>
        <a href="/sitemap.xml">Sitemap</a> |{' '}
        <a href="/privacy-policy">Privacy Policy</a> |{' '}
        <a href="#">Back to Top</a>
      </p>
    </footer>
  );
};

export default Footer;

