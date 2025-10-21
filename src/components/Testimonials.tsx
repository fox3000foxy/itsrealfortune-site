import React from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: 'Chloé a une capacité remarquable à rendre les concepts d\'astrophysique accessibles tout en maintenant la rigueur scientifique. Son enthousiasme est contagieux.',
      author: 'Dr. Sophie Martin',
      role: 'Professeure d\'Astrophysique, Université de Caen'
    },
    {
      content: 'Travailler avec Chloé au café est un plaisir. Sa précision et son attention aux détails, probablement issues de sa formation scientifique, font d\'elle une barista exceptionnelle.',
      author: 'Stéphane Aubert',
      role: 'Propriétaire du Café de la Taverne de la Paix'
    },
    {
      content: 'Les vidéos de Chloé m\'ont aidé à apprécier le storytelling dans les jeux vidéo comme jamais auparavant. Sa façon de lier narration et expérience de jeu est brillante et rafraîchissante.',
      author: 'Marie Leclerc',
      role: 'Abonnée YouTube'
    },
    {
      content: 'Chloé est une source d\'inspiration. Sa passion pour l\'astrophysique et le café se ressent dans tout ce qu\'elle fait. Je recommande également ses vidéos !',
      author: 'Alice Martin',
      role: 'Étudiante en Physique'
    },
    {
      content: 'Les présentations de Chloé sont toujours captivantes. Elle a un talent unique pour rendre des sujets complexes accessibles et intéressants.',
      author: 'Marc Dupuis',
      role: 'Organisateur d\'événements scientifiques'
    }
  ];

  return (
    <section>
      <h2>Témoignages</h2>
      <div className="section-content">
        <p>Ce que disent mes professeurs, collègues et abonnés à propos de mon travail.</p>
        <div className="testimonials" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card" 
              style={{ flex: '1 1 calc(33.33% - 20px)', margin: '10px' }}
            >
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

