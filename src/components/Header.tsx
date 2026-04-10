import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { href: '#about', label: 'A propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#collaborations', label: 'Collaborations' },
    { href: '#timeline', label: 'Parcours' },
    { href: '#skills', label: 'Competences' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header>
      <h1>ItsRealFortune</h1>
      <p>Astrophysique | Barista | Créatrice de Contenu</p>
      <nav className="page-nav" aria-label="Navigation des sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="page-nav-link">
            {item.label}
          </a>
        ))}
      </nav>
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

