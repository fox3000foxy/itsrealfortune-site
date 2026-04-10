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
      <h1 className="identity-name">Chloé Rolzhausen</h1>
      <p className="identity-handle">ItsRealFortune</p>
      <p><strong>Objectif du site :</strong> montrer des <strong>projets concrets</strong>, des <strong>collaborations</strong> et un <strong>contact direct</strong>.</p>
      <nav className="page-nav" aria-label="Navigation des sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="page-nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="social-icons">
        <a href="https://discord.com/users/301492402999263235" target="_blank" rel="noopener noreferrer" aria-label="Discord ItsRealFortune">
          <i className="fab fa-discord"></i>
        </a>
        <a href="https://instagram.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Instagram ItsRealFortune">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="YouTube ItsRealFortune">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://paypal.me/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="PayPal ItsRealFortune">
          <i className="fab fa-paypal"></i>
        </a>
        <a href="https://www.linkedin.com/in/chloé-rolzhausen-1b0439316/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Chloé Rolzhausen">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://steamcommunity.com/id/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Steam ItsRealFortune">
          <i className="fab fa-steam"></i>
        </a>
        <a href="https://twitch.tv/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Twitch ItsRealFortune">
          <i className="fab fa-twitch"></i>
        </a>
        <a href="https://github.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="GitHub ItsRealFortune">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://ko-fi.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Ko-fi ItsRealFortune">
          <i className="fab fa-ko-fi"></i>
        </a>
        <a href="https://reddit.com/user/Fast_Copy_514/" target="_blank" rel="noopener noreferrer" aria-label="Reddit ItsRealFortune">
          <i className="fab fa-reddit"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;

