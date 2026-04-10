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
      content: "Chloé a apporté une énergie très positive à l'équipe du café. Elle écoute les clients, garde le cap pendant les rushs et crée une ambiance chaleureuse.",
      author: 'Stéphane Aubert',
      role: 'Gérant, Taverne de la Paix',
    },
    {
      content: "J'ai découvert sa chaîne YouTube par hasard et j'ai été bluffée par la clarté des analyses. Les vidéos sont structurées, accessibles et vraiment captivantes.",
      author: 'Marie Leclerc',
      role: 'Abonnée YouTube',
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
