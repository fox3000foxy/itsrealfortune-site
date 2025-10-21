import React from 'react';

const About: React.FC = () => {
  return (
    <section>
      <h2>À Propos</h2>
      <div className="section-content">
        <div className="portrait-container" style={{ textAlign: 'center' }}>
          <img 
            src="avatar.jpg" 
            alt="ItsRealFortune - Portrait" 
            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <p style={{ textAlign: 'justify' }}>
            Bonjour ! Je suis ItsRealFortune, étudiante en astrophysique théorique à l'Université de Caen. 
            Passionnée par l'exploration de l'univers et ses mystères, je partage mon temps entre mes études 
            et la création de contenu sur YouTube.
          </p>
        </div>
        <p>
          Sur ma chaîne, je présente des jeux vidéo en mettant l'accent sur le storytelling, cherchant à 
          rendre chaque expérience de jeu captivante et immersive. Mon parcours atypique m'a permis de 
          développer une vision unique où science et créativité se rencontrent.
        </p>
        <p>
          Je m'efforce de rendre la science accessible à tous, en utilisant des exemples concrets et des 
          analogies simples pour expliquer des concepts complexes.
        </p>
      </div>
    </section>
  );
};

export default About;

