import React from 'react';

interface Partner {
    name: string;
    description: string;
    image: string;
    link: string;
}

const Collaborations: React.FC = () => {
    const partners: Partner[] = [
        {
            name: 'ElixLens',
            description: 'ElixLens est une entreprise de photographie créée par Elise Riboux. Elle y partage sa passion pour la photographie et est consultant photographie pour FoxyAgency.',
            image: './elixlens.ico',
            link: 'https://elixlens.fox3000foxy.com'
        },
        {
            name: 'GlaDOS Bot',
            description: 'GlaDOS Bot est un bot Discord créé par RoxasYTB. Il est conçu pour être un assistant pour les serveurs Discord et se pilote par du texte. Il possède également des fonctions de sécurité que les autres n\'ont pas.',
            image: './glados.png',
            link: 'https://aperture-sciences.com'
        },
        {
            name: 'Fox3000foxy\'s Studio',
            description: 'Fox3000foxy\'s Studio est le serveur Discord de mon ami Fox3000foxy. C\'est un serveur communautaire sur lequel j\'ai pu rencontrer de nombreuses personnes qui m\'ont aidé à grandir et à devenir la personne que je suis aujourd\'hui.',
            image: './fox3000foxy.png',
            link: 'https://fox3000foxy.com'
        }
    ];

    return (
        <section>
            <h2>Collaborations</h2>
            <div className="section-content">
                <p>J'ai eu le plaisir de collaborer avec ces organisations et marques qui partagent mes passions pour la science et le café, et la création de contenu.</p>
                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-logo">
                            <a href={partner.link} style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
                                <h1>{partner.name}</h1>
                                <span>{partner.description}</span><br />
                                <img src={partner.image} alt={partner.name} className="no-shadow" />
                            </a>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '30px', textAlign: 'center', padding: '15px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '10px' }}>
                    <p style={{ marginBottom: '10px' }}>Fièrement représentée par :</p>
                    <a href="https://foxyagency.fr" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
                        <span style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}>
                            <img src="./foxyagency-full.png" alt="FoxyAgency" style={{ maxWidth: '200px', borderRadius: '5px' }} className="no-shadow" />
                        </span>
                        <p>FoxyAgency est mon agence de communication. Elle est chargée de la gestion de mes réseaux sociaux et de la création de contenu pour mes chaînes. Grâce à elle, j'ai pu obtenir mes premières collaborations et gagner en visibilité sur les autres réseaux sociaux.</p>
                        <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Visitez <a href="https://foxyagency.fr" target="_blank" rel="noopener noreferrer">foxyagency.fr</a> pour plus d'informations</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Collaborations;


