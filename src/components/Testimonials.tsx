import React, { memo } from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

import '../App.css';

const Testimonials: React.FC = memo(function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "Chloe a apporte une energie tres positive a l'equipe du cafe. Elle ecoute les clients, garde le cap pendant les rushs et cree une ambiance chaleureuse.",
      author: 'Stephane Aubert',
      role: 'Gerant, Taverne de la Paix',
    },
    {
      content: "J'ai decouvert sa chaine YouTube par hasard et j'ai ete bluffee par la clarte des analyses. Les videos sont structurees, accessibles et vraiment captivantes.",
      author: 'Marie Leclerc',
      role: 'Abonnee YouTube',
    },
    {
      content: "En tant qu'ancienne enseignante, j'ai vu peu d'etudiants aussi rigoureux et curieux. Meme avec un changement de voie, elle garde un vrai niveau d'exigence.",
      author: 'Lucie Bernard',
      role: 'Ex-enseignante',
    }
  ];

  return (
    <section id="testimonials" className="compact-testimonials">
      <h2>Retours utiles</h2>
      <div className='section-content'>
        <p>
          Une selection courte de retours contextuels. Pour des avis verifies, l'objectif est de centraliser
          progressivement sur des plateformes tierces.
        </p>
        <div className='testimonials'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='testimonial-card'>
              <div className='testimonial-quote'>«</div>
              <div className='testimonial-content'>
                <p>{testimonial.content}</p>
              </div>
              <div className='testimonial-author'>
                <div className='testimonial-author-info'>
                  <span className='testimonial-author-name'>{testimonial.author}</span>
                  <br />
                  <span className='testimonial-author-role'>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
