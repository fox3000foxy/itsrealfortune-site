import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!isPrivacyOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPrivacyOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isPrivacyOpen]);

  return (
    <>
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
          <a href="https://github.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="GitHub ItsRealFortune">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://ko-fi.com/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Ko-fi ItsRealFortune">
            <i className="fa-solid fa-mug-hot"></i>
          </a>
          <a href="https://discord.com/users/301492402999263235" target="_blank" rel="noopener noreferrer" aria-label="Discord ItsRealFortune">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://paypal.me/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="PayPal ItsRealFortune">
            <i className="fab fa-paypal"></i>
          </a>
          <a href="https://steamcommunity.com/id/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Steam ItsRealFortune">
            <i className="fab fa-steam"></i>
          </a>
          <a href="https://twitch.tv/itsrealfortune" target="_blank" rel="noopener noreferrer" aria-label="Twitch ItsRealFortune">
            <i className="fab fa-twitch"></i>
          </a>
          <a href="https://reddit.com/user/Fast_Copy_514/" target="_blank" rel="noopener noreferrer" aria-label="Reddit ItsRealFortune">
            <i className="fab fa-reddit"></i>
          </a>
        </div>
        <p>&copy; 2025 ItsRealFortune. Tous droits réservés.</p>
        <p>
          <button type="button" className="footer-link-button" onClick={() => setIsPrivacyOpen(true)}>
            Politique de confidentialité
          </button>
          {' | '}
          <a href="#">Haut de page</a>
        </p>
      </footer>

      {isPrivacyOpen && (
        <div className="privacy-modal-overlay" onClick={() => setIsPrivacyOpen(false)}>
          <div
            className="privacy-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="privacy-modal-title">Politique de confidentialité</h3>
            <p>
              Nous collectons uniquement les informations que vous nous envoyez volontairement
              (par exemple via e-mail ou formulaire de contact).
            </p>
            <p>
              Ces données servent uniquement à répondre à votre demande et ne sont pas revendues.
            </p>
            <p>
              Pour toute demande de suppression ou de modification, contactez :
              {' '}
              <a href="mailto:contact@itsrealfortune.fr">contact@itsrealfortune.fr</a>
            </p>
            <button type="button" className="privacy-close-btn" onClick={() => setIsPrivacyOpen(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
