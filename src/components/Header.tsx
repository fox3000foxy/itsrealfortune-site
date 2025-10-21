import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>ItsRealFortune</h1>
      <p>Astrophysique | Barista | Créatrice de Contenu</p>
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
    </header>
  );
};

export default Header;

