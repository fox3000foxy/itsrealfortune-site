import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#collaborations', label: 'Collaborations' },
    { href: '#timeline', label: 'Parcours' },
    { href: '#skills', label: 'Compétences' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header style={{ position: 'static' }}>
      <p className="identity-handle">ItsRealFortune</p>
      <nav className="page-nav" aria-label="Navigation des sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="page-nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
